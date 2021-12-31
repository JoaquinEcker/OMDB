import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../state/movies";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { addToFavorites } from "../state/users";
import { successAlert } from "../utils/alerts";
import { useHistory } from "react-router";
export function Movie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  useEffect(() => {
    dispatch(getMovies(id));
  }, []);

  const pelicula = useSelector((state) => state.movie);
  const user = useSelector((state) => state.user);
  if (pelicula) {
    return (
      <div id="dad">
        <div className="card card2">
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={pelicula.Poster} alt="Poster" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{pelicula.Title} </p>
                <p className="subtitle is-6">{pelicula.Year}</p>
                <p className="subtitle is-6">{pelicula.Genre}</p>
                <p className="subtitle is-6">
                  <i>{pelicula.Runtime}</i>
                </p>
              </div>
            </div>

            <div className="content">
              {pelicula.Plot}
              <hr />
              <p className="text is-12">
                <strong>Actors:</strong> {pelicula.Actors}
              </p>
              <br />
              <p className="subtitle is-6">
                <strong>Rating: </strong>
                {pelicula.imdbRating}
                {user.id ? (
                  <button
                    onClick={() =>
                      dispatch(addToFavorites(pelicula))
                        .then(() =>
                          successAlert("Hecho", "Pelicula agregada a favoritos")
                        )
                        .then(() => history.push("/movies"))
                    }
                    style={{ marginLeft: "70%" }}
                  >
                    Add fav
                  </button>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div>NO DATA</div>;
}
