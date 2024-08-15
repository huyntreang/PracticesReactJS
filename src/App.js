import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./views/example/MyComponent.js";
import ListToDo from "./views/ToDos/ListToDo.js";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./views/Nav/Nav.js";
import Home from "./views/example/Home.js";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import ListUser from "./views/User/ListUser.js";

/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <MyComponent></MyComponent> */}

          <Routes>
            <Route path="/" element={<Home />} exact />

            <Route path="/todo" element={<ListToDo />} />

            <Route path="/about" element={<MyComponent />} />

            <Route path="/user" element={<ListUser />} />
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
