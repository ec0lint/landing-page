import MainPage from './MainPage';
import Footer from './Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Routes>
          <Route path="/about" component={<h2>Home2</h2>}>
          </Route>
          <Route path="/users" component={<h2>Home</h2>}>
          </Route>
          <Route path="/" component={<h2>Home3</h2>}>
          </Route>
        </Routes> */}
      </div>
  );
}



// function App() {
//   return (
//     <span className="mainContainer">
//       {/* <NavBar/> */}
//       <MainPage/>
//       <Footer/>
//     </span>
//   );
// }
