export default function layout({children}){
    return(
        <div>
            <h1 className="bg-red-300 text-black ">Posts</h1>
            {children}
        </div>
    )
}