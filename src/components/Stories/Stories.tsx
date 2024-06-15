export const Stories = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-3 h-40">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Stories </h1>
        <span className="text-blue-600 underline cursor-pointer">See All</span>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <img className="w-10 h-10" src="/avatar.svg" alt="avatar" />
          <span>Add Story</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <img className="w-10 h-10" src="/avatar.svg" alt="avatar" />
          <span>Add Story</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <img className="w-10 h-10" src="/avatar.svg" alt="avatar" />
          <span>Add Story</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <img className="w-10 h-10" src="/avatar.svg" alt="avatar" />
          <span>Add Story</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <img className="w-10 h-10" src="/avatar.svg" alt="avatar" />
          <span>Add Story</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <img className="w-10 h-10" src="/avatar.svg" alt="avatar" />
          <span>Add Story</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <img className="w-10 h-10" src="/avatar.svg" alt="avatar" />
          <span>Add Story</span>
        </div>
      </div>
    </div>
  );
};
