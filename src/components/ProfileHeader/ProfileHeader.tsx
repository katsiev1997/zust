export const ProfileHeader = () => {
  return (
    <div className="w-full h-80 p-4 bg-blue-300 border rounded-xl">
      <div className="flex justify-between items-center">
        <img
          src="https://templates.envytheme.com/zust/default/assets/images/my-profile.jpg"
          alt="avatar"
        />
        <div>
          <h4 className="text-xl font-semibold hover:text-blue-500 transition-all">
            Matthew Turner
          </h4>
          <p className="text-gray-500 cursor-pointer">matthew@gmail.com</p>
        </div>
        <div className="flex flex-col gap-10">
          <button className="hover:bg-blue-700 bg-gray-100 transition-all hover:text-white font-semibold py-2 px-4 rounded">
            Edit Profile
          </button>
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
        </div>
      </div>
    </div>
  );
};
