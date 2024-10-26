import { useEffect, useState } from "react";
import ListUsers from "../../components/users/List";

const IndexPost = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setUsers(data);
                setLoading(false);
                setError(null);
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])
    return (
        <div className="container mt-5">
            <div className="row g-3">
                <h2>Users :</h2>
                {error && <div>{error}</div>}
                <div>
                    {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                    {loading ? 'Loading...' : ''}
                </div>
                {/* {loading && <div className="spinner-border">loading...</div>} */}
                {users && <ListUsers users={users} />}
            </div>
        </div>
    )
}

export default IndexPost;