import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="A site for my programming portfolio" />
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex nofollow" />
                <link 
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}