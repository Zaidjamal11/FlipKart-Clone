import React from "react";
import { Box, styled } from '@mui/material';
import { useEffect } from "react";


//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';

import { getProducts as listProducts  } from '../../redux/actions/productActions';
import { useDispatch , useSelector  } from "react-redux";

const Component = styled(Box)`
 padding: 10px 10px;
 background: #f2f2f2;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts);
  
  
   

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <Component>
         <Banner />
         <Slide products={products} />

      </Component>
      
    </div>
  );
};

export default Home;
