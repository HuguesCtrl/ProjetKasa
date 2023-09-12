import { createContext, useState, useEffect } from "react";

export const getAPIresult = createContext();

function callAPI(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("../../public/data/db.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Une erreur est survenue dans la ressource...");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <getAPIresult.Provider value={{ loading, error, data }}>
      {props.children}
    </getAPIresult.Provider>
  );
}
export default callAPI;
