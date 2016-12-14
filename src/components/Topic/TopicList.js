import React from "react";
import {List, ListItem, Avatar, Subheader, Chip, Badge, IconButton} from "material-ui";
import TopicItem from './TopicItem';
import {ActionLockOutline} from "material-ui/svg-icons";
import NPVIcon from "images/dollar-stats-icon.png";
import { LetterAvatar } from 'components/UI';

export default function TopicList(props) {
  return (
    <List>
      <Subheader>1. Overview</Subheader>
      <TopicItem
        name="Course Overview"
        rightAvatar={<Avatar icon={<ActionLockOutline />}/>}
      />
      <Subheader>2. Development Processes and Organization</Subheader>
      <TopicItem name="Concept Development: The Frontend Process" level={2}/>
      <TopicItem name="Product Development Organizations" level={3}/>
      <Subheader>3. Opportunity Identification</Subheader>
      <TopicItem name="Opportunity Identification Process" level={2}/>
      <Subheader>4. Product Planning</Subheader>
      <TopicItem name="Market Segmentation"/>
      <TopicItem name="Product Platform Planning"/>
      <Subheader>5. Identifying Customer Needs</Subheader>
      <TopicItem name="Raw Data Gathering"/>
      <TopicItem name="Customer Needs"/>
    </List>
  )
}
