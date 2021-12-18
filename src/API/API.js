import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjEzYTBiOGQ0YzgwYzFiNjM5YzZmZTRiOWNiMzRhYyIsInN1YiI6IjYxOGQ3MDhiYTMxM2I4MDA0MmRmNTUwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSYeGWTWML_cqrUz-BQb64n5ac-1a3FBiXiwGiuaIMM"
  }
})
