import { configureStore,createSlice } from "@reduxjs/toolkit";

let movies = createSlice({
  name: "movies",
  initialState : [],
  reducers:{
    setMovies(state, movieData){
      return movieData.payload;
    }
  }
})

export let {setMovies} = movies.actions;

export default configureStore({
  reducer: {
    movies: movies.reducer
  },
});
