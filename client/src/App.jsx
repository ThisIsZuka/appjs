// import React, { Component } from "react";

// import logo from "./logo.svg";

// import "./App.css";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import { FaBars } from "react-icons/fa";

// import Home from "./views/Home";
// import Contact from "./views/Contact";

// import Left_sidebar from "./components/Left_sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import "./styles/App.scss";

// class App extends Component {
//   state = {
//     response: "",
//   };

//   componentDidMount() {
//     this.callApi()
//       .then((res) => this.setState({ response: res.express }))
//       .catch((err) => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch("/web/file_txt");
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   render() {
//     return (
//       // <main class="flex flex-col h-screen">
//       //   <div class="flex flex-1 overflow-hidden">
//       //     {/* <div class="flex bg-gray-100 w-32 p-4"> */}
//       //       <Left_sidebar/>
//       //     {/* </div> */}
//       //     <div class="flex flex-1 flex-col">
//       //       <div class="flex bg-gray-300 h-16 p-4">Header</div>
//       //       <div class="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4">
//       //         <BrowserRouter>
//       //           <Routes>
//       //             <Route path="/" element={<Home />} exact />
//       //             <Route path="Home" element={<Home />} />
//       //             <Route path="Contact" element={<Contact />} />
//       //           </Routes>
//       //         </BrowserRouter>
//       //       </div>
//       //     </div>
//       //   </div>
//       //   <div class="flex">Footer</div>
//       // </main>
//       <main>
//         <div className="btn-toggle" onClick={() => alert("456")}>
//           <FaBars />
//         </div>
//         <div style={{ height: "100vh" }}>
//           <Left_sidebar />
//         </div>
//       </main>
//     );
//   }
// }

// export default App;

import React, { useState } from "react";
import Layout from "./views/Layout";
import "./styles/App.scss";

function App() {
  return (
      <Layout />
  );
}

export default App;
