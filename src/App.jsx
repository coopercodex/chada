import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ImageOne } from "./components/ImageOne"
import { ImageThree } from "./components/ImageThree"
import { ImageTwo } from "./components/ImageTwo"
import { Navbar } from "./components/Navbar"
import Menu from "./components/Menu"

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
              <Contact />
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
        {/* <ImageTwo /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
