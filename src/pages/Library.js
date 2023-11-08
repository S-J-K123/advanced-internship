import React from "react";
import SideBar from "../components/SideBar";
import Input from "../components/Input";

const Library = () => {
  return (
    <div>
      <SideBar />
      <Input />
      <div className="library-container">
        <div className="for-you__title">Saved Books</div>
      </div>
    </div>
  );
};

export default Library;
