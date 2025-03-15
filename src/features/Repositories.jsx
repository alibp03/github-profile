/* eslint-disable react/prop-types */
import RepoItem from "./RepoItem";

function Repositories({ githubRepo }) {
  return (
    <div className="">
      <ul className="grid gap-10 pb-7 md:grid-cols-2">
        {githubRepo.map((item) => (
          <RepoItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Repositories;
