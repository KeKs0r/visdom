import React, {Component} from "react";
import {CardMedia, CardTitle} from "material-ui";
import YouTube from "react-youtube";

export default class Video extends Component {
  render() {
    const opts = {
      // height: '390',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <CardMedia>
        <YouTube
          videoId="HFFkFMfotT0"
          opts={opts}
          onReady={this._onReady}
        />
      </CardMedia>
    );
  }

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }
}
