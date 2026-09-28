import Link from "next/link";

export default function AllBlogs(){
    return <>
    <h1>All Blogs List</h1>
    <Link href={"/blogs/blog-1"}>Go to Blog 1</Link>
    <Link href={"/blogs/blog-2"}>Go to Blog 2</Link>

    </>
}