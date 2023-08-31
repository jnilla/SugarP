"use client";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExample } from "@/store/thunks";
import { useSelector } from "react-redux";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi";

export default function Home() {
  // Obtener datos de la api
  const { data, error, isLoading, isSuccess } = useGetExampleGetQuery();
  const results = data?.results;

  // Dispatch para cargar datos al store
  const dispatch = useDispatch();

  //Cargar datos al store
  useEffect(() => {
    dispatch(getExample(results));
  }, [isSuccess, results, dispatch]);

  //Obtener datos del store
  const example = useSelector((state) => state.sugarp.example);
  console.log(example);

  return (
    <>
      <h1>Example</h1>
      <ul className={styles.card}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          example?.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.url}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
