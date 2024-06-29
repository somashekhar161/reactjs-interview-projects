import React, { useEffect, useState } from "react";

const SearchAutoCompleteWithAPi = () => {
  const [SearchParam, setSearchParam] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [FilteredUsers, setFilteredUsers] = useState([]);
  const [UsersList, setUsersList] = useState([]);

  function handleSearchInput(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      setFilteredUsers(
        UsersList.length > 0
          ? UsersList.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [],
      );
    }
  }
  function handleSuggestionClick(e) {
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsersList(data.users.map((user) => user.firstName));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const ShowSuggestion = FilteredUsers.length > 0;
  return (
    <div className="h-svh max-h-svh overflow-y-auto bg-gray-800">
      <div className="flex justify-center p-20 ">
        {IsLoading ? (
          <div className="text-white">Loading... PLease Wait </div>
        ) : (
          <input
            className=" rounded  bg-gray-200 p-2  px-4 text-3xl shadow shadow-black transition-transform active:scale-105 "
            value={SearchParam}
            onChange={handleSearchInput}
          ></input>
        )}
      </div>
      <div className="flex  justify-center">
        {ShowSuggestion && (
          <ul className=" flex w-full  max-w-3xl flex-col items-center  space-y-2 p-4">
            {FilteredUsers.map((user) => (
              <li
                key={user}
                className="w-64 cursor-pointer select-none  rounded bg-gray-400 p-4 transition-all duration-300 hover:scale-105 hover:bg-gray-300 active:scale-95"
                onClick={handleSuggestionClick}
              >
                {user}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchAutoCompleteWithAPi;
