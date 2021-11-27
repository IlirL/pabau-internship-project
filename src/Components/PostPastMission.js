
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
//{launch_date_local, links, mission_name}
function PostPastMission({pastMission}) {
    console.log("PostPastMission = ", pastMission)
    return (
        <Link to = {`/details/${pastMission.id}`}
            state = {{
                ...pastMission
            }}
         style = {{textDecoration:"none"}}>
        <Card sx={{ maxWidth: 345 }} spacing = {5}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={pastMission.links.flickr_images.length ? pastMission.links.flickr_images[0]: ""}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap = {true}>
              {pastMission.mission_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pastMission.launch_date_local}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
    )
}

export default PostPastMission
