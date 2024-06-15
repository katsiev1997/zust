import { FriendsHeader } from "../components/FriendsHeader/FriendsHeader";
import { FriendsSearch } from "../components/FriendsSearch/FriendsSearch";
import { PersonCard } from "../components/PersonCard/PersonCard";

const FriendsPage = () => {
  return (
    <main className="container flex flex-col gap-3 items-center">
      <FriendsHeader />
      <FriendsSearch />
      <div className="grid grid-cols-4">
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </main>
  );
};

export default FriendsPage;
