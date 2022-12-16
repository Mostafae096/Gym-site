import { Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../assets/icons/gym.png';
function BodyPart({part, setBodyPart, bodyPart}) {
  return (
    <Stack 
    type='button'
    alignItems={'center'}
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === part ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width:'270px',
        height:'280px',
        cursor: 'pointer',
        gap:'47px'
    }}
    onClick={()=> {setBodyPart(part)
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });}}
    //missing window scroll get it from video or github
    >
        <img src={Icon} alt=""  style={{width:'40px', height:'40px'}}/>
        <Typography fontWeight={'bold'} fontSize='24px' color={'#3A1212'} textTransform='capitalize'>{part}</Typography>
    </Stack>
  )
}

export default BodyPart