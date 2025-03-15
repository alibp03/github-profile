import { useEffect, useRef, useState } from "react";
// import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

import searchIcon from "../assets/icons/search.svg";
import {
  addQuery,
  fetchGithubProfile,
  getProfile,
  getQuery,
  getStatus,
} from "./githubSlice";
import { useDispatch, useSelector } from "react-redux";
// import { getGithubProfile } from "../services/apiGithub";

function Search() {
  const { avatar, name, bio } = useSelector(getProfile);
  const status = useSelector(getStatus);
  const prevQuery = useSelector(getQuery);

  const [query, setQuery] = useState(() => (prevQuery ? prevQuery : ""));
  const inputEl = useRef(null);

  const dispatch = useDispatch();

  function handleClearQuery() {
    if (query) setQuery("");
  }

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <div className="absolute top-5 left-1/2 z-50 flex w-96 -translate-x-1/2 items-center gap-4 rounded-md bg-slate-800 p-2.5 px-4 xl:w-[30rem]">
      <img src={searchIcon} alt="search icon" />
      <input
        type="text"
        placeholder="username"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          dispatch(addQuery(value));
          dispatch(fetchGithubProfile(value));
        }}
        className="w-full text-sm text-slate-200 outline-0 placeholder:text-sm placeholder:text-slate-300/80"
        ref={inputEl}
      />
      <span
        className="cursor-pointer text-2xl text-slate-200"
        onClick={handleClearQuery}
      >
        &times;
      </span>

      {query && (
        <ul
          className="absolute top-14 left-0 mb-10 flex w-full flex-col gap-2 rounded-md bg-slate-900 p-1.5"
          onClick={() => setQuery("")}
        >
          <span
            className="absolute -top-1 right-1 cursor-pointer text-2xl text-slate-200"
            onClick={handleClearQuery}
          >
            &times;
          </span>
          <li className="flex items-center gap-3">
            {status === "loading" ? (
              <p className="text-md p-3 font-light text-slate-200">
                Loading...
              </p>
            ) : name ? (
              <>
                <img
                  src={avatar}
                  alt="profile image"
                  className="h-[70px] rounded-md"
                />
                <div>
                  <h1 className="text-lg text-slate-200">{name}</h1>
                  <p className="text-sm font-extralight text-slate-300">
                    {bio}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-md p-3 font-light text-slate-200">
                username not found
              </p>
            )}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Search;
