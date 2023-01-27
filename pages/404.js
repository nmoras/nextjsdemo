import Link from "next/link";


const Notfound
 = () => {
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