export const FriendsSearch = () => {
  return (
    <div className="bg-white rounded-xl h-32 flex justify-between items-center p-5 w-full">
      <div className="flex gap-3">
        <span className="text-xl font-semibold hover:text-blue-600 hover:underline cursor-pointer">
          Friends Request
        </span>
        <span className="text-xl font-semibold hover:text-blue-600 hover:underline cursor-pointer">
          People you know
        </span>
      </div>
      <input
        type="text"
        placeholder="Search friends..."
        className="bg-gray-50 w-96 rounded h-14 pl-4 outline-none"
      />
    </div>
  );
};
