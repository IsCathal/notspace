import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";  

export default function NavMenu() {
    return (    
             //href '/' is the root of the website
            // it will take you to the root of the website  
        <nav className={styles.nav}>
            <Link href={'/'}>
            
                 <Image
                       src = "/logo.svg"
                          width = {216}
                          height = {30}
                          alt = "logo"
                  />
            </Link>

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