import React, {useState, useEffect} from 'react';
import axios from '../../axioss';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



//base url to obtain the image corresponding to the series or movie
const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({title, url, isLargeRow}) {
    /*Initially there are not movies in the state */
    const [data, setData] = useState([]);
    const [trailer, setTrailer] = useState("");

    useEffect(()=>{
        // if [], run once the Row loads, and don't run again
        async function getMovies(){
            const response = await axios.get(url);
            setData(response.data.results);
            //console.log(response.data.results);
            return response;
        }

        getMovies();

    },[url]); // if url changes, and it does because the url is not the same for every genre

    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    console.log(data);

    const handleOnclick = (movie) =>{
        if (trailer) {
            setTrailer('');
        }else{
            movieTrailer(movie?.name || "")
            .then(url=>{
                const urlParams= new URLSearchParams(new URL(url).search);
                setTrailer( urlParams.get('v'));
                console.log(urlParams);
            }).catch(error =>console.log(error));
        }
    };

    console.log(trailer);
    return (
        <div className = "row">
            <h2>{title}</h2>
            <div className="row_posters">
                {data.map(movie=>(
                    <img
                        key = {movie.id}
                        onClick ={()=>handleOnclick(movie)}
                        className = {`movie_picture ${isLargeRow && "movie_picturelarge"} `}
                        src = {`${base_url}${
                            isLargeRow?movie.poster_path:movie.backdrop_path}`}
                        alt = {movie.name}
                    />
                ))}
            </div>

            { trailer && <YouTube videoId={trailer} opts={opts} /> }          
        </div>
    )
}

export default Row
