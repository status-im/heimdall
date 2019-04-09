import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DELETE_NOT_TODO = gql`
mutation DeleteNotTodo($name: String) {
  deleteNotTodo(name: $name) 
}
`
const GET_NOT_TODOS = gql`
  query GetNotTodos{
    getNotTodos {
      name
      description
    }
  }
`

class DeleteNotTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
  return (
    <Mutation 
      mutation={DELETE_NOT_TODO} 
      refetchQueries={ () => { 
        return [{ query: GET_NOT_TODOS }] 
        } 
    }>
      {(deleteNotTodo, { data }) => (
        <div style={{display: 'flex', flexDirection:'column'}}> 
            <button style={{color:"red"}} onClick={e => {
              e.preventDefault()
              deleteNotTodo( { variables: { name: this.props.name, } })
            }}>Delete</button>
        </div>
      )}
    </Mutation>
  )}
}

export default DeleteNotTodo