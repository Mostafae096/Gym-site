import {useState} from 'react'
import { Box } from '@mui/system'
import HeroBanneer from '../elements/HeroBanneer'
import SearchExercises from '../elements/SearchExercises'
import Exercise from '../elements/Exercise'

function Home() {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
        <HeroBanneer />
        <SearchExercises 
        setExercises={setExercises} 
        setBodyPart={setBodyPart} 
        bodyPart={bodyPart}/>
        <Exercise 
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}/>
    </Box>
    )
}

export default Home