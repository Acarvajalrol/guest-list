import { useState, useEffect } from "react";

export default function getDataHooks(url) {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const result = await fetch(url);
      const data = await result.json();

      //   console.log(data.data);

      setGuests(data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { isLoading, guests };
}
