import React, {PropTypes} from "react";
import {Avatar} from "material-ui";
import {pure} from "recompose";
import {head, size, keys, map} from "lodash";

const Colors = require("material-ui/styles/colors");
const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//position: absolute; top: 0px; margin: 12px; left: 4px;
const menuItemStyle = {
  position: 'absolute',
  top: 12,
  margin: 12,
  left: 4
}

const getColor = (name) => {
  const mappedNumbers = map(name, (l) => Letters.indexOf(l));
  const joined = mappedNumbers.join('');
  const number = parseInt(joined);
  const index = number % size(Colors);
  const indexColors = map(Colors, (c) => c);
  return indexColors[index];
};

export const LetterAvatar = ({name}) => {
  const letter = head(name);
  const color = getColor(name);
  return (
    <Avatar
      size={24}
      style={menuItemStyle}
      backgroundColor={color}>
      {letter}
    </Avatar>
  );
}

LetterAvatar.propTypes = {
  name: PropTypes.string.isRequired,
}

export default pure(LetterAvatar)


