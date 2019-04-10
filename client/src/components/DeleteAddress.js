import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import IconButton from '@material-ui/core/Button'
import { Delete } from '@material-ui/icons'

const DELETE_ADDRESS = gql`
mutation DeleteAddress($address: String) {
  deleteAddress(address: $address) 
}
`
const GET_ALL_ADDRESSES = gql`
  query GetAllAddresses{
    getAllAddresses {
      address
      kind
    }
  }
`

class DeleteAddress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
  return (
    <Mutation 
      mutation={DELETE_ADDRESS} 
      refetchQueries={ () => { 
        return [{ query: GET_ALL_ADDRESSES }] 
        } 
    }>
      {(deleteAddress, { data }) => (
        <div> 
            <IconButton variant="contained" onClick={e => {
              e.preventDefault()
              deleteAddress( { variables: { address: this.props.address, } })
            }}><Delete /></IconButton>
        </div>
      )}
    </Mutation>
  )}
}

export default DeleteAddress