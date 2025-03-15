/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { getProfile } from "./githubSlice";

function Profile() {
  const { name, bio, avatar, followers, following, location } =
    useSelector(getProfile);

  return (
    <div className="relative mb-8 space-y-8 text-slate-300">
      <div className="space-y-8 md:flex md:items-end md:gap-5 md:space-y-0 lg:gap-12">
        <img
          src={avatar}
          alt="profile image"
          className="-mt-7 h-24 rounded-xl border-6 border-b-0 border-slate-800"
        />

        <ul className="flex flex-col gap-5 text-sm md:flex-row">
          <li className="divide-x-[1px] divide-gray-600 self-start rounded-lg bg-slate-900 p-3">
            <span className="p-2 pr-4">Followers</span>
            <span className="p-2 pl-4">{followers}</span>
          </li>
          <li className="divide-x-[1px] divide-gray-600 self-start rounded-lg bg-slate-900 p-3">
            <span className="p-2 pr-4">Following</span>
            <span className="p-2 pl-4">{following}</span>
          </li>
          {location && (
            <li className="divide-x-[1px] divide-gray-600 self-start rounded-lg bg-slate-900 p-3">
              <span className="p-2 pr-4">Location</span>
              <span className="p-2 pl-4">{location}</span>
            </li>
          )}
        </ul>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl">{name}</h1>
        <p className="text-sm font-light">{bio}</p>
      </div>
    </div>
  );
}

export default Profile;
