import { GraphQLClient } from 'graphql-request'

const { HYGRAPH_ENDPOINT, HYGRAPH_API_KEY = null } = process.env;
const authorization = `Bearer ${HYGRAPH_ENDPOINT, {
  headers: {
    ...(HYGRAPH_API_KEY && {authorization})
  }
}}`