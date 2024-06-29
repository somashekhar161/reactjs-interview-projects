import React, { useEffect, useState } from "react";

const UserCard = ({ user }) => {
  const [UserDetails, setUserDetails] = useState({});
  const [IsLoading, setIsLoading] = useState(false);
  const fetchUserDetail = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(user.url);
      const data = await res.json();
      setUserDetails(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUserDetail();
  }, [user.id]);

  const parsedDate = new Date(
    UserDetails.created_at || "2011-08-12T15:47:51Z",
  ).toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  if (IsLoading) {
    return <div className=" "> Loading ....</div>;
  }
  return (
    <div className="flex   justify-between gap-8  rounded bg-slate-500 shadow-md shadow-black">
      <div className="flex w-1/2 items-center justify-center p-4">
        <div className="size-24  rounded-full shadow-xl shadow-black">
          <img
            className="h-full w-full rounded-full object-cover "
            src={user.avatar_url}
            alt={user.login}
          ></img>
        </div>
      </div>

      <div className="flex h-full w-1/2  flex-col  items-start justify-center gap-2 rounded bg-gray-200 p-2">
        <div className="text-wrap text-2xl font-semibold underline">
          <a href={user.html_url} target="_blank" className="">
            {UserDetails.name || user.login}
          </a>
        </div>
        <div className=" font-medium">User Joined on {parsedDate}</div>
        <div className="  font-medium">
          public_repos: {UserDetails.public_repos}
        </div>
        <div className="flex justify-between">
          <div className=" font-medium">followers: {UserDetails.followers}</div>
          <div className=" font-medium">following: {UserDetails.following}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
