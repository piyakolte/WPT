// import "./assets/css/style.css"
// //hooks

// //useState()
// //useEffect()
// //useContext()
// //useReducer()
// //useCallback()
// //useRef()
// import { useState, useEffect } from "react";

// function App({ name, age, path }) {


//   const [n, setN] = useState("Rahul")
//   const [ag, setAge] = useState(33)
//   function show() {
//     alert("Hello")
//   }

//   // useEffect(()=>
//   // {

//   // },[dependencies(optional)])

//   // useEffect(() => {
//   //   console.log("useEffect")
//   // })
//   //1)on render 2)no depn array when run on every state variable value changed

//   useEffect(()=>
//   {
//     // console.log("useEffect")
//     setTimeout(()=>
//     {
//       setN("Malinga")
//       setAge(35)
//     },3000)

//     setInterval(() => {
//       document.querySelector("h2").style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`  //0-255
//     }, 3000)
//   },[])
//   //1)only on render 2)not run on any state variable value changed


//   useEffect(() => {
//     console.log("useEffect")


//   }, [n])
//   //1)only on render 2)run on provided state variable value changed


//   return (
//     <>
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//       {/* <h1>Hello Name: {props.name} Age: {props.age}.....</h1> */}
//       <h1 className="bg-color text-color">Hello Name: {name} Age: {age}</h1>

//       <img src={require(`./assets/imgs/${path}`)} height={200} />
//       <h2>{n}</h2>
//       <h2>{ag}</h2>

//       <button onClick={() => setN("Ishant")}>Change Name</button>
//       <button onClick={() => setAge(40)}>Change Age</button>
//       <button onClick={show}>Message</button>
//       <button onClick={() => alert("Hello")}>Message</button>



//     </>
//   );


// }

// export default App;

// //JSX (Javascript Extentions) rules 
// // 1) close all tags important/compulsory otherwise error
// // 2) must return single jsx object means return only one tag    <></> fragments
// // 3) class => className , for => htmlFor
// // 4) ternary operator ?:  and map() function to iterate

//import CompValriable from "compFilepath"
//<CompValriable/>
import "./assets/css/style.css"
import Header from "./pages/Header"
import { Footer } from "./pages/Footer"
import { Home } from "./pages/Home"
function App() {
  return (<>
    <Header />
    <Home />
    <Footer />
  </>)
}

export default App