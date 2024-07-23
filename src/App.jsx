import { useState } from 'react'
import './App.css'

import MovieDisplay from './components/Movie/MovieDisplay'
import { allmovies } from './components/utilis/movieData'

import {Navigate, Route,Routes} from "react-router-dom";

import Page404 from './components/Movie/Page404'
import MovieDetails from './components/Movie/MovieDetails'
import Navbar_Mui from './components/Movie/Navbar_Mui'
import AddMovie_MUI from './components/Movie/AddMovie_MUI'
import MovieCard_MUI from './components/Movie/MovieCard_MUI'
import cartContext from './components/utilis/cartContext'
import EditMovie from './components/Movie/EditMovie'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [movieList,setMovieList]=useState(allmovies)
  const [cartUseCxt,setCartUseCxt]=useState(0)
  const [mode,setMode]=useState('dark')
  const theme = createTheme({
   palette: {
     mode: mode,
   },
 });
  return (
   <ThemeProvider theme={theme}>
      <CssBaseline />
   <cartContext.Provider value={[cartUseCxt,setCartUseCxt]}>
   {/* App.jsx should be neat and tidy */}
   {/* <Navbar> */}
   <Navbar_Mui mode={mode} setMode={setMode}/>
    {/* <BasicForm_Formik/> */}
   {/* <MovieCard_MUI/> */}
  <Routes>
   <Route path='/' element={<MovieDisplay/>}/>
    <Route path='/addmovie_mui' element={ <AddMovie_MUI movieList={movieList} setMovieList={setMovieList} />}/>
    
    
       {/* Any website migrating a new link ? Old customers + new customers 
    New customers ?
    Old customers ? millions of users + so incase need to handle with react?
    /films to /allmovies
    {<Navigate replace to '/allmovies'/>}
    */}
   
    <Route path="/allmovies" element={ <MovieDisplay movieList={movieList}/>}/>
    <Route path='/films' element={<Navigate replace to ='/allmovies'/>}/>
    
    {/* dynamic routing */}
    <Route path="/movie/:id" element={<MovieDetails movieList={movieList}/>}/>
    <Route path="/edit/:id" element={<EditMovie/>}/>


     {/* Error Page || Page Not Found Error */}
    
     {/* /7878  to /404  || 10-12 min*/} 
     <Route path='/404' element={<Page404/>}/>
     <Route path='*' element={<Navigate replace to= '/404'/>}/>
        
  
  </Routes>
   </cartContext.Provider>
   </ThemeProvider>
  )
}

export default App
// named  import export >>{}
// default import export >>


