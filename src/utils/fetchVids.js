const vidOptions = {
    method: 'GET',
    params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_Rapid_API_YoutubeVids_key,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchVids = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}