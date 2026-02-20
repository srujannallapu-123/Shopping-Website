import Navbar from "./Navbar"
import './App.css'
import { Provider } from "react-redux"
import { store } from "./Store/Store"
import Home from "./Home"



function App(){
  return(
    <Provider store={store}>
     <div>
      <Navbar/>
      <Home/>
     </div>
    </Provider>
  )
}
export default App