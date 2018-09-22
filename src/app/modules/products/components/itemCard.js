import React, { Component } from 'react';
import { Icon, Card, Image, Rating } from 'semantic-ui-react'
import styled from 'styled-components'; 

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export const StyledImage = styled(Image)`
  height: 200px;
`;

export const ItemCard = ({item}) => {
  return (
    <Card 
      image={<StyledImage src={item.image} />}
      header={item.title}
      meta={`by ${item.owner}`}
      extra={<Rating maxRating={5} rating={item.rating} icon='star' />}
      />
  )
}