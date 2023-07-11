import { Grid, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

//components
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";

const Cart = () => {

  const { cartItems } = useSelector(state => state.cart);


  return (
    <>
    {
      cartItems.length ? 
          <Grid container>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Box>
                <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>

                </Box>
                {
                  cartItems.map(item => (
                    <CartItem />
                  ))
                }

              </Grid>

              <Grid item lg={3} md={3} sm={12} xs={12} >
                <TotalBalance />
              </Grid>

          </Grid>
          
      : <div>Empty</div>   
    }
    
    
    </>
  )
}

export default Cart;