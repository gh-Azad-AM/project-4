import { Link } from "react-router-dom";

const Home = () => {
    return(
       <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi odit officiis omnis maxime asperiores cum aliquam eligendi eum nesciunt cupiditate porro nobis nisi sit, consequatur iste laboriosam possimus sunt esse culpa soluta at nulla! Dicta at, corrupti reiciendis laboriosam facilis magni libero aspernatur facere vitae esse voluptatibus? Ipsam, qui eaque!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci, placeat quasi harum quis natus consequuntur sed reiciendis! Repellat, quos.
                    </p>
                    <Link className="btn btn-dark" to="/users">Users</Link>
                    <Link className="btn btn-light ms-3" to="/posts">posts</Link>
                   
                </div>
            </div>
       </div>
    )
}

export default Home;