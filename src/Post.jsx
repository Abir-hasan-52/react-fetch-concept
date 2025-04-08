export default function Post({post}){
    console.log(post);
    const {title,body}=post;
    // const {title, body} = post;
    return (
        <div className="card">
            <h2>Post Title : {title}</h2>
            <p>body:{body} </p>
        </div>
    );
}