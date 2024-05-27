import { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector, useDispatch } from "react-redux";
import { addListAction, nextMovieAction } from "./ActionsforRedux";
import { getProductsActionCreator } from "./ActionsforRedux/actionCreatorForRedux";
import { getMoviesActionCreator } from "./ActionsforRedux/moviesActionCreator";

function App() {
  const favMovies = useSelector(store => store.favMovies); //bu movie'lerin id'lerini dönen bir array
  const defaultMovies = useSelector(store => store.defaultMovies)

  const currentMovieId = useSelector(store => store.currentMovieId); //egemenlerden gelecek
  const dispatcher = useDispatch();

  function sonrakiFilm() {
    dispatcher(nextMovieAction());
  }

  function addToMyList() {
    dispatcher(addListAction(currentMovieId));
  }

  useEffect(() => {
    dispatcher(getProductsActionCreator());
    dispatcher(getMoviesActionCreator());
  }, []);

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={currentMovieId} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button onClick={addToMyList} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>

            {/*    {favMovies.map((favId) => {
              const foundedMovie = defaultMovies.find(movie => movie.id === favId);
              return <FavMovie 
                key={foundedMovie.id} 
                title={foundedMovie.title} 
                id={foundedMovie.id} 
              />
            })} */}

            { defaultMovies.length && defaultMovies.filter(item => favMovies.includes(item.id)).map((movie) =>
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            )}

          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
