import React from 'react'

import GetNotTodos from '../../components/GetNotTodos'
import CreateNotTodo from '../../components/CreateNotTodo'

class Home extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', justifyContent:'center', marginTop: '10%'}} >
        <CreateNotTodo />
        <GetNotTodos />
        
      </div>
    )
  }
}

export default Home