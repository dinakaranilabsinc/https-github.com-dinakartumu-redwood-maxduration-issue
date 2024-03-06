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

  const test = async () => {
    try {
      const response = await fetch(`/api/inngest`)
      console.log({ response })
    } catch (error) {
      console.error('Error getting Salesforce tokens:', error)
      throw error
    }
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Home</h1>
      {data ? (
        data.homes.map((e, key) => <div key={key}>{e.title}</div>)
      ) : (
        <div>loading...</div>
      )}
      <button type="button" onClick={test}>
        Check this
      </button>
    </>
  )
}

export default HomePage
