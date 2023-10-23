import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

const GET_HOMES = gql`
  query GetHomes {
    homes {
      id
      title
    }
  }
`

const HomePage = () => {
  const { data, loading } = useQuery(GET_HOMES)

  console.log({ data, loading })
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Home</h1>
      {data ? (
        data.homes.map((e, key) => <div key={key}>{e.title}</div>)
      ) : (
        <div>loading...</div>
      )}
    </>
  )
}

export default HomePage
