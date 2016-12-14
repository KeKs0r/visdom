import React from 'react'
import { Card, CardText, CardMedia } from 'material-ui';
import Logo from 'images/visdom_logo.png';


const cardStyle = {
  width: '50%',
  left: '25%',
  position:'absolute',

}

export const HomeView = () => (
  <Card style={cardStyle}>
    <CardText>
      <CardMedia><img src={Logo} /></CardMedia>
    </CardText>
  </Card>
)

export default HomeView;
