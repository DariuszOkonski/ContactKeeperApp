import { useState } from 'react';
import { RegisterUser } from '../interfaces/general';
import configText from '../utils/cofigText';

const usePostRequest = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postRequest = async (url: string, body: RegisterUser) => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          origin: '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log('!!! err: ', err);
      let errors = [{ msg: configText.errors.unknownError }];
      setData({ ...data, errors });
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, postRequest };
};

export default usePostRequest;
