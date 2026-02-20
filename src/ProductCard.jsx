import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircle from '@mui/icons-material/AddCircle';
import { useDispatch } from 'react-redux';
import { addToCart } from './Slice/CartSlice';

export default function ProductCard({product}) {

   const dispatch = useDispatch()

  const handleAddToCart =()=>{
    dispatch(addToCart(product))
  }
  /* here we use usedispatch to send the items to items in initialstate in cartslice whenever we click on addtocart button it will addthe product in cart*/


  return (
    <Card sx={{ maxWidth: 345, position:"relative",padding:"35px"}}>
      <CardMedia
        sx={{ height: 350 }}
        image={product.image}
        title={product.category} 
      />
      <CardContent sx={{pb:7}}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}}>
         {product.description.slice(0,200)}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex", justifyContent:"space-between", position:"absolute", bottom: 0, left:0, width:"100%"}}>
        <h5 size="small">{product.price} $</h5>
        
        <Button onClick={handleAddToCart} variant='contained' size="small" startIcon={<AddCircle/>}>ADD TO CART</Button>
               {/* we use here onclick to addtheitems into cart */}
      </CardActions>
      
    </Card>
  );
}