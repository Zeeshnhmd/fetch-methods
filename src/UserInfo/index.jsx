import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

import errorImage from "../images/404.svg";

import styles from "./user.module.scss";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err);
        setUser(null);
      } finally {
        setLoading(false);
        setError(null);
      }
    };
    getUser();
  }, [id]);

  return (
    <div className={styles["user-wrapper"]}>
      {error && (
        <div className={styles["error-wrapper"]}>
          <img className={styles["error"]} src={errorImage} alt="" />
        </div>
      )}
      {loading && (
        <div className={styles["loading-wrapper"]}>
          <PacmanLoader
            loading={loading}
            size={25}
            className={styles["loader"]}
            color="#000000"
          />
        </div>
      )}
      {!error && !loading && (
        <div className={styles["user-info"]}>
          {user.map((user) => (
            <div className={styles["user"]}>
              <div className={styles["avatar-wrapper"]}>
                <img
                  src="https://gravatar.com/avatar/ca1f63cb38ffe205102c96abd064e967?s=400&d=robohash&r=x"
                  className={styles["avatar"]}
                  alt={user.name}
                />
              </div>
              <div className={styles["user-data"]}>
                <p className={styles["name"]}>{user.name}</p>
                <p className={styles["email"]}>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
