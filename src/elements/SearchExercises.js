import {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { fetchData, exerciseoptions } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';



function SearchExercises({setExercises, bodyPart, setBodyPart}) {
    const [Search, setSearch] = useState('');
    const [bodyparts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchedExercisData = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseoptions)
            setBodyParts(['all', ...bodyPartData])
        
        }
        fetchedExercisData();
    },[])
    const handleSearch = async () => {
        if(Search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions);
            const searchedExercies = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(Search)
                || exercise.target.toLowerCase().includes(Search)
                || exercise.equipment.toLowerCase().includes(Search)
                || exercise.bodyPart.toLowerCase().includes(Search)
            );
            setSearch('');
            setExercises(searchedExercies);
        }
    };
  return (
    <Stack alignItems={'center'} mt='37px' justifyContent={'center'} p='20px'>
        <Typography
        fontWeight={'700'}
        textAlign='center'
        mb={'50px '}
        sx={{
            fontSize:{lg:'44px', xs:'30px'}
        }}>
        Awesome Exercises You <br/>
        Should Know
        </Typography>
        <Box position={'relative'} mb='72px'>
            <TextField 
            sx={{  
                input: {
                    fontWeight:'700',
                    border:'none',
                    borderRadius:'4px'
                },
                width:{lg:'800px',sx:'350px'},
                backgroundColor:'#fff',
                borderRadius: '40px'
            }}
            height='7 6px'
            value={Search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises' 
            type={'text'}/>
            <Button
            sx={{
                backgroundColor:"#FF2625",
                color:'#fff',
                width:{lg:'175px', xs:'80px'}, 
                textTransform:'none',
                fontSize:{lg:'20px',xs:'14px'},
                height:'56px',
                position:'absolute',
                right:'0'
            }}
            onClick={handleSearch}
            >Search</Button>
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
            <HorizontalScrollBar data={bodyparts}  setBodyPart={setBodyPart} bodyPart={bodyPart} isBodypart/>
        </Box>
    </Stack>
  )
}

export default SearchExercises