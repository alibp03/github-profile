/* eslint-disable react/prop-types */
import nestingIcon from "../assets/icons/Nesting.svg";
import starIcon from "../assets/icons/Star.svg";
import chieldAltIcon from "../assets/icons/Chield_alt.svg";

function RepoItem({ item }) {
  return (
    <li className="bg-repoitem flex max-w-[520px] flex-col space-y-3 rounded-lg p-4 text-slate-400">
      <h3 className="text-lg text-slate-300">{item.name}</h3>
      <p className="text-md font-normal sm:mb-7">
        {item.description ? item.description : "no description"}
      </p>

      {/* <div className="flex flex-col flex-wrap gap-x-10 sm:flex-row"> */}
      <div className="mt-auto flex items-center gap-x-3.5">
        <div className="flex items-center gap-1">
          <img src={nestingIcon} alt="nesting icon" />
          <span>{item.forks}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={starIcon} alt="star icon" /> <span>{item.watchers}</span>
        </div>
        {item.license?.key && (
          <div className="flex items-center gap-1">
            <img src={chieldAltIcon} alt="chield alt icon" />
            <span className="uppercase">{item.license?.key}</span>
          </div>
        )}
      </div>
      {/* </div> */}
    </li>
  );
}

export default RepoItem;
