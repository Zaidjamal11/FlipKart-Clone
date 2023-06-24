import React from "react";
import  { useState, useContext } from 'react';
import { Box, Dialog,TextField, Button,  Typography, styled,} from "@mui/material";

import { authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";


const Component = styled(Box)`
  height: 77vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 90%;
  width: 28%;
  padding: 45px 35px;
  & > p , & > h5 {
    color: #ffffff;
    font-weight: 600px;
  }
`;




const Wrapper = styled(Box)`
 display: flex;
 flex-direction: column;
 padding: 25px 45px;
 flex: 1;
 & > div , & > button, & > p {
    margin-top: 20px;
 }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
  color: #fff;
  height: 48px;
  borer-radius: 2px;

`;



const RequestOTP = styled(Button)`
  text-transform: none;
  background: #FFF;
  color: #2874F0;
  height: 48px;
  borer-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)

`;

const Text = styled(Typography)`
 font-size: 12px;
 color: #878787;
`;

const CreateAccount = styled(Typography)`
font-size: 12px;
text-align: center;
color: 2874f0;
font-weight: 600;
cursor: pointer;
`

const accountInitialvalue = {
  login: {
    view : 'login',
    heading: 'Login',
    subHeading: 'Get acces to your Orders, wishlist and Recommendations'

  },
  signup : {
    view: 'signup',
    heading: "Looks like you're new here!",
    subHeading: 'Sign up with your email to get started'
  }
}


const signupIntitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password:'',
  phone:''
}







const LoginDialog = ({ open, setOpen }) => {

  const [ account, toggleAccount ] = useState(accountInitialvalue.login);
  const [signup, setSignup] = useState(signupIntitialValues);


  const { setAccount } = useContext(DataContext);



  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialvalue.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialvalue.signup);

  }

  const onInputChange = (e) => {

    setSignup({...signup, [e.target.name]: e.target.value})
   
}

const signupUser = async () => {
  let response = await authenticateSignup(signup);
  if(!response) return;
  handleClose();
  setAccount(signup.firstname)
  

}

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {
            account.view === 'login' ?
            <Wrapper>
            <TextField variant="standard" label="Ener Email / Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By continuing, you agree to Flipkart's Terms of use and Privacy
              Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{textAlign: 'center'}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
          :
          <Wrapper>
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter First Name" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Last Name" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter UserName" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password'  label="Enter Password" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone'  label="Enter Phone" />
          
          <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          
        </Wrapper>

          }
          
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
