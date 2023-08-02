import Head from "next/head";
import Link from "next/link";

export default function Post(){
        return(
                <>
                        <Head>
                                <title>POST</title>
                        </Head>
                        <h1>POSTS</h1>
                        <h2>
                                <Link href="/">← Back to home</Link>
                        </h2>
                </>
        )

}