const { gql } = require('apollo-server-express');

module.exports = gql`
    type Product {
        id: ID
        name: String
        price: Int
        description: String
    }
    type Query {
        getProducts:[Product]
        getProduct(id:ID):Product
    }
    type Mutation {
        # createProduct
        # updateProduct
    }
`
