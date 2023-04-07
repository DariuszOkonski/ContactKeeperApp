import { useState } from 'react';
import configText from '../utils/cofigText';

const useGetRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRequest = async (url, token) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          origin: '*',
          [configText.auth.token]: token,
        },
      });

      if (!response.ok) {
        throw Error();
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      let errorMessage = {
        text: configText.errors.unknownError,
      };
      errorMessage = {
        text: err.message,
      };
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getRequest };
};

export default useGetRequest;
