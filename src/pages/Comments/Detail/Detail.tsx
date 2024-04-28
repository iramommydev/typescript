import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TComments } from '../../../types/Comments.types';

const URL_BASE = 'https://jsonplaceholder.typicode.com/comments';

const Detail = memo(() => {
  const [data, setData] = useState<TComments | null>(null);
  const { id } = useParams();

  const getData = useCallback(() => {
    axios
      .get(`${URL_BASE}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch((error) => console.error('Fetching data failed:', error));
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <h2>Detail:</h2>
      <p>{data ? data.body : '-'}</p>
    </div>
  );
});

export default Detail;
