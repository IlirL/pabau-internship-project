import { useApolloClient } from '@apollo/client'
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Icon, IconButton, Paper, Typography } from '@mui/material';
import React from 'react'
import { Route, useLocation, useNavigate, useParams} from 'react-router'
import Link from '@mui/material/Link';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link as RouteLink} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DetailsMission() {
    const location = useLocation();
    const details = {...location.state};
    console.log("details = ",details )
    

    return (
        <Card sx={{ maxWidth: "95%" , margin: "auto"}}>
        {
            details.links.flickr_images.length > 0 ?
            <CardMedia
            component="img"
            height="300"
            image={details.links.flickr_images[0]}
            />
          
      : ""
        }
        <CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {details.mission_name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Launch Date: {details.launch_date_local}
            </Typography>
            {
                details.details && 
                <Typography variant="body1" color="text.secondary">
              {details.details}
            </Typography>
            }
             <Typography variant="h6" component="div" noWrap = {true}>
              Rocket 
            </Typography>
            <Typography variant = "body2">
              {details.rocket.rocket_name}, {details.rocket.rocket_type}
            </Typography>

            <Container style = {{display:"flex", alignItems:"center", marginLeft:"0", padding:"10px"}}>
            <Link href = {details.links.reddit_campaign} style = {{marginRight:"5px"}}> 
               <RedditIcon /> 
            </Link>
            
            <Link href = {details.links.video_link} style = {{marginRight:"5px"}}>
              <YouTubeIcon/>
            </Link>
            
            <Link href = {details.links.wikipedia} style = {{textDecoration:"none"}}>
                Wikipedia
            </Link>

              <RouteLink to = "/" style = {{marginLeft:"auto"}}>
                    <IconButton >
                        <ArrowBackIcon/> Home
                    </IconButton>
            </RouteLink>
            </Container>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default DetailsMission
