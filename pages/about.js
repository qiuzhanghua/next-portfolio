import Layout from "../components/Layout";
import {Component} from "react";

export default class About extends Component {
    render() {
        return (
            <Layout title="About">
                <p>A JavaScript programmer</p>
                <img src="/js.png" alt="JavaScript" width="64"/>
            </Layout>);
    }
};

