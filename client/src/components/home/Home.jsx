import React from "react";
import { Box, styled } from '@mui/material';


//components
import NavBar from "./NavBar";
import Banner from "./Banner";


const Component = styled(Box)`
 padding: 10px 10px;
 background: #f2f2f2;
`

const Home = () => {
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
