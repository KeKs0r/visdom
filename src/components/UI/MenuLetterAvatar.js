import React, {PropTypes} from "react";
import {LetterAvatar} from "./LetterAvatar";
import {pure} from "recompose";

const menuItemStyle = {
  position: 'absolute',
  top: 12,
  margin: 12,
  left: 4
}

export const MenuLetterAvatar = (p) => {
  const props = {...p, size: 24, style:menuItemStyle};
  return (
    <LetterAvatar {...props} />
  );
}

MenuLetterAvatar.propTypes = {
  name: PropTypes.string.isRequired,
}

export default pure(MenuLetterAvatar)


