
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './components/home/Home';
import Trailer from './components/trailer/Trailer';
import Review from './components/reviews/Review';
import Login from './components/user/login/Login';
import SignUp from './components/user/signup/Signup';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie ] = useState();
  const [reviews, setReviews ] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get("/api/v1/movie/all");
      setMovies(response.data);
    } catch (error) {
      console.log(error)
    };
  };

  const getMovieData = async (movieId, status) => {
    try {
      const response = await api.get(`/api/v1/movie/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      
      if(status === "latest"){

        const listReview = reviews.sort((a,b) => b.id?.timestamp - a.id?.timestamp);
        setReviews(listReview);

      }else if(status === "oldest"){

        const listReview = reviews.sort((a,b) =>  a.id?.timestamp - b.id?.timestamp);
        setReviews(listReview);

      }else{

        const listReview = singleMovie.reviewIds.sort((a,b) => - a.favourite + b.favourite);
        setReviews(listReview);
      }
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Home movies = {movies}/>}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
          <Route path='/Review/:movieId' element={<Review getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
