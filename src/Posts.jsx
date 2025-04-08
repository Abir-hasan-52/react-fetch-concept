import { use } from "react";
import Post from "./Post";

export default function Posts({fetchPosts}){
    const posts =use(fetchPosts);
    console.log(posts);

    // const {title}=posts;
    return (
        <div className="card">
            <h1> Total Posts :{posts.length}</h1>
            <p>This is the posts page.</p>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
}