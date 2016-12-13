import React from "react";
import {Card, CardHeader, CardText, Avatar, Subheader, Divider} from "material-ui";
import Video from './Type/Video';
import {AvVideocam} from "material-ui/svg-icons";
import {red500} from "material-ui/styles/colors";
import ResourceDetails from './ResourceDetails';
import Discussion from 'components/Discussion/Discussion';

export default function ResourceCard(props) {
  return (
    <Card style={{margin:8}}>
      <CardHeader
        title="Overview of Net Present Value"
        subtitle="Video"
        avatar={<Avatar icon={<AvVideocam />} backgroundColor={red500}/>}
      />
      <Video/>
      <Divider/>
      <Subheader>Description</Subheader>
      <ResourceDetails/>
      <Divider/>
      <Subheader>Discussion</Subheader>
      <Discussion/>
    </Card>
  )
}
