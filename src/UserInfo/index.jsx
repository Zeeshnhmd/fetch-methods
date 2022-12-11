import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        console.log(data);
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
          <img src={errorImage} alt="" />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
