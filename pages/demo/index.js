import styles from '@/styles/Jobs.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { demo : data }
    }
}

const Demo = ({ demo }) => {
    console.log(demo)

    return (  
        <div> 
            <h1>Demo List</h1>
            {demo.map ( demo => (
                <div key={demo.id}>
                    <a className={styles.single}>
                        <h3>{ demo.name}</h3>
                    </a>
                </div> 
            ))}
        </div>
    );
}
 
export default Demo;