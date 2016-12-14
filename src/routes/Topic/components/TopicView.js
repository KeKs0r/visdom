import React from 'react'
import TopicCard from 'components/Topic/TopicCard';
import ResourceCard from 'components/Resource/ResourceCard';
import {Grid, Row, Col} from 'react-flexbox-grid';

export const TopicView = (props) => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={6}><TopicCard router={props.router}/></Col>
      <Col xs={12} md={6}>{props.children}</Col>
    </Row>
  </Grid>
)

export default TopicView
