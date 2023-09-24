export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(wick => {
        return{
            params: {id: wick.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + id)
    const data = await res.json() 

    return {
        props: {wick: data}
    }
}


const Details = ({wick}) => {
    return ( 
        <div>
            <h1>Bombowool</h1>
            <h1>{wick.name}</h1>
            <p>{wick.email}</p>
            <p>{wick.website}</p>
            <p>{wick.city}</p>
        </div>
     );
}
 
export default Details;