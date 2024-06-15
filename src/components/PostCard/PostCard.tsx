import { Comment } from "../Comment/Comment";

const PostCard = () => {
  return (
    <div className=" bg-white py-2 px-5 rounded-xl w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 text-2xl flex justify-center items-center">
            J
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Julie R. Morleyv</span>
            <span>10 Mins Ago</span>
          </div>
        </div>
        <img
          className="w-6 cursor-pointer"
          src="/ellipsis_menu.svg"
          alt="ellipsis_menu"
        />
      </div>
      <p className="text-gray-500">
        Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada
        feugiat. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget
        malesuada. Praesent sapien massa convallis a pellentesque nec egestas non
        nisi. Curabitur non nulla sit amet nisl tempus convallis quis.
      </p>
      <img
        className="rounded-md w-full"
        src="https://templates.envytheme.com/zust/default/assets/images/news-feed-post/post-1.jpg"
        alt="image"
      />
      <div className="flex justify-between h-10">
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-6" src="/like.svg" alt="like" />
          <span>Like</span>
          <span>1499</span>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-5" src="/comment.svg" alt="comment" />
          <span>Comment</span>
          <span>599</span>
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-5" src="/share.svg" alt="share" />
          <span>Share</span>
          <span>24</span>
        </div>
      </div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default PostCard;
