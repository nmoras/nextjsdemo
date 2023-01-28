export const  getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

    const paths = data.map(demo => {
        return{
            params: {id: demo.id.toString() }
        }
    })

    return{
        paths, 
        fallback: false
    }
}

const Details = () => {
    return ( 
        <div>
            <h1>Details Page</h1>
        </div>
     );
}
 
export default Details;