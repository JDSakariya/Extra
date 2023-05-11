import React from "react";
import { Route, Routes, Switch } from "react-router-dom";

const User = () => {
  return (
    <div>
      <h1>User Page</h1>
      {/* <Switch> */}
      <Routes>
        <Route path="/user/profile">
          <h2>User Profile</h2>
        </Route>
        <Route path="/user/settings">
          <h2>User Settings</h2>
        </Route>
      </Routes>
      {/* </Switch> */}
    </div>
  );
};

export default User;
