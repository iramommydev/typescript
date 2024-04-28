import useTitle from '../../hooks/use-title.hook';
import { Outlet } from 'react-router-dom';

const Comments = () => {
  useTitle({ title: 'Comments' });
  return (
    <>
      <h1>Comments</h1>
      <Outlet />
    </>
  );
};

export default Comments;
