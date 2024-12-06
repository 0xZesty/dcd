import { useState, useEffect } from 'react';
import {
    Box,
    Stack,
    Button,
    Typography,
    Toolbar,
    AppBar,
} from '@mui/material';

import { Outlet, Link } from 'react-router-dom';

import logoJpg from '/src/assets/logo.jpeg';

export default function MasterPage() {

    return(

        <>
            <Box sx={{ display: 'flex', position: 'relative', minHeight: '100%'}}>
                <AppBar position="fixed" sx={{ py: 1, bgcolor: 'black', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Toolbar sx={{  width: '50%', }}>
                            <img 
                                src={logoJpg} 
                                alt='sexo goza y dormes'
                                width={'40px'}
                                onClick={() => window.location.href = '/'}
                                style={{cursor: 'pointer'}}
                            />
                            <Box sx={{ flexGrow: 1 }}/>
                            <Typography color='white' sx={{ cursor: 'pointer', fontWeight: 'bold', '&:hover': { color: '#27272A'}  }} onClick={() => window.location.href = '/#services'}>Services</Typography>
                            <Box sx={{ flexGrow: 0.1 }}/>
                            <Typography color='white' sx={{ cursor: 'pointer', fontWeight: 'bold', '&:hover': { color: '#27272A'} }} onClick={() => window.location.href = '/#about'}>About</Typography>
                            <Box sx={{ flexGrow: 0.1 }}/>
                            <Button 
                                sx={{ 
                                    bgcolor: '#9333EA',
                                    borderRadius: 2 ,
                                    color: 'white',
                                    px: 2,
                                    py: 1,
                                    '&:hover': { bgcolor: '#7E22CE', color: '#27272A'},
                                    fontWeight: 'bold',
                                    textTransform: 'initial'
                                }}
                                onClick={() => window.location.href = '/#contact'}
                            >
                                Get Started
                            </Button>
                    </Toolbar>
                </AppBar>

                <Outlet />
            </Box>
        </>

    )

}

