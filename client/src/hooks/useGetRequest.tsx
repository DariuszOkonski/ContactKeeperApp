import { useState } from 'react';

const useGetRequest = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        headers: { origin: '*' },
      });

      if (!response.ok) {
        throw Error('');
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getRequest };
};

export default useGetRequest;
