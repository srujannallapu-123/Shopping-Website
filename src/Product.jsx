import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { Grid } from "@mui/material"


const Product = ()=>{

 const productData = useSelector(state => state.products.products)

 console.log(productData)

    return(
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         {productData.length>0 && productData.map((item)=> <ProductCard product={item}/>)}
        </Grid>
      </div>
    )
}
export default Product