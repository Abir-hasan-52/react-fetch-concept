export default function Person({person}){
    console.log(person);
    const {name,email,phone,website}=person;
    // const {name, email, phone} = person;
    return(
        <div className="card">
            <h4>name:{name}</h4>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <p>website:{website}</p>
        </div>
    )
}