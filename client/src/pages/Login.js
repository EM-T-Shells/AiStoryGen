import React from 'react';
import { Container } from '@mui/material'
import Background from '../assets/darkest-background.png';
import LoginForm from '../components/LoginForm';
import SimpleAppBar from '../components/SimpleAppBar';

export default function Login() {
    return (
        <Container maxWidth={true} disableGutters>
            <div
        style={{
            backgroundImage:`url(${Background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99vw',
            minHeight: '100vh',
        }}
        >
            <SimpleAppBar />
            <LoginForm />
            </div>
        </Container>
    )
}