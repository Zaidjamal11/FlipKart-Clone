import React from "react";
import { Box, styled } from '@mui/material';
import { useEffect } from "react";


//components
import NavBar from "./NavBar";
import Banner from "./Banner";

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch } from "react-redux";

const Component = styled(Box)`
 padding: 10px 10px;
 background: #f2f2f2;
`

const Home = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <Component>
         <Banner />

      </Component>
      
    </div>
  );
};

export default Home;
