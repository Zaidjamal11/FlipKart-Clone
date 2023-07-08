
import React from 'react'
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';



const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;


`;

const Image = styled('img')({
    
    width: '90%',
    padding: '15px'
})

const StyledButton = styled(Button)`
width: 46%;
height: 50px;
border-radius: 2px;

`

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
        <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0' }}>
          <Image src={product.detailUrl} alt="product" />
          </Box>   
        <StyledButton variant="contained" style={{ marginLeft: '15px', background: '#ff9f00'}}><Cart/> Add to Cart</StyledButton>
        <StyledButton variant="contained" style= {{ marginLeft: '15px', background: '#fb541b'}}><Flash />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem;