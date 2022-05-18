import React,{useState,useEffect} from 'react';
import axios from '../../axioss';
import requests from '../../requests';
import './Banner.css'

const base_url = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        // if [], run once the Row loads, and don't run again
        async function getMovies(){
            const response = await axios.get(requests.netflixOrginals);
            setData(response.data.results[
              Math.floor(Math.random()*response.data.results.length-1)
            ]);
            //console.log(response.data.results[Math.floor(Math.random()*requests.data.results.length-1)]);
            return response;
        }

        getMovies();

    },[]);

    console.log(data);

  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          ${base_url}${data?.backdrop_path}
        )`,
        backgroundPosition: "center center"
      }}
    >
        <div className='banner_contents'>
          <h1 className='banner_title'>
            {data?.title || data?.name || data.original_name}
          </h1>
          <div className='banner_buttons'>
              <button className='banner_button'>Play</button>   
              <button className='banner_button'>My List</button>  
          </div>
          <h1 className='banner_description'>
            {data?.overview}
          </h1>
        </div>
    </header>
  )
}

export default Banner