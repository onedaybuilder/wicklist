import styles from '../../styles/Wicks.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {wicks: data}
    }
}



const Pagans = ({wicks}) => {
    return ( 
        <>
            <h1>List of pagans</h1>
            {
                wicks.map(wick => (
                    <Link href={"/pagans/" + wick.id}  key={wick.id} className={styles.single}>
                        
                            <h3>{wick.name}</h3>
                        
                    </Link>
                ))
            }
        </>
     );
}
 
export default Pagans;