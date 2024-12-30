import Link from "next/link";

export const metadata = {
    title : "Posts Page",
}

export default async function posts() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate: 120,
        }
    })
    const posts = await response.json();
    

    ;
    
  return (
    <div>
        <h1 className="flex items-center justify-center text-3xl m-8 text-red-">Posts</h1>
        {posts.map((post) => {
        return (
            <Link href={`/postes/${post.id}`} key={post.id}>
                <div className="flex flex-col items-center justify-center bg-black-100 rounded-full m-8 px-10 py-8" key={post.id}>
                    <h2 className="text-red-400 pb-2">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </Link>
        )
        })};

    </div>
  );
}


