import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className="App">
      <h1>LogIn</h1>
      <p>Enter Your details below to continue</p>
      <Box 
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' }, 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="E-mail Address" variant="standard" />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Password" variant="standard" />
      </Box>
      <Button variant="contained" sx={{marginTop:"50px", width:"20%"}}><Link className='link' to="/Main">Login</Link></Button>

      <p className='account'>Don't have account?</p><Link className='link1' to="/signup">Signup</Link>
    </div>
  );
}

export default LogIn;
