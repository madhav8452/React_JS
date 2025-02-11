import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import FormData from "./form"
import Navbarcode from "./navbar"
import Footer from "./footer"
import Event_Product from "./event"
import Editevent from "./Edit"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarcode></Navbarcode>
        <Routes>
          <Route path='/' element={<FormData/>}></Route>
          <Route path="/event" element={<Event_Product/>}></Route>
          <Route path="/edit/:id" element={<Editevent/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
