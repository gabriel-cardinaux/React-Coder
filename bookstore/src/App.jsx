import './App.css'
import ItemListContainer from '/src/components/ItemListContainer/ItemListContainer'
import NavBar from '/src/components/NavBar/NavBar'

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Welcome to the BookShop'/>
    </>
  )
}

export default App
