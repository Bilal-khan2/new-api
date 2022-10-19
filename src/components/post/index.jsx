// import moment from 'moment';
import "./index.css"

let Post =({ name, postDes, postText}) =>(
    <div className="post">
        <div className="heading">
    <div className="postHeader">
    </div>
    <div>
       <h4>{name}</h4>  <br />

    </div>
    <div className="desc">
        {postDes}
    </div>
    </div>
    <div className="posttext">
        {postText}
    </div>
  
    </div>

);
export default Post;