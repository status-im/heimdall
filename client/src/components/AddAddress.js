import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Paper, Button, Typography } from '@material-ui/core';

const ADD_ADDRESS = gql`
mutation AddAddress($address: String, $kind: String) {
  addAddress(address: $address, kind: $kind) {
    address
    kind
  }
}
`

const GET_ALL_ADDRESSES = gql`
  query GetAllAddresses {
    getAllAddresses {
      address
      kind
    }
  }
`

class AddAddress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'address',
      kind: '',
    }
  }

  onChange = event => {
    this.setState({ 
      ...this.state,
      address: event.target.value,
      })
  }

  handleChange = event => {
    this.setState({
     ...this.state,
     kind: event.target.value,
     
    })
  }

  render() {
  return (
    <Mutation 
      mutation={ADD_ADDRESS} 
      refetchQueries={ () => { 
        return [{ query: GET_ALL_ADDRESSES }] 
        } 
    }>
      {(addAddress, { data }) => (
        <Paper > 
          <Typography variant="display1">Add an address to monitor</Typography>
          <form onSubmit={e => {
            e.preventDefault()
            addAddress( { variables: { address: this.state.address,
                                       kind: this.state.kind } })
          }}>
            <input placeholder={this.state.address} name='address' onChange={this.onChange} />
            <select >
              <option value="user">user</option>
              <option value="contract">contract</option>
            </select>
            <Button variant="contained" type="submit">Save</Button>
          </form>
        </Paper>
      )}
    </Mutation>
  )}
}

export default AddAddress