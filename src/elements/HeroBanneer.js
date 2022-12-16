import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import heroimg from '../assets/images/banner.png';
import { display } from '@mui/system';
function HeroBanneer() {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm: '50px'}
    }} position= 'relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography> 
        <Typography 
        fontWeight='700'
        mb={'23px'}
        mt={'30px'}
        sx={{fontSize:{lg:'44px',xs:'40px'}}}>
        Sweat, Smile <br />And Repeat
        </Typography>
        <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={4}>
        Check out the most effective exercises personalized to you
        </Typography>
        <Button 
        variant='contained'
        color='error' href='#exercises'
        sx={{ backgroundColor:'#FF2625',
        padding:'10px'}}>
            Explore Exercises
        </Button>
        <Typography color={'#FF2625'}
        fontSize='200px'
        fontWeight={'600'}
        sx={{
            opacity:'.1',
            display: {lg:'block', xs:'none'}
        }}>Exercises</Typography>
        <img src={heroimg} className='hero-banner-img' alt="" />
    </Box>
  )
}

export default HeroBanneer