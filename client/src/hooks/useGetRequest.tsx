import { useState } from 'react';
import { ErrorMessage } from '../interfaces/general';
import configText from '../utils/cofigText';

const useGetRequest = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<ErrorMessage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      debugger;
      const response = await fetch(url, {
        method: 'GET',
        headers: { origin: '*' },
      });

      if (!response.ok) {
        throw Error();
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      let errorMessage: ErrorMessage = {
        text: configText.errors.unknownError,
      };
      if (err instanceof Error) {
        errorMessage = {
          text: err.message,
        };
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getRequest };
};

export default useGetRequest;
