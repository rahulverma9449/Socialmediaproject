import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostListProvider from "../src/Store/post-list-store";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import CreatePost from "./Components/Form/CreatePost";
import PostList from "./Components/Form/PostList";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
