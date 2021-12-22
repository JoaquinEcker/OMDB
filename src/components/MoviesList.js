import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function MoviesList() {
  const options = useSelector((state) => state.moviesList);

  if (options.Search) {
    return (
      <div
        // style={{ display: "flex", justifyContent: "center" }}
        className="columns is-multiline is-centered container"
        // style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {options.Search.map((movie, i) => (
          <Link to={`/movies/${movie.imdbID}`} key={i}>
            <div className="card1">
              <div className="card-image">
                {/* <figure className="image"> */}
                <img
                  src={movie.Poster}
                  alt="Placeholder image"
                  style={{ height: "500px", width: "500px" }}
                />
                {/* </figure> */}
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <div className="media-content">
                      <p className="title1" style={{ textAlign: "center" }}>
                        {movie.Title}
                      </p>
                      <p className="title is-6">{movie.Year}</p>
                      <p className="title is-6">{movie.Type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } else return <div></div>;
}
