import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart } from '@mui/icons-material';
import { Badge, Menu, MenuItem } from '@mui/material';
import { deleteItemFromCart, getCartValue, removeAllItemsFromCart } from './Slice/CartSlice';
import DeleteIcon from '@mui/icons-material/Delete';


export default function CartList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickOpen = (event) => {
    cartItems.length > 0 && setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const dispatch = useDispatch()

   const cartItems = useSelector(state => state.cart.cart)
                                  /* state => state.name in cartslice.initialstate in cartslice */
   console.log("cartItems",cartItems) 

   React.useEffect(()=>{
       dispatch(getCartValue())
    },[cartItems])  //here whenever items added or updated in the cart it updated the getCartValue action in the cart                            
   


   const totalCartValue = useSelector(state =>state.cart.totalCartValue)

   const handleDeleteItem =(e,id)=>{
        e.stopPropagation()
        dispatch(deleteItemFromCart(id))
   }

   const handleClearCart=()=>{
    dispatch(removeAllItemsFromCart())
   }
  

  return (
    <div>
    <Button onClick={handleClickOpen} sx={{ position: "absolute", right: 20, top:10, padding:1 }} variant='contained' size="small" startIcon={<Badge badgeContent={cartItems?.length === 0 ? "0" : cartItems?.length} >
                <ShoppingCart />                                                                                                         {/* cartItems?.length === 0 ? "0" : cartItems?.length it defines if cartitems length is 0 show ti as "0" if clicks on addtocart show the cartitems length */}
            </Badge>}>CART</Button>
      {cartItems.length>0 &&<Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        
      >
         { cartItems.map(({ image,quantity,title,id, price }) => (
          <div>
            <MenuItem onClick={handleClose}>
            
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={image} />
                    </ListItemAvatar>
                    <ListItemText primary={<ListItemText primary={title} secondary={`${quantity} *  ${price}$`}/>} secondary={<ListItemText  secondary={`${price * quantity}$`}/>}  />
                   <DeleteIcon onClick={(e)=>{handleDeleteItem(e,id)}}/>
                  </ListItemButton>
               
            </MenuItem>
          </div>
              ))}
              <hr/>
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <h4>Total: {totalCartValue}$</h4>
              <Button onClick={handleClearCart} sx={{backgroundColor:"red"}} variant='contained' size="small">Clear Cart</Button>
              </div>
      </Menu>}
    </div>
  );
}
