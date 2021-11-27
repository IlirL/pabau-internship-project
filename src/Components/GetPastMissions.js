import React, { useEffect, useState } from 'react'

import {useQuery, gql} from "@apollo/client";
import {Load_PastMissions} from '../GraphQL/Queries';
import PostPastMission from './PostPastMission';
import "./GetPastMissions.css"
import { Container, Grid, Typography } from '@mui/material';
import {Route} from 'react-router-dom'
function GetPastMissions() {


    const {error, loading, data} = useQuery(Load_PastMissions);
    const [pastMissions, setPastMissions] = useState([]);

    useEffect(()=>{
        // console.log("data = ", data);
        if(data)
        {
            console.log("We are in with data = ", data);
            setPastMissions(data.launchesPast);
        }
            
        console.log(pastMissions);//we are getting the data but its console.log is being rendered faster
    }, [data]);

    return (
     
        <Container>
            
             {/* <center><h1 id = "title">Past Spacex Missions</h1></center> */}
             <Typography variant = "h3" align = 'center' component = "div" nowrap = "false" gutterBottom>Past Spacex Missions</Typography>
           <Grid container spacing = {5}>
            {
                pastMissions && pastMissions.map((pastMission, index) =>{
                    // console.log("ilir = ", {...pastMission});
                    return <Grid item key = {index} xs = {12} md = {6} lg = {4} >
                            <PostPastMission pastMission = {{...pastMission}}/>
                        </Grid>
                        
                })
            }
            </Grid>
            </Container>
          
    )
}

export default GetPastMissions
