import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TComments } from '../../types/Comments.types';
import React from 'react';

const CommentsList = memo(() => {
  const [list, setList] = useState<TComments[]>([]);
  const getCommentsList = useCallback(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?_limit=50')
      .then((response) => {
        if (response.status === 200) {
          setList(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch comments:', error);
      });
  }, []);

  useEffect(() => {
    getCommentsList();
  }, [getCommentsList]);

  return (
    <div className='px-4 py-4 max-w-[1200px] m-auto '>
      <h1>Comments List</h1>
      <ul>
        {list.map((comment) => (
          <li key={comment.id} className='pb-2'>
            <Link to={`/comments/${comment.id}`} ><strong>{comment.name}</strong></Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CommentsList;
