import  { BrowserRouter } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import ItemListContainer from "./components/Itemlistcontainer.jsx"

function App() {

  return (

    
      <BrowserRouter>
      <Header/>
      <ItemListContainer greeting="Bienvenidos a Vickro"/>
      <Main />    
      <Footer />
      </BrowserRouter>


    

  )
}

export default App
