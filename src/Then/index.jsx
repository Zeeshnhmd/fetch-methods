import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

import errorSVG from "../images/404.svg";

import styles from "./then.module.scss";

const Then = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        setError(err);
        setUsers(null);
        setLoading(false);
      })
      .finally(() => {
        setError(null);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles["then-wrapper"]}>
      <div className={styles["then"]}>
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
        )}

        {!loading && !error && (
          <div className={styles["cards-wrapper"]}>
            {users.map((user) => (
              <div key={user.id} className={styles["card"]}>
                <img
                  className={styles["avatar"]}
                  src="https://robohash.org/YOUR-TEXT.png"
                  alt=""
                />
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

export default Then;
