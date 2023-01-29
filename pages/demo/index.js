import styles from '@/styles/Demo.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { demos : data }
    }
}
//pre-render this page at build time using the props returned by getStaticProps
const Demo = ({ demos }) => {
    //console.log(demos)

    return (  
        <div> 
            <h1>Demo List</h1>
            {demos.map ( demo => (
               
                    <Link href={'/demo/'+ demo.id} key={demo.id}
                        className={styles.single}>
                        <h3>{ demo.name}</h3>
                    </Link>
            ))}
        </div>
    );
}
 
export default Demo;