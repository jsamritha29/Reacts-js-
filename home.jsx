import {Link}  from "react-router-dom";

function home() {
    const posts=[
        {
           id:1,
           title:"React Introduction",
           content:
           "React is a JavaScript library used to build fast and interactive user interfaces"
        },
    ];
    return(
         <div>
            <h1>Mini Blog - Home</h1>
            <p>Select a blog post to view the full article.</p>
            {posts.map((post)=>(
                <div
                    key={post.id}
                    style={{
                        padding:"20px",
                        marginBottom:"20px",
                        borderRadius:"12px",
                        background:"Linear-gradient(135deg,#e8foff,#f2f7ff)",
                        border:"1px solid #cdd9f0",
                        boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
                    }}>
                        
                <h2 style={{margin:"0 0 10px 0",color:"#1a3d7c"}}>
                    {post.title}
                </h2>
                <Link to={`/post/${post.id}`}>
                    Read Full post
                </Link>
                </div>
               
            ))}
         </div>
    );
    }

export default home
