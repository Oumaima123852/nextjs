export default async function PostDetails({params}) {

    const postId = params.postId 

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        next:{
            revalidate: 120,
        }
    })
    const post = await response.json();
  
    return (
      <div>
        <h1>Post Details</h1>
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    );
  }
  


