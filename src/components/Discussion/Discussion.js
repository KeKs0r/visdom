import React from "react";
import {Card, CardHeader, CardText, Avatar, Subheader, Divider} from "material-ui";
import CommentList from './CommentList';
import DiscussionForm from './DiscussionForm';

export default function Discussion(props) {
  return (
  <CardText>
    <CommentList/>
    <Divider/>
    <DiscussionForm/>
  </CardText>
  )
}

