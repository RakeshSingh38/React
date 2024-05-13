// import Add from './Components/Add'
// import Greetings from './Components/Greetings'
// import Expressions from './Components/Expressions'
import List from './Components/List'
import Styling from './Components/Styling'
function App() {
  // for auto rename extension its javascriptreact put it in settings.json file at the end u will find it
  // to find the language name in the footer of vs code editor click on it and select the language mode and find the language name
  return (
    <>
      <h1>Hello Rakesh 💛</h1>
      {/* self closing tag    <br />  */}
      {/* <h1 className="day">hows your day ?</h1> */}
      {/* <Add/>
      <Greetings/> */}
      {/* imp     for now i will comment this */}
      {/* <Expressions/> */}
      <Styling />
      <List />
    </ >
  )
}

export default App;

// imp     above and below code is same
// it above code is converted by babel to backword compatible code

/* import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return _jsxs("section", {
    children: [_jsx("h1", {
      children: "Hello Rakesh"
    }), _jsxs("article", {
      children: [_jsx("h1", {
        children: "how are u doing ?"
      }), _jsx("p", {
        className: "day",
        children: "hows your day ?"
      })]
    })]
  });
}
export default App; */