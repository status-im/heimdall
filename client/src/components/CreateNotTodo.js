import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const GET_NOT_TODOS = gql`
  query GetNotTodos{
    getNotTodos {
      name
      description
    }
  }
`

const CREATE_NOT_TODO = gql`
  mutation CreateNotTodo($name: String, $description: String) {
    createNotTodo(name: $name, description: $description) {
      name
      description
    }
  }
`

class CreateNotTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
  return (
    <Mutation 
      mutation={CREATE_NOT_TODO} 
      refetchQueries={ () => { 
        return [{ query: GET_NOT_TODOS }] 
        } 
    }>
      {(createNotTodo, { data }) => (
        <div style={{display: 'flex', flexDirection:'column'}}> 
          <h3 style={{margin: '0px'}}>Add something to not do!</h3>
          <form onSubmit={e => {
            e.preventDefault()
            createNotTodo( { variables: { name: this.state.name, 
                                          description: this.state.description } })
            this.setState({
              name: '',
              description: ''
            })
          }}>
            <input placeholder='Name' name='name' onChange={this.onChange} />
            <input placeholder='Description' name='description' onChange={this.onChange}  />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </Mutation>
  )}
}

export default CreateNotTodo