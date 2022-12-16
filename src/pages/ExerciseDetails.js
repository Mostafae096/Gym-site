import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box  } from '@mui/material';
import { fetchData, exerciseoptions, vidOptions } from '../utils/fetchData.js';
import Detail from '../elements/Detail';
import Videos from '../elements/Videos';
import SimilarExercises from '../elements/SimilarExercises';



function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [youtubeVids, setYoutubeVIds] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUrl ='https://exercisedb.p.rapidapi.com';
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetialData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseoptions);
      setExerciseDetail(exerciseDetialData);
      const videos = await fetchData(`${youtubeUrl}/search?query=${exerciseDetialData.name}exercise`,vidOptions)
      setYoutubeVIds(videos.contents)

      const simTarget = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetialData.target}`, exerciseoptions);
      setTargetMuscle(simTarget);

      const simEquipment = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetialData.equipment}`, exerciseoptions);
      setEquipment(simEquipment);      

    }
    fetchExerciseData();

  },[id])
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <Videos youtubeVids={youtubeVids} exerciseName = {exerciseDetail.name}/>
      
      <SimilarExercises targetMuscle={targetMuscle} equipment={equipment} />
    </Box>
  )
}

export default ExerciseDetails