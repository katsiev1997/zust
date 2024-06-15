export const Comment = () => {
  return (
    <div className="w-full mt-3">
      <div className="flex gap-4 items-center">
        <div className="rounded-full w-full bg-blue-400 max-w-16 h-16 text-2xl flex justify-center items-center">
          J
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Julie R. Morleyv</span>
          <span>10 Mins Ago</span>
          <p className="text-gray-500">
            Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget
            malesuada. Praesent sapien massa convallis a pellentesque nec egestas non
            nisi. Curabitur non nulla sit amet nisl tempus convallis quis.
          </p>
          <div className="mt-3 flex gap-4">
            <span className="text-blue-600">Like(2)</span>
            <span className="text-gray-500">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};
