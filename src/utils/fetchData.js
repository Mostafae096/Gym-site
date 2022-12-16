export const exerciseoptions = {
    method: 'GET',
     headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_Rapid_API_ExerciseDB_key,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const vidOptions = {
    method: 'GET',
    params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_Rapid_API_YoutubeVids_key,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dbb8adbaa5msh4f718141ddc098ap1d99cbjsna3204cb282ea',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/