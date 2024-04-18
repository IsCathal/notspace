
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "This is the about page",
}


export default function About() {   

    return (
        <main>
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
    );
}  