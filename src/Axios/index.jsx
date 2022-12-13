import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

import errorSVG from "../images/404.svg";

import styles from "./axios.module.scss";

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/user"
      );
      console.log(response);
      if (!response.status === 200) {
        throw new Error(response.status);
      }
      const data = response.data;
      setUsers(
        data?.map((userEl) => ({
          ...userEl,
          avatar: "https://robohash.org/YOUR-TEXT.png",
        }))
      );
      console.log(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      setUsers(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles["async-await-wrapper"]}>
      <div className={styles["async-await"]}>
        {loading && (
          <div className={styles["loader-wrapper"]}>
            <PacmanLoader
              loading={loading}
              size={25}
              className={styles["loader"]}
              color="#000000"
            />
          </div>
        )}

        {error && (
          <div className={styles["error-wrapper"]}>
            <img className={styles["error"]} src={errorSVG} alt="error" />
          </div>
          // <h1>{error}</h1>
        )}

        {!loading && !error && (
          <div className={styles["cards-wrapper"]}>
            {users?.map((user) => (
              <div key={user.id} className={styles["card"]}>
                <img className={styles["avatar"]} src={user.avatar} alt="" />
                <Link to={`/user/${user.id}`} className={styles["name"]}>
                  {user.name}
                </Link>
                <p className={styles["email"]}>{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Axios;
