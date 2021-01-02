import Layout from "../components/Layout";
import Link from "next/link";

const PostLink =({slug, title}) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}><a>{title}</a></Link>
    </li>

)


export default  () => (
    <Layout title="my Blog">
        <ul>
            <PostLink slug="react-post" title={"React Post"}/>
            <PostLink slug="angular-post" title={"Angular"}/>
            <PostLink slug="vue-post" title={"Vue"}/>
        </ul>
    </Layout>
)