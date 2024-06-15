import { Link } from "react-router-dom";

export const PersonCard = () => {
  return (
    <div className="bg-white flex flex-col gap-4 w-80 p-5 items-center rounded-md m-3 h-min">
      <div className="flex justify-between items-center">
        <Link to="/profile">
          <img src="/avatar.svg" alt="avatar" />
        </Link>
        <div className="flex flex-col gap-3">
          <h3 className="text-black">
            <Link className="text-black" to="/profile">
              Matthew Turner
            </Link>
          </h3>
          <span className="text-gray-400">Washington</span>
        </div>
      </div>
      <ul className="flex gap-3">
        <i>
          <div className="flex flex-col gap-1 items-center">
            <span className="">59862</span>
            <span className="">Likes</span>
          </div>
        </i>
        <i>
          <div className="flex flex-col gap-1 items-center border-x px-2">
            <span className="">8591</span>
            <span className="">Following</span>
          </div>
        </i>
        <li>
          <div className="flex flex-col gap-1 items-center">
            <span className="">784514</span>
            <span className="">Followers</span>
          </div>
        </li>
      </ul>
      <div className="flex justify-between items-center w-full">
        <button className="rounded-lg border bg-gray-50 hover:text-white hover:bg-blue-600 px-3 py-1">
          Add Friend
        </button>
        <button className="rounded-lg border bg-gray-50 hover:text-white hover:bg-blue-600 px-3 py-1">
          Send Message
        </button>
      </div>
    </div>
  );
};
