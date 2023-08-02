import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default async function FirstPost({params}) {
  const res = await fetch("http://localhost:3000/api/content") //no route.js
  const data = await res.json()
  console.log(data)
  const post = data.find( e => e.slug === params.id )

        return (
          <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h2>
              <Link href="/">← Back to home</Link>
            </h2>
          </div>
        );
      }