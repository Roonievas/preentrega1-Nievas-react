
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import ItemListContainer from "./components/Itemlistcontainer.jsx"

function App() {

  return (

    <>
      
      <Header/>
      <ItemListContainer greeting="Bienvenidos a Vickro"/>
      <Main />    
      <Footer />

    </>


  )
}

export default App
