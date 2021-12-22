import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../state/movies";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { addToFavorites } from "../state/users";

export function Movie() {
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
      //   <section class="section">
      //     <div class="container">
      //     <div class="card">
      // 	<div class="card-image">
      // 		<figure class="image is-4by3">
      // 			<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      // 		</figure>
      // 	</div>
      // 	<div class="card-content">
      // 		<div class="media">
      // 			<div class="media-left">
      // 				<figure class="image is-48x48">
      // 					<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      // 				</figure>
      // 			</div>
      // 			<div class="media-content">
      // 				<p class="title is-4">John Smith</p>
      // 				<p class="subtitle is-6">@johnsmith</p>
      // 			</div>
      // 		</div>

      // 		<div class="content">
      // 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      // 			<a href="#">#css</a> <a href="#">#responsive</a>
      // 			<br>
      // 			<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      // 		</div>
      // 	</div>
      // </div>
      //     </div>
      //   </section>

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
                <p className="title is-4">
                  {pelicula.Title}{" "}
                  {user.id ? (
                    <button onClick={() => dispatch(addToFavorites(pelicula))}>
                      Add fav
                    </button>
                  ) : null}
                </p>
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
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div>NO DATA</div>;
}
