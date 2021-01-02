import Layout from "../components/Layout";
import {withRouter} from "next/router";

const Post = ({router}) => (
    <Layout title={router.query.title} >
        <p style={{width: "80vw"}}>This is a Post</p>
    </Layout>
);

export default withRouter(Post);