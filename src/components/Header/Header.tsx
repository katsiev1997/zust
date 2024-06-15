import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-blue-600 flex justify-between w-full p-3 h-18 items-center fixed">
      <Link to="/">
        <h1 className="text-5xl italic font-extrabold text-white">Zust</h1>
      </Link>
      <input
        className="text-white rounded-full bg-blue-800 placeholder:text-white outline-none py-3 px-5 w-96"
        placeholder="Search..."
        type="text"
      />
      <div className="flex gap-5">
        <img
          className="w-6 h-6 cursor-pointer hover:-translate-y-1 transition-all"
          src="/home.svg"
          alt="home"
        />
        <Link to="/profile">
          <img
            className="w-6 h-6 cursor-pointer hover:-translate-y-1 transition-all"
            src="/person.svg"
            alt="person"
          />
        </Link>
        <img
          className="w-6 h-6 cursor-pointer hover:-translate-y-1 transition-all"
          src="/notification.svg"
          alt="notification"
        />
        <img
          className="w-6 h-6 cursor-pointer hover:-translate-y-1 transition-all"
          src="/letter.svg"
          alt="letter"
        />
        <div className="flex gap-3 items-center cursor-pointer">
          <img className="w-6 h-6" src="/world.svg" alt="world" />
          <span className="text-white font-semibold">Eng</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex gap-3 items-center border-l pl-4  cursor-pointer relative"
        >
          <div className="border border-white rounded-full w-8 h-8 flex justify-center items-center">
            <img className="w-6 h-6 cursor-pointer" src="/person.svg" alt="person" />
          </div>
          <span className="text-white font-semibold">Matthew</span>
          {open && (
            <div className="absolute bg-white top-14 -left-12 px-4 py-2 rounded-lg">
              <div>
                <h4 className="text-xl font-semibold hover:text-blue-500 transition-all">
                  Matthew Turner
                </h4>
                <p className="text-gray-500 cursor-pointer">matthew@gmail.com</p>
              </div>
              <hr />
              <ul>
                <li className="font-semibold text-gray-700 hover:text-blue-600 text-lg">
                  <Link to="/profile"> My Profile</Link>
                </li>
                <li className="font-semibold text-gray-700 hover:text-blue-600 text-lg">
                  Setting
                </li>
                <li className="font-semibold text-gray-700 hover:text-blue-600 text-lg">
                  Privacy
                </li>
                <li className="font-semibold text-gray-700 hover:text-blue-600 text-lg">
                  Help & Support
                </li>
                <li className="font-semibold text-gray-700 hover:text-blue-600 text-lg">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
