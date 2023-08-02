import Link from "next/link";

export default function Navigation(){
        return(
        <nav>
                <ul>
                        <li><Link href="/" >home</Link></li>
                        <li><Link href="/posts" >posts</Link></li>
                        <li><Link href="/posts/lorem-ipsum">lorem ipsum</Link></li>
                </ul>
        </nav>
        )

}