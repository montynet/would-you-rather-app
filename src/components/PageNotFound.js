import React, { Component } from 'react'
import {Redirect} from "react-router-dom";
let wrongWayPic = require("../assets/images/wrongWay.jpg");

class PageNotFound extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 1500)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect ?
      <Redirect to='/' />
      :
      <div>
        <h3 className='center'>Not Found</h3>
        <figure className='image is-128x128 center'>
          <img className='img-thumbnail is-small' src={wrongWayPic} alt='Wrong Way Sign'/>
        </figure>
      </div>

  }
}

export default PageNotFound
