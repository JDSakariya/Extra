// // import React, { lazy, Suspense } from "react";
// // import { Route, Routes } from "react-router-dom";

// // const Admin = lazy(() => import("./Admin"));
// // const User = lazy(() => import("./User"));

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>My App</h1>
// //       <Suspense fallback={<div>Loading...</div>}>
// //         {/* <Switch> */}
// //         <Routes>
// //           <Route path="/admin">
// //             <Admin />
// //           </Route>
// //           <Route path="/user">
// //             <User />
// //           </Route>
// //         </Routes>
// //         {/* </Switch> */}
// //       </Suspense>
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import Accordion from "./Accordion";

// function App() {
//   return (
//     <div className="App">
//       <Accordion title="Section 1" content="Lorem ipsum dolor sit amet." />
//       <Accordion title="Section 2" content="Consectetur adipiscing elit." />
//       <Accordion title="Section 3" content="Sed do eiusmod tempor incididunt." />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Accordion from './Accordion';

const data = [
  {
    id: 1,
    title: 'Accordion 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    title: 'Accordion 2',
    content: 'Suspendisse cursus euismod nisl, in vulputate nulla malesuada sit amet.'
  },
  {
    id: 3,
    title: 'Accordion 3',
    content: 'Quisque vitae tristique justo, a commodo lorem.'
  }
];

function App() {
  return (
    <div>
      <Accordion data={data} />
    </div>
  );
}

export default App;

