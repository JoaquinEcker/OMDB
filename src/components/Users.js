import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Users() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((users) => setUsuarios(users));
  }, []);

  return (
    <div>
      {usuarios.map((usuario, i) => (
        <Link to="favs/userId">
          {/* <UsersFavs id={usuario.id} email={usuario}> */}
          <li key={i}>{usuario.email}</li> {/* </UsersFavs> */}
        </Link>
      ))}
    </div>
  );
}
