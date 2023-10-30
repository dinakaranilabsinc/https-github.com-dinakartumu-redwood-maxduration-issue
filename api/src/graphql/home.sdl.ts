export const schema = gql`
  type Home {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    description: String!
    image: String!
    link: String!
  }

  type Query {
    homes: [Home!]! @skipAuth
    home(id: Int!): Home! @skipAuth
  }
`
