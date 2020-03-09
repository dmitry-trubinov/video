const buildSchema = require('graphql').buildSchema;

module.exports = buildSchema(`    
type Video {
  id: ID!
  title: String!
  created: String  
}

input VideoInput {
  filename: String!  
}

type RootQuery {
  videos: [Video]      
}

type RootMutation {
  createVideo(videoInput:VideoInput): Video  
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);