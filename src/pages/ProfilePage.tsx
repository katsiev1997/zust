import { CreateNewPost } from "../components/CreateNewPost/CreateNewPost";
import PostCard from "../components/PostCard/PostCard";
import { ProfileHeader } from "../components/ProfileHeader/ProfileHeader";
import { Stories } from "../components/Stories/Stories";

const ProfilePage = () => {
  return (
      <main className="max-w-[900px] w-full flex flex-col gap-5">
        <ProfileHeader />
        <CreateNewPost />
        <Stories />
        <PostCard />
        <PostCard />
      </main>
  );
};

export default ProfilePage;
