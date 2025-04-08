import { use } from "react"

export default function Persons({personPromise}){
    const friends = use(personPromise);
    console.log(friends);
    return(
        <div className="card">
            <h1>Persons: {friends.length}</h1>
            <p>List of persons</p>
        </div>
    )
}