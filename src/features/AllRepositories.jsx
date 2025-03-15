import { useSelector } from "react-redux";
import { getRepo } from "./githubSlice";
import Repositories from "./Repositories";
import { useNavigate } from "react-router-dom";

function AllRepositories() {
  const navigate = useNavigate();

  const githubRepo = useSelector(getRepo);

  return (
    <div className="flex h-full flex-col justify-center bg-slate-800 p-10 px-8 pt-36 pb-14 md:px-12 md:pb-20 lg:px-24 xl:px-48">
      <button
        className="absolute top-10 left-10 cursor-pointer rounded-md bg-slate-600 px-5 py-2 text-slate-100"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>

      <Repositories githubRepo={githubRepo} />
    </div>
  );
}

export default AllRepositories;
