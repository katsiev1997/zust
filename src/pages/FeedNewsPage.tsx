import { CreateNewPost } from "../components/CreateNewPost/CreateNewPost";
import PostCard from "../components/PostCard/PostCard";
import { Stories } from "../components/Stories/Stories";
import { UserCard } from "../components/UserCard/UserCard";
import { Weather } from "../components/Weather/Weather";

const FeedNewsPage = () => {
  return (
    <main className="flex">
      <UserCard />
      <main className="max-w-[900px] w-full flex flex-col gap-5">
        <CreateNewPost />
        <Stories />
        <PostCard />
        <PostCard />
      </main>
      <Weather />
    </main>
  );
};

export default FeedNewsPage;
