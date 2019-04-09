import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import DeleteNotTodo from '../components/DeleteNotTodo'

const query = gql`
  query GetNotTodos{
    getNotTodos {
      name
      description
    }
  }
`

const GetNotTodos = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div key={name}>
          <table style={{border:'1px solid black'}}>
            <tr>
              <th style={{border:'1px solid black'}}>name</th>
              <th style={{border:'1px solid black'}}>description</th>
              <th style={{border:'1px solid black'}}>delete</th>
            </tr>

            {
              data.getNotTodos.map( ({name, description}) => (
                <tr key={name + description}>
                  <td style={{border:'1px solid black'}}>{name}</td>
                  <td style={{border:'1px solid black'}}>{description}</td>
                  <td style={{border:'1px solid black'}}> <DeleteNotTodo name={name} /> </td>
                </tr>
              ))
            }
          </table>
        </div>
      )
    }}
  </Query>
)

export default GetNotTodos