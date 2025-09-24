import { blogPosts } from "../data/blogPosts"

const Blog = () => {
    const data = blogPosts.id1

    return (
        <div>
            Hello {data}
        </div>
    )
}

export default Blog
