import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditFormPost from "../../components/posts/EditForm";

const EditPost = () => {

    const { postId } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setPost(data);
                setLoading(false);
                setError(null);
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [postId])

    return (
        <>
            <h2>Edit Post:</h2>
            {error && <div>{error}</div>}
            {loading && <div className="spiner-border">loading...</div>}
            {post && <EditFormPost post={post} />}
        </>
    )
}

export default EditPost;