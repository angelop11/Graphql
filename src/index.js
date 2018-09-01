import express from 'express'
const app = express()

import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/graphql')
	.then(()=> console.log('mongodb connected'))
	.catch(err => console.log(err))

//mongodb Models
import Car from './models/Car'
import { ApolloServer } from 'apollo-server-express'
import {makeExecutableSchema} from 'graphql-tools'
import typeDefs from './schema'
import resolvers from './resolvers'


//settings
app.set('port', process.env.PORT || 3000)


const schema = makeExecutableSchema({
	typeDefs, 
	resolvers
})

const server = new ApolloServer({
	schema,
	context: {
		Car
	}
})

app.use(express.json())

server.applyMiddleware({ app })

//start the server
app.listen(app.get('port'), ()=>{
	console.log(`server on port 3000${server.graphqlPath}`)
})