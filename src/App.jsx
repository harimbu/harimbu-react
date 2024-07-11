import { auth, db } from './config/firebase'

export default function App() {
  console.log(auth)
  console.log(db)
  return (
    <>
      <div className='text-4xl font-bold text-blue-500'>App</div>
    </>
  )
}
