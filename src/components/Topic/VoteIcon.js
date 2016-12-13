import React, {Component} from "react";
import {Avatar, IconButton} from "material-ui";
import {HardwareKeyboardArrowUp, HardwareKeyboardArrowDown} from "material-ui/svg-icons";
import {green50, black} from "material-ui/styles/colors";

const containerStyle = {
  right: 4,
  top: 0,
  position: 'absolute',
  display: 'block',
  height: 72
};

const countStyle = {
  position: 'block',
  paddingLeft: 3,
  paddingBottom: 3,
};

const buttonStyle = {
  position: 'block',
  padding: 0,
  width: 24,
  height: 24,
};

export default class VoteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0
    }
    this.downVote = this.downVote.bind(this);
    this.upVote = this.upVote.bind(this);
  }

  upVote() {
    this.setState({ count: this.state.count + 1 })
  }

  downVote() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { count } = this.state;
    return (
      <div style={containerStyle}>
        <IconButton style={buttonStyle} onTouchTap={this.upVote}>
          <HardwareKeyboardArrowUp/>
        </IconButton>
        <div style={countStyle}>
          <Avatar backgroundColor={green50} color={black} size={18}>{count}</Avatar>
        </div>
        <IconButton style={buttonStyle} onTouchTap={this.downVote}>
          <HardwareKeyboardArrowDown />
        </IconButton>
      </div>
    )
  }
}
