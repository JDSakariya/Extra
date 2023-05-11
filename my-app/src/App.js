import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Admin = lazy(() => import("./Admin"));
const User = lazy(() => import("./User"));

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Switch> */}
        <Routes>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Routes>
        {/* </Switch> */}
      </Suspense>
    </div>
  );
};

export default App;
