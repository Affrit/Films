import { MovieCard } from '../components/MovieCard/MovieCard';
import { BASE_URL_IMG } from '../constants/constants';
import { Link } from "react-router-dom";

export const moviesSpawner = (results) => {
  if (!results) return
  if (results.length === 0) return <span>Films not Found</span>

  return results.map(film => { 
    const filmData = {
      Id: film.id,
      title: film.title ?? film.name,
      releaseDate: film.release_date ?? film.first_air_date,
      imgSrc: BASE_URL_IMG + film.poster_path,
      rating: film.vote_average
    }
    return (
      <Link key={film.id} to={`/films/${film.id}`}>
        <div className='films__item'>
          <MovieCard isFetching={false} filmData={filmData} style={{ width: '200px' }} />
        </div>
      </Link>
    )
  })
}