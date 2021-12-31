import useInput from "../hooks/useInput";
import { useHistory } from "react-router";
import { getMovieListRequest } from "../state/moviesList";
import { useDispatch } from "react-redux";

export function Welcome() {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMovieListRequest(search.value)).then(history.push("/movies"));
  }

  return (
    <div id="dad" className="welcome">
      <form
        className="row"
        onSubmit={handleSubmit}
        style={{ marginTop: "-100px" }}
      >
        <div className="search" style={{ marginTop: "250px" }}>
          Busca series y peliculas
        </div>
        <hr />

        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search"
              {...search}
            />
          </div>
          <div className="control">
            <button className="button is-info" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
