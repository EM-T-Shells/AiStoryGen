import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box } from '@mui/system';
import * as React from 'react';




export default function LoginForm() {

    return (
        <Container component='main' maxWidth='xs'>
            <Paper
            elevation={24}
                style={{
                    rounded: true,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#11153A',
                    padding: 30,

                }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
                <Typography component='h1' variant='h5'>
                    Login to Your Account
                </Typography>
                {/* Box originally had the function below, waiting till we get that function set up */}
                {/* onSubmit={handleSubmit} */}
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        variant='filled'
                        color='secondary'
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant='filled'
                        color='secondary'
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign in
                    </Button>
                    {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid> */}
                </Box>
            </Paper>
        </Container>


    )
  }