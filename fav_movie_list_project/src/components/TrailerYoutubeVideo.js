import React from "react";
import { Card } from "react-bootstrap";
import YouTube from "react-youtube";

function TrailerYoutubeVideo(props) {
  return (
    <div>
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Trailer</Card.Title>
          <Card.Text>
          {/* <YouTube
                videoId={props.trailerId}
              /> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TrailerYoutubeVideo;
