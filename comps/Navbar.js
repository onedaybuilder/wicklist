import Link from "next/link";


const Navbar = () => {
    return ( 
        <>
            <nav>
                <div className="logo">
                    <h1>Wicklist</h1>
                </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/pagans">Wicklist</Link>
            </nav>
        </>
     );
}
 
export default Navbar;