

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel any pending requests if the component unmounts
    return () => {
      // Your cleanup code here, for example:
      // Cancel pending axios requests if necessary
    };
  }, [url]); // Re-run effect if the URL changes

  return { data, loading, error };
};

export default useFetch;