import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="App">
            <h1>Create Account</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="First Name" variant="standard" />
                <TextField id="standard-basic" label="Last Name" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="E-mail Address" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Re-EnterPassword" variant="standard" />
            </Box>
            <Button variant="contained"><Link className='link' to="/Main" >Sign up</Link></Button>
            <p>Go To Login Page</p><Link className='link1' to="/">Login</Link>
        </div>
    );
};

export default Signup;