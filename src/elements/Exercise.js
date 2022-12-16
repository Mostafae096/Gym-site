import React, {useEffect, useState } from 'react'
import  Pagination  from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import { fetchData, exerciseoptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard.js';

function Exercise({setExercises, bodyPart, exercises}) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }
  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if(bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseoptions);    
      }
      setExercises(exerciseData);
    };
    fetchExerciseData();
    
  },[bodyPart]);

  return (
    <Box id='exercises'
    sx={{mt:{lg :'140px'}}}
    mt='50px'
    p={'20px'}>
      <Typography variant='h3' mb={'46px'}>
      Showing Results
      </Typography>
      <Stack direction={'row'} flexWrap='wrap' justifyContent={'center'} sx={{gap:{lg:'110px', xs:'50px'}}}>
        {currentExercise.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} /> ))}
      </Stack>
      <Stack mt={'100px'} alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
          color='standard'
          shape='rounded'
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercise