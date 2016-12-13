import React from 'react'
import './HomeView.scss'
import VoteIcon from 'components/Topic/VoteIcon';
import TopicCard from 'components/Topic/TopicCard';
import ResourceCard from 'components/Resource/ResourceCard';
import {Grid, Row, Col} from 'react-flexbox-grid';

export const HomeView = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={6}><TopicCard/></Col>
      <Col xs={12} md={6}><ResourceCard/></Col>
    </Row>
  </Grid>
)

export default HomeView
