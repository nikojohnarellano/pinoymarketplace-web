import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

export default class Feed extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={4}>
        <Card color='red' image={"https://via.placeholder.com/350x250"} />
        <Card color='orange' image={"https://via.placeholder.com/350x250"} />
        <Card color='yellow' image={"https://via.placeholder.com/350x250"} />
        <Card color='olive' image={"https://via.placeholder.com/350x250"} />
        <Card color='green' image={"https://via.placeholder.com/350x250"} />
        <Card color='teal' image={"https://via.placeholder.com/350x250"} />
        <Card color='blue' image={"https://via.placeholder.com/350x250"} />
        <Card color='violet' image={"https://via.placeholder.com/350x250"} />
      </Card.Group>
    )
  }
}