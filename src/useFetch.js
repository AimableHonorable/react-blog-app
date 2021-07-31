import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setisPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(url)
    .then(res => {
      if (!res.ok) {
        throw Error('Could not fetch the data!!!')
      }
      return res.json();
    })
    .then(data => {
      setData(data);

      // after fetching the data we need to stop showing loading message to the screen by setting isPending function state to false
      setisPending(false);
      setError(null);
    })
    .catch(err => {
      setisPending(false);
      setError(err.message);
    })
  }, [url])

  return { data, isPending, error }
}

export default useFetch;