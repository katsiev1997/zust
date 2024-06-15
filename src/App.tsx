import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import FeedNewsPage from "./pages/FeedNewsPage";
import FriendsPage from "./pages/FriendsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Header />
      <div className="flex w-full h-screen">
        <Sidebar />
        <div className="mt-20 pl-40 flex justify-center w-full">
          <Routes>
            <Route path="/" element={<FeedNewsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/friends" element={<FriendsPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
