import { useState } from 'react';

export const ExampleUseState = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count => count + 1);
		setCount(count => count + 1);
		setCount(count => count + 1);
	}

	return (
		<>
			<div>
				<button onClick={handleIncrement} className='mr-3 text-2xl'>+</button>Count: {count}
			</div>
			<div>
				<input type="text" onChange={(e) => setCount(Number(e.target.value))} />
			</div>
		</>
	)
}