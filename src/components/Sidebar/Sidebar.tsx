import { Link } from "react-router-dom";

const items = [
  "Groups",
  "Favorite",
  "Events",
  "Live Chat",
  "Birthday",
  "Video",
  "Weather",
  "Marketplace",
  "Login",
  "Register",
];

export const Sidebar = () => {
  return (
    <div className="fixed flex flex-col gap-10 pl-5 w-full max-w-40 bg-white pt-5 mt-[72px] z-50">
      <Link
        className="font-semibold text-xl hover:text-blue-600 transition-all"
        to="/"
      >
        News Feed
      </Link>
      <a
        className="font-semibold text-xl hover:text-blue-600 transition-all"
        href="#"
      >
        Notifications
      </a>
      <a
        className="font-semibold text-xl hover:text-blue-600 transition-all"
        href="#"
      >
        Messages
      </a>
      <Link
        className="font-semibold text-xl hover:text-blue-600 transition-all"
        to="/friends"
      >
        Friends
      </Link>
      {items.map((item) => (
        <a
          key={item}
          className="font-semibold text-xl hover:text-blue-600 transition-all"
          href="#"
        >
          {item}
        </a>
      ))}
    </div>
  );
};
