import React from "react";
import {Avatar, ListItem, TextField, RaisedButton} from "material-ui";
import {grey100, white} from "material-ui/styles/colors";
import User1 from "images/user1-128.jpg";

const commentStyle = {
  backgroundColor: grey100,
  height: 190
};

const fieldStyle = {
  width: '100%',
  top: 0
}

const inputStyle = {
  backgroundColor: white
};

const avatarStyle = {
  marginTop: 32
}

export default function DiscussionForm(props) {
  return (
    <ListItem
      style={commentStyle}
      leftAvatar={<Avatar style={avatarStyle} src={User1}/>}
      primaryText={
        <TextField
          style={fieldStyle}
          textareaStyle={inputStyle}
          floatingLabelFixed
          floatingLabelText="Comment"
          multiLine={true}
          rows={3}
        />
      }

      secondaryText={<RaisedButton primary style={{width:'33%'}}>Ask Question</RaisedButton>}
      secondaryTextLines={2}
    />
  )
}




