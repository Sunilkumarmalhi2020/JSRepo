import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import FullPostA from '../../components/FullPost/FullPostA';
import NewPostA from '../../components/NewPost/NewPostA';
import post from '../../components/Post/Post';
import Post from '../../components/Post/Post';

const posts=[
    {
        id:'',
        title:'',
        author:'',
    }
];
const BlogA=()=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setPosts(response.data))
        .catch(err=>console.log(err))
    }

    )
    const postsJSX=posts.map(
        post=>{
            return <Post title={post.title} author={post.author} />
        }
    )
    return(
        <div>
        <section className="Posts">
            {postsJSX}
        </section>
        <section>
            <FullPostA />
        </section>
        <section>
            <NewPostA />
        </section>
    </div>
    );
}
export default BlogA;