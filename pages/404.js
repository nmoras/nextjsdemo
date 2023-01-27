import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'


const Notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(1)
            router.push('/');           
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>
                Oooops...
            </h1>
            <h2>
                The page cannot be found.
            </h2>
            <p>Go back to the
                <Link href="/"> Home Page</Link>
            </p>
        </div>
     );
}
 
export default Notfound
;