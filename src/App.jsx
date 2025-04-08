 
import { Suspense } from 'react'
import './App.css'
import Fetch from './Fetch'
import Users from './Users'


const fetchUsers= fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())


const fetchPerson= async() =>{
  const res =await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {
  const personPromise = fetchPerson();

  return (
    <>
       
      <h1>Vite + React</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
      <Fetch personPromise={personPromise}></Fetch>
      </Suspense>
      <h2>my turn</h2>

      {/* <Suspense fallback={<h3>trying to connect...</h3>}> 
        <Users fetchUsers={fetchUsers} ></Users>
      </Suspense> */}
       
    </>
  )
}

export default App
