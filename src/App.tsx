import './App.css'
import { Header } from './components/Header';
import { NormalHeader } from './components/NormalHeader'
import { VipHeader } from './components/VipHeader'

function App() {

  const fullName = 'Georg Taylor';
  let customerKind = 'vip';

  return (
    <>
      <Header component={customerKind === 'normal' ? <NormalHeader fullName={fullName} /> : <VipHeader fullName={fullName} />} />
      <section className='p-4'>
        <h2 className='text-3xl my-3'>The site information</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem earum aliquam cupiditate quis, amet hic molestias et deleniti placeat beatae laborum saepe vel praesentium culpa aperiam in, sapiente neque.</p>
      </section>
    </>
  )
}

export default App
