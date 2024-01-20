import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrement, increment, incrementByValue } from '../../redux/features/counter/counterSlice';
import { RootState } from '../../redux/features/store';

const Counter = () => {
	const { count } = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();

	return (
        <>
        <div className="flex items-center gap-10 mt-10 underline">
				<Link to={'/home'}> home</Link>
				<Link to={'/login'}> login</Link>
			</div>
		<div className="flex flex-col items-center justify-center mt-10">
			<p className="text-2xl font-semibold">Current Status ={count} </p>
			<div className="mt-4 flex items-center justify-center gap-6">
				<button className="bg-green-600 text-white p-4 rounded-xl" onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button className="bg-red-600 text-white p-4 rounded-xl" onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button className="bg-blue-600 text-white p-4 rounded-xl" onClick={() => dispatch(incrementByValue(10))}>
					Increment By 10
				</button>
			</div>
			
		</div>
        </>
	);
};

export default Counter;