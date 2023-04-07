import { useState } from 'react';
import configText from '../utils/cofigText';

const usePostRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const postRequest = async (url, body, token) => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          origin: '*',
          'Content-Type': 'application/json',
          [configText.auth.token]: token,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      setData(data);
    } catch (err) {
      let errors = [{ msg: configText.errors.unknownError }];
      setData({ ...data, errors });
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, postRequest };
};

export default usePostRequest;
