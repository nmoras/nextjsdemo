import Link from 'next/link'
import Image from 'next/image';


const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <h1>Demo List</h1>
                <Image src="" width={128} height={77}></Image>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/demo">Demo</Link>
        </nav>
     );
}
 
export default Navbar;