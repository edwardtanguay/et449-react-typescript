import { BoxWrapper } from './components/BoxWrapper';
import { DemoUseReducer } from './components/DemoUseReducer';
import { ExampleUseState } from './components/ExampleUseState';
import { Header } from './components/Header';
import { NormalHeader } from './components/NormalHeader'
import { VipHeader } from './components/VipHeader'
import { useArray } from './hooks/useArray';

function App() {
	const { array, push, remove, clear } = useArray([1, 2, 3]);

	const fullName = 'Georg Taylor';
	let customerKind = 'vip';

	return (
		<>
			<Header component={customerKind === 'normal' ? <NormalHeader fullName={fullName} /> : <VipHeader fullName={fullName} />} />
			<section className='p-4'>
				<h2 className='text-3xl my-3'>The site information</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem earum aliquam cupiditate quis, amet hic molestias et deleniti placeat beatae laborum saepe vel praesentium culpa aperiam in, sapiente neque.</p>
				<BoxWrapper>
					<div className='mb-3'>Array: {JSON.stringify(array)}</div>
					<button className='mr-3' onClick={() => push(4)}>Add 4</button>
					<button className='mr-3' onClick={() => remove(1)}>Remove element at index 1</button>
					<button className='mr-3' onClick={clear}>Clear Array</button>
				</BoxWrapper>
				<BoxWrapper>
					<DemoUseReducer />
				</BoxWrapper>
				<BoxWrapper>
					<ExampleUseState />
				</BoxWrapper>
				<BoxWrapper>
					<h2>Info Box</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non repudiandae, magnam veritatis, cum in quidem eaque quasi fuga reprehenderit nisi perspiciatis amet hic, distinctio sed maiores quos vitae consequuntur.</p>
				</BoxWrapper>
				<BoxWrapper>
					<h2>Documentation</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quam exercitationem ducimus laborum perspiciatis consectetur distinctio perferendis qui, nisi voluptatem facilis, omnis, sequi dolorum fuga quasi voluptatum ipsum quis eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae est reiciendis provident totam error deserunt vero ea ad dicta, officiis fugit minima? Incidunt veniam maiores excepturi eaque, debitis natus consectetur?</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum earum atque blanditiis quisquam sequi cumque molestiae expedita, consectetur, velit similique quos dignissimos perferendis quaerat quod nam explicabo facere ducimus. </p>
				</BoxWrapper>
			</section>
		</>
	)
}

export default App
