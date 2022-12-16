import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import Logo from '../assets/images/Logo-1.png';

function Footer() {
  return (
    <Box mt={'80px'} bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems={'center'} px='40px' pt="24px">
        <img src={Logo} alt="" width='200px' height={'40px'} />
        <Typography variant='h5' pb={'40px'} mt='20px'>An exercise website using rapidAPI</Typography>
      </Stack>
    </Box>
  )
}

export default Footer