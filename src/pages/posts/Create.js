import { useState } from "react";
import Swal from "sweetalert2";

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        //dont refresh
        e.preventDefault()
        // console.log(title, body)
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            // .then((data) => console.log(data));
            .then((data) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Thanks!",
                    text: "post created successfuly",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }
    return (
        <>
            <div className="col-md-6">
                <h2>Create Post:</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                        {/* <div className="form-text text-danger">Title is required</div> */}
                        <div className="form-text text-danger">{title ? '' : 'Title is required'}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Body</label>
                        <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows="3"></textarea>
                        <div className="form-text text-danger">{body ? '' : 'body is required'}</div>
                    </div>
                    <button className="btn btn-dark" type="submit" disabled={title == '' || body == ''}>
                        {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                        Create
                        </button>
                        {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
                </form>

            </div>
        </>


    )
}

export default CreatePost;