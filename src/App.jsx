import './App.css'
import { ImageOne } from './components/ImageOne'
import { ImageThree } from './components/ImageThree'
import { ImageTwo } from './components/ImageTwo'
import { Navbar } from './components/Navbar'


function App() {

  return (
    <>
    <Navbar />
    <ImageOne /> 
    <h1>Chada Thai</h1>
    {/* <ImageTwo /> */}
    <ImageThree />
    <h1>Chada Thai</h1>
    </>
  )
}

export default App
