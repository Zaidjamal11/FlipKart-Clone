
import React from 'react'
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';



const LeftContainer = styled(Box)(({ theme}) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')] : {
    padding: '20px 40px'
  }

}))
  

const Image = styled('img')({
    padding: '15px',
    width: '90%'
})

const StyledButton = styled(Button)(( { theme }) => ({
  width: '46%',
  height: '50px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')]: {
    width: '44%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '46%'
  }

}))



const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
        <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0' }}>
          <Image src={product.detailUrl} alt="product" />
          </Box>   
        <StyledButton variant="contained" style={{ marginLeft: '15px', marginTop: '5px', background: '#ff9f00'}}><Cart/> Add to Cart</StyledButton>
        <StyledButton variant="contained" style= {{ marginLeft: '10px', marginTop: '5px', background: '#fb541b'}}><Flash />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem;