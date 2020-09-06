import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
function Cards({ text }) {
  return (
    <Card style={style.root}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
}

const style = {
  root: {
    marginBottom: 8,
  },
};
export default Cards;
