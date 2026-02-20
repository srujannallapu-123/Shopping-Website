import { ShoppingCart } from "@mui/icons-material"
import { Badge, Button } from "@mui/material"
import { useSelector } from "react-redux"
import CartList from "./CartList"


const Navbar = () => {

   
                                  
    return (
        <div style={{ height: "10vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "lightgreen", position:"fixed",top:0,left:0,zIndex:1000 }}>
            <h3>SHOP-HUB</h3>
            <CartList/>
        </div>
    )
}
export default Navbar