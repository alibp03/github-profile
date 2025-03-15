import { useSelector } from "react-redux";
import Profile from "./Profile";
import Repositories from "./Repositories";
import { getProfile, getRepo, getStatus } from "./githubSlice";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  const { name } = useSelector(getProfile);
  const status = useSelector(getStatus);
  const githubRepo = useSelector(getRepo);

  // const isLoading = true;
  const isLoading = status === "loading";

  useEffect(
    function () {
      if (!name) return;
      document.title = `Github Profile // ${name}`;

      return () => (document.title = "Github Profile");
    },
    [name],
  );

  return (
    <main
      className={`h-full bg-slate-800 px-8 pb-14 md:px-12 md:pb-20 lg:px-24 xl:px-48 ${githubRepo?.length || "h-screen"} ${isLoading ? "flex h-screen justify-center pt-32" : ""}`}
    >
      {/* <Profile />
      <Repositories /> */}

      {isLoading ? (
        <MoonLoader className="" size={70} color="#fff" />
      ) : (
        name && (
          <>
            <Profile />
            <Repositories githubRepo={githubRepo.slice(0, 4)} />

            <Link to={`/${name}`}>
              <p className="mt-14 text-center text-slate-200">
                View all repositories
              </p>
            </Link>
          </>
        )
      )}
    </main>
  );
}

export default Main;
