 
import { Suspense } from 'react'
import './App.css'
import Fetch from './Fetch'
import Users from './Users'
import Posts from './Posts'

// post

const fetchPosts= fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())


// uses
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

      <Suspense fallback={<h3>trying to connect...</h3>}> 
        <Users fetchUsers={fetchUsers} ></Users>
      </Suspense>

      <h2>my turn2</h2>
      <Suspense fallback={<h3>all post loading...</h3>}>
        <Posts fetchPosts={fetchPosts} > </Posts>
      </Suspense>
       
    </>
  )
}

export default App
