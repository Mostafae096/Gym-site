import React from 'react'
import { Typography, Stack, Box  } from '@mui/material'


function Videos({youtubeVids, exerciseName}) {
    if(!youtubeVids.length) return 'Loading..';
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{exerciseName}</span> exercise videos
        </Typography>
        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
            {
                youtubeVids?.slice(0, 3).map((vid , index) => (
                    <a key={index} href={`https://www.youtube.com/watch?v=${vid.video.videoId}`} className='exercise-video' target="_blank" rel="noreferrer">
                        <img src={vid.video.thumbnails[0].url} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">{vid.video.title}</Typography>
                            <Typography fontSize="14px" color="#000">{vid.video.channelName}</Typography>
                            </Box>
                    </a>
                ))
            }
        </Stack>
    </Box>
  )
}

export default Videos