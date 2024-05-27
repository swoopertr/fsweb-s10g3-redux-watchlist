//import { movies } from "./../movies";
import { useSelector } from "react-redux";

export default function Movie(props) {
  const movies = useSelector(store => store.defaultMovies);
  const movieId = props.sira;
  const storeObj = useSelector(store => store);
  console.log('storeObj : ', storeObj);
  const movie = movies.length && movies.find(movie => movie.id === movieId);
  const characters = useSelector(store => store.characters);
  let directorFrmRndmNbr = '';

  if(characters !== undefined){
    const randomNbr = Math.floor(Math.random() * characters.length) 
    directorFrmRndmNbr = characters[randomNbr];
  }
  
  return (
    <div className="flex bg-white shadow-lg items-start">
      <img src={movie.posterUrl} alt={movie.title} className="max-w-[18rem] w-2/5 block" />
      <div className="p-8 flex flex-col gap-4 text-sm">
        <div>
          <h2 className="text-2xl">{movie.title}</h2>
         {/*  <p className="italic text-sm">{movie.genres.join(', ')}</p> */}
        </div>
        <p className="">{movie.plot}</p>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-bold">{movie.popularity}</span>
          <span className="flex-1">{directorFrmRndmNbr && directorFrmRndmNbr.name}</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-bold">Ortalama Puan: {movie.vote_average}</span>
          <span className="flex-1">Kullanılan Oy Sayısı {movie.vote_count}</span>
        </div>
        <div className="flex text-sm gap-1 justify-end">
          <span className="block px-2 py-1 rounded-md border border-zinc-400">{movie.year}</span>
          <span className="block px-2 py-1 rounded-md border border-zinc-400">{movie.runtime}dk</span>
        </div>
      </div>
    </div>
  )
//   let tmpMovieObj = {
//     id: movie.id,
//     title: movie.title,
//     posterUrl: pre_poster_path + movie.poster_path,
//     plot: movie.overview,
//     vote_average: movie.vote_average,
//     year: movie.release_date,
//     poplarity: movie.popularity,
//     vote_count: movie.vote_count
//     release_date: movie.release_date
// }
};