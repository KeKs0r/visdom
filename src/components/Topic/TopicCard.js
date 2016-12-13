import React from "react";
import {Card, CardHeader, CardText, List, ListItem, Avatar, Subheader, Divider} from "material-ui";
import NPVIcon from "images/dollar-stats-icon.png";
import { ActionList, EditorPieChart, ImageSlideshow, AvVideocam} from "material-ui/svg-icons";
import {blue500, orange500, red500, green500} from "material-ui/styles/colors";
import VoteIcon from './VoteIcon';

export default function TopicCard(props) {
  return (
    <Card style={{margin:8}}>
      <CardHeader
        title="Net Present Value"
        subtitle="Beginner"
        avatar={NPVIcon}
      />
      <Divider/>
      <CardText>
        <List>
          <Subheader>Main Material</Subheader>
          <ListItem
            leftAvatar={<Avatar icon={<ImageSlideshow />} backgroundColor={orange500}/>}
            rightIcon={<VoteIcon count={3} />}
            primaryText="Introduction to Net Present Value"
            secondaryText="Slides"
          />
          <ListItem
            leftAvatar={<Avatar icon={<AvVideocam />} backgroundColor={red500}/>}
            rightIconButton={<VoteIcon count={1}/>}
            primaryText="Overview of Net Present Value"
            secondaryText="Video"
          />
        </List>
        <List>
          <Subheader>Support Material</Subheader>
          <ListItem
            leftAvatar={<Avatar icon={<ActionList />} backgroundColor={blue500}/>}
            rightIcon={<VoteIcon count={7}/>}
            primaryText="Literature List"
            secondaryText="Collection"
          />
          <ListItem
            leftAvatar={<Avatar icon={<EditorPieChart />} backgroundColor={green500}/>}
            rightIcon={<VoteIcon count={3}/>}
            primaryText="Example Calculation"
            secondaryText="Chart"
          />
        </List>
      </CardText>
    </Card>
  )
}
