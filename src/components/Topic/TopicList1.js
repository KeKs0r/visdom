import React from "react";
import {List, ListItem, Avatar, Subheader, Chip, Badge, IconButton} from "material-ui";
import TopicItem from './TopicItem';
import {ActionLockOutline} from "material-ui/svg-icons";
import NPVIcon from "images/dollar-stats-icon.png";
import { LetterAvatar } from 'components/UI';

export default function TopicList(props) {
  const router = props.router;
  const navigate = () => {
    router.push('/topic/npv')
  };
  return (
    <List>
      <Subheader>6. Product Specifications</Subheader>
      <TopicItem name="Definition: Product Specifications" level={3}/>
      <TopicItem name="Establishing Target Specifications" level={3}/>
      <TopicItem name="Setting final Specifications" level={3}/>
      <Subheader>7. Concept Generation</Subheader>
      <Subheader>8. Concept Selection</Subheader>
      <Subheader>9. Concept Testing</Subheader>
      <Subheader>...</Subheader>
      <Subheader>15. Product Development Economics</Subheader>
      <TopicItem
        name="Net Present Value"
        leftAvatar={<Avatar src={NPVIcon} />}
        onTouchTap={navigate}
      />
    </List>
  )
}
