import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function LogIn({data}) {
    console.log(data);

    return (
        <Layout>
            <Head>
                <title>Tasker Log In</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <h1>Usuarios:</h1>
            <ul>
                {data.map(({ id, name, username, email }) => (
                    <li key={id}>
                        <Link href="/user/[id]" as={`/user/${id}`}>
                            <a>
                                {name}
                               
                            </a>
                        </Link>
                        <br />
                        {username}
                        <br />
                        {email}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonResponse = await response.json()
    const data = jsonResponse;
  
    return {
      props: {
          data
      }
    }
}