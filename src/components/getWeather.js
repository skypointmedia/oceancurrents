import React from 'react'
import axios from 'axios'

export default function getWeather(latitude, longitude) {

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = 'https://api.weather.gov/points/'+{latitude}+','+{longitude};
        axios.get(apiUrl).then((repos) => {
          const allRepos = repos.data;
          setAppState({ loading: false, repos: allRepos });
        });
      }, [setAppState]);

    return (
    <div className='repo-container'>
        <ListLoading isLoading={AppState.loading} repos={AppState.repos} />
      </div> 
    )
}
