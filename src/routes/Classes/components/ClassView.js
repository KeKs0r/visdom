import React from 'react'
import { Card, CardHeader, Divider, CardText} from 'material-ui';
import TopicList from 'components/Topic/TopicList';
import TopicList1 from 'components/Topic/TopicList1';
import {Grid, Row, Col} from 'react-flexbox-grid';

export const ClassView = (props) => (

<Grid fluid>
  <Row>
    <Col xs={12} md={6}>
      <Card style={{margin:8}}>
        <CardHeader
          title="Product Realization"
          subtitle="Product Realization Processes I"
        />
        <Divider/>
        <CardText>
          <TopicList router={props.router}/>
        </CardText>
      </Card>
    </Col>
    <Col xs={12} md={6}>
      <Card style={{margin:8}}>
        <CardHeader
          title="Product Realization"
          subtitle="Product Realization Processes I"
        />
        <Divider/>
        <CardText>
          <TopicList1  router={props.router}/>
        </CardText>
      </Card>

    </Col>
  </Row>
</Grid>

)

ClassView.propTypes = {
}

export default ClassView
