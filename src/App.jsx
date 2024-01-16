import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { ImageOne } from "./components/ImageOne"
import { ImageThree } from "./components/ImageThree"
import { ImageTwo } from "./components/ImageTwo"
import { Navbar } from "./components/Navbar"
import Menu from "./components/Menu"
import { Contact } from "./components/Contact"
// import { Home } from "@mui/icons-material"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageOne />
              <Home />
            </>
          }
        />
        <Route
          path="menu"
          element={
            <>
              <ImageThree />
              <Menu />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <ImageTwo />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
