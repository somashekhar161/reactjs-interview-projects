import React, { useEffect, useState } from "react";
import UserCard from "./user-card";

const GithubProfileFinder = () => {
  /* https://api.github.com/search/users?q=fullname:somashekar&type=Users */

  const [Username, setUsername] = useState("somashekar");
  const [Users, setUsers] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const handleOnChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.github.com/search/users?q=fullname:${Username}&type=Users`,
    );
    const data = await res.json();
    if ("items" in data) {
      setUsers(data.items);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (IsLoading) {
    return <div className="animate-ping text-center"> Loading... </div>;
  }
  if (Users.length == 0) {
    return <div> No users | API LIMIT REACHED PLEASE WAIT</div>;
  }
  return (
    <div className=" h-svh space-y-14 bg-gray-800 p-8">
      <div className=" flex items-center justify-center gap-4">
        <input
          type="text"
          placeholder="name"
          className="rounded p-4 text-2xl shadow-xl shadow-black "
          value={Username}
          onChange={handleOnChangeUserName}
        ></input>
        <button
          onClick={fetchUsers}
          className=" rounded bg-blue-400 p-4  px-8 text-xl font-semibold shadow-lg shadow-black"
        >
          search
        </button>
      </div>
      <div className=" grid h-5/6 grid-cols-4 justify-center gap-4 overflow-y-auto rounded bg-gray-500 p-8">
        {Users &&
          Users.length > 0 &&
          Users.map((user, i) => {
            return <UserCard key={i} user={user} />;
          })}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
