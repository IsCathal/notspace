import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";  

export default function NavMenu() {
    return (    


            //href '/' is the root of the website
            // it will take you to the root of the website

        <nav className={styles.nav}>
            <link href={'/'}>
            
            <Image
                src = "/logo.png"
                width = {100}
                height = {100}
                alt = "logo"
                />
            </link>

            <ul className={styles.links}>    
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                <Link href={'/users'}>Users</Link>
                </li>
            </ul>
            
        </nav>
    );


}