import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGreetings } from '../redux/greetings/greetings';

const Greet = () => {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.greeting);

  return (
    <>
      <Link to="/">Go back home</Link>
      <p>Press the button below to be greeted!</p>
      <button type="button" onClick={() => dispatch(getGreetings())}>Greetings!</button>
      <h1>{greeting.greeting}</h1>
    </>
  );
};

export default Greet;