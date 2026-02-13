import {useParams,Link } from "react-router-dom";
function post() {
    const {id} =useParams();
    const posts=[
        {
            id:1,
            title:"React Introduction",
            content:"React is a Javascript library developed by Facebook."
        },
    ];
    const post=posts.find((p)=> p.id === parseInt(id));
    if(!post){
        return(
            <h2 style={{padding:20,fontFamily:"Arial"}}>post Not Found</h2>
        );
    }
  return (
    <div>
      <Link to ="/">Back to Home</Link>
    <div>
        <h1 style={{margintop:0,color:"#08a5400"}}>{post.title}</h1>
        <p>{post.content}</p>
        </div>
        </div>
  );
}

export default post;
