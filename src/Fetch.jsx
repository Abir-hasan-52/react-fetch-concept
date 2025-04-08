import { use } from "react"
import Person from "./Person";

export default function Persons({personPromise}){
    const persons = use(personPromise);
    console.log(persons);
    return(
        <div className="card">
            <h1>Persons: {persons.length}</h1>
            <p>List of persons</p>
              {
                persons.map((person) => (
                    <Person key={person.id} person={person}></Person>
                ))
              }
        </div>
    )
}