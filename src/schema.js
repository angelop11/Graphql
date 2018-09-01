import { gql } from 'apollo-server-express'
export default gql`

	type Car{
		id: String!
		name: String
	}


	type Query{
		allCars: [Car!]!
	}


	type Mutation{
		createCar(name: String!): Car!
	}

`