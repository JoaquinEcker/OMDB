import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function MoviesList() {
  const options = useSelector((state) => state.moviesList);

  const capitalize = (titulo) => {
    return titulo.charAt(0).toUpperCase() + titulo.slice(1);
  };

  if (options.Search) {
    return (
      <div className="columns is-multiline is-centered container">
        {options.Search.map((movie, i) => (
          <Link to={`/movies/${movie.imdbID}`} key={i}>
            <div className="card1">
              <div className="card-image">
                <img
                  src={
                    movie.Poster == "N/A"
                      ? "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
                      : movie.Poster
                  }
                  alt="Placeholder image"
                  style={{ height: "500px", width: "500px" }}
                />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <div className="media-content">
                      <div
                        style={{
                          width: "250px",
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p className="title1" style={{}}>
                          {movie.Title}
                        </p>
                        <hr />
                      </div>
                      <div>
                        <p
                          className="title is-6"
                          style={{ textAlign: "center", marginTop: "2%" }}
                        >
                          {movie.Year}
                        </p>
                      </div>
                      <div>
                        <p
                          className="title is-6"
                          style={{ textAlign: "center", marginTop: "2%" }}
                        >
                          {capitalize(movie.Type)}
                        </p>
                      </div>
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
