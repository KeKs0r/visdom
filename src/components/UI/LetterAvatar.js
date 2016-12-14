import React, {PropTypes} from "react";
import {Avatar} from "material-ui";
import {pure} from "recompose";
import {head, size, keys, map} from "lodash";

const Colors = require("material-ui/styles/colors");
const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const getColor = (name) => {
  const mappedNumbers = map(name, (l) => Letters.indexOf(l));
  const joined = mappedNumbers.join('');
  const number = parseInt(joined);
  const index = number % size(Colors);
  const indexColors = map(Colors, (c) => c);
  return indexColors[index];
};

export const LetterAvatar = ({name, ...props}) => {
  const letter = head(name);
  const color = getColor(name);
  return (
    <Avatar
      backgroundColor={color}
      {...props}>
      {letter}
    </Avatar>
  );
}

LetterAvatar.propTypes = {
  name: PropTypes.string.isRequired,
}

export default pure(LetterAvatar)


