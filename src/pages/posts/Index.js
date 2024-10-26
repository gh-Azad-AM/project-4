import { useEffect, useState } from "react";
import ListPosts from "../../components/posts/List";
import { Link } from "react-router-dom";


const IndexPost = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setPosts(data);
                setLoading(false);
                setError(null);
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <h2>Posts :</h2>
            <div>
                <Link className="btn btn-dark" to="/posts/create">Create Post</Link>
            </div>
            {error && <div>{error}</div>}
            <div>
                {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                {loading ? 'Loading' : ''}
            </div>
            {/* {loading && <div className="spinner-border spinner-border-sm me-2">loading...</div>} */}
            {posts && <ListPosts posts={posts} />}
        </>


    )
}

export default IndexPost;