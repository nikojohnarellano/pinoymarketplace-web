import React, { Component } from 'react';
import { Card, Icon, Segment, Header } from 'semantic-ui-react'
import { ItemCard } from './components';

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const MOCK_FEATURED_ITEMS = [
  {
    image: 'https://du7ybees82p4m.cloudfront.net/5709d98ac8ba29.86272207.jpg?width=910&height=512',
    title: 'Filipino Style Spaghetti',
    owner: "MM's kitchen",
    rating: '4.7'
  },
  {
    image: 'https://panlasangpinoy.com/wp-content/uploads/2017/04/Pork-Bicol-Express-Recipe.jpg',
    title: 'Bicol Express',
    owner: "MM's kitchen",
    rating: '4.8'
  }, 
  {
    image: 'http://store.itablemarketing.com/wp-content/uploads/2017/02/viganlongganisa-672x422.jpg',
    title: 'Real Home Made Vigan Longanisa',
    owner: "Mendoza Cuisine",
    rating: '4.3'
  },
  {
    image: 'https://truffle-assets.imgix.net/pxqrocxwsjcc_60D7UWT6Y8I0G8y0OYQS8S_leche-flan-creme-caramel_landscapeThumbnail_en.jpeg',
    title: 'Leche Flan',
    owner: "Jasper Ludovice",
    rating: '4.7'
  }
]

const MOCK_TOP_RATED_ITEMS = [
  {
    image: 'https://images.summitmedia-digital.com/yummyph/images/2017/09/08/kare-kare.jpg',
    title: 'Kare kare',
    owner: "MM's kitchen",
    rating: '4.7'
  },
  {
    image: 'https://cdn.cdkitchen.com/recipes/images/2016/04/7845-5468-mx.jpg',
    title: 'Adobo Baboy',
    owner: "MM's kitchen",
    rating: '4.8'
  }, 
  {
    image: 'https://www.kawalingpinoy.com/wp-content/uploads/2014/11/crispy-sisig-1.jpg',
    title: 'Crunchy Sisig',
    owner: "Mendoza Cuisine",
    rating: '4.3'
  },
  {
    image: 'https://cdn.looloo.com/photos/reviews/308653/large_square/fdec227a-5e5f-4836-8598-ae3b87d68d80.jpg?1501058702',
    title: 'Lechon Cebu Masarap!',
    owner: "Jasper Ludovice",
    rating: '4.7'
  }
];

export default class Feed extends Component {
  render() {
    return (
      <Segment raised>
        <Header as="h1">Featured</Header>
        <Card.Group itemsPerRow={4}>
          {
            MOCK_FEATURED_ITEMS.map((item, index) => <ItemCard key={index} item={item}/>)
          }
        </Card.Group>
        <Header as="h1">Top Rated</Header>
        <Card.Group itemsPerRow={4}>
          {
            MOCK_TOP_RATED_ITEMS.map((item, index) => <ItemCard key={index} item={item}/>)
          }
        </Card.Group>
      </Segment>
    )
  }
}