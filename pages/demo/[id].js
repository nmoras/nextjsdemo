export const  getStaticPaths = async() => {
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

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json()
    console.log(data.address)

    return {
        props: { demo: data }
    }
}
const Details = ({ demo }) => {
    return ( 
        <div>
            <h1>Name: { demo.name} </h1>
            <p>Email: {demo.email} </p>
            <p>Website: {demo.website} </p>
            <p>City: {demo.address.city} </p>
        </div>
     );
}
 
export default Details;