import React, { Component } from 'react'
import Title from './title'
import Photowall from './photowall'
import AddPhoto from './addphoto'
import {Route, Link} from 'react-router-dom'
import {removePost} from '../redux/actions'
import Single from './single'

class Main extends Component {

  componentDidMount(){
    this.props.startLoadingPost()
    this.props.startLoadingComments()
  }


  render(){
    return(
      <div>
        <h1>
          <Link to ="/">Movie Board</Link>
        </h1>
        <h2>A place to post your favorite movies and comment on others' recommendations.</h2>
        <Route exact path = "/" render={()=> (
          <div>

            <Photowall {...this.props} />
         </div>
        )}/>
        <Route path = '/addphoto' render={({history}) => (
          <AddPhoto {...this.props} onHistory={history}/>
        )}/>

        <Route path="/single/:id" render= {(params) => (
          <Single {...this.props} {...params} />
        )} />
      </div>
    )
  }
}
export default Main
