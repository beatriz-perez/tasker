import Layout from '../../components/layout'

export default function User({ id, data}) {
    const petObject = data.find(item => item.id === parseInt(id))
    const pet = petObject.pokemon

    console.log('hey', id, pet)

    return (
        <Layout>
            <p>hello User  with id {id}</p>
            <p>your pokemon pet is: {pet}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id to pre-render
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonResponse = await response.json()
    const data = jsonResponse;

    const paths = data.map((user) => `/user/${user.id}`)

  
    return { paths, fallback: false } // { fallback: false } means other routes should 404.
}

export async function getStaticProps({ params }) {
    const { id } = params

    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3000' : 'https://tasker-gray.vercel.app';
    const info = await fetch(`${server}/api/users`)
    const data = await info.json()

    return {
        props: {
            id,
            data
        }
    }
}