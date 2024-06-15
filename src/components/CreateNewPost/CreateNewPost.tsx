
export const CreateNewPost = () => {
  return (
    <div className="bg-white p-4 flex flex-col gap-3 rounded-md h-min">
      <h1 className="font-semibold text-lg">Create New Post</h1>
      <textarea
        placeholder="Write something here..."
        className="w-full h-32 bg-slate-100 outline-none rounded-lg p-2"
      ></textarea>
      <div className="flex items-center justify-between">
        <span className="hover:text-blue-600 cursor-pointer font-semibold">Photo</span>
        <span className="hover:text-blue-600 cursor-pointer font-semibold">Video</span>
        <span className="hover:text-blue-600 cursor-pointer font-semibold">Tag Friends</span>
        <button className="bg-blue-700 hover:bg-red-700 transition-all text-white font-semibold py-2 px-4 rounded">
          Post
        </button>
      </div>
    </div>
  );
};
