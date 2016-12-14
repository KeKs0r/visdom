import React from "react";
import {ListItem, Chip} from "material-ui";
import {LetterAvatar} from "components/UI";
import { omit } from 'lodash'
import { orange200, orange500, orange700} from "material-ui/styles/colors";

const levels = {
  1: "Beginner",
  2: "Advanced",
  3: "Expert"
}

const colors = {
  1: orange200,
  2: orange500,
  3: orange700,
};

export default function TopicItem(props) {
  const level = props.level || 1;
  const itemProps = {
    primaryText: props.name,
    leftAvatar: <LetterAvatar name={props.name}/>,
    rightAvatar: <Chip backgroundColor={colors[level]}>{levels[level]}</Chip >,
    ...omit(props, 'level', 'name'),
  };

  return (
    <ListItem {...itemProps}/>
  )
}
