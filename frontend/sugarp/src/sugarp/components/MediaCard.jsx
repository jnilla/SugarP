import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ heading, text }) {
  return (
    <Card>
      <img
        alt='Random image'
        src='https://source.unsplash.com/random'
        width={640}
        height={480}
        style={{
          maxWidth: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {heading}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>View Project</Button>
      </CardActions>
    </Card>
  );
}
