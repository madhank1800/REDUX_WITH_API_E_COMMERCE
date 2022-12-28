import { Productlist } from "./CONTENTS/Productlist";
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Productdetails } from "./CONTENTS/Productdetails";
import Header from "./CONTENTS/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*  */}
          {/*  */}
          <Route path="/" exact element={<Productlist />}></Route>
          <Route
            path="/product/:productId"
            exact
            element={<Productdetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
