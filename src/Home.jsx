import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProduct } from "./Slice/ProductSlice"
import Product from "./Product"

const Home = () => {

    const dispatch = useDispatch() /* we use usedispatch here to send the data to products in productslice */

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => dispatch(getProduct(data)));
    }, [])                         /* action.payload */




    return (
        <div style={{padding:"20px"}}>
          <Product/>
        </div>
    )
}
export default Home