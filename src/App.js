import './App.css';
import Row from './modules/components/Row';
import requests from './requests';
import Banner from './modules/components/Banner';

function App() {
  return (
    <div className="App">

      <Banner />
      <Row 
        title = "Originals"  
        url = {requests.netflixOrginals}
        isLargeRow ={true}
      />
      <Row title = "Trending Now" url={requests.trendingMovies}/>
      <Row title = "Top Rated" url={requests.topRated}/>
      <Row title = "Horror" url={requests.horrorMovies}/>
      
    </div>
  );
}

export default App;
