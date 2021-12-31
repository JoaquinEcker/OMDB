import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromFavorites } from "../state/users";
import { successAlert } from "../utils/alerts";
export function Favorites() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/favorites/${user.id}`)
      .then((res) => res.data)
      .then((favs) => setFavs(favs.favourites));
  }, []);

  function handleDelete(id) {
    axios
      .delete(`/api/favorites?userId=${user.id}&movieId=${id}`)
      .then(() => successAlert("Hecho", "Película eliminada de favoritos"))
      .then((_) => favs.filter((movie) => movie.id !== id))
      .then((favs) => setFavs(favs));
  }

  if (favs) {
    return (
      <div className="favs">
        <h1 className="favsTitle">Tus películas favoritas</h1>
        <hr />
        {favs.map((movie, i) => {
          return (
            <div>
              <li key={i} style={{ margin: "4px 0" }}>
                {movie.Title}, {movie.Year}{" "}
                <button
                  onClick={() => handleDelete(movie.id)}
                  // style={{ marginLeft: "1%" }}
                >
                  <FaTrash />
                </button>
              </li>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}
