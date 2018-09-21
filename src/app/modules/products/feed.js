import React, { Component } from 'react';
import { Card, Icon, Segment, Header } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default class Feed extends Component {
  render() {
    return (
      <Segment raised>
        <Header as="h1">Featured</Header>
        <Card.Group itemsPerRow={4}>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
          <Card image='https://via.placeholder.com/200x300'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}/>
        </Card.Group>
      </Segment>
    )
  }
}