//your code here
import React, { Component } from 'react'

export default class Comments extends React.Component {
  render() {
    return <div className="comment" >
        {this.props.commentText}
           </div>   
    } 
}