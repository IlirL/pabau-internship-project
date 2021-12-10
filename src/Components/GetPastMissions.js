import React, { useEffect, useState } from 'react'

import {useQuery, gql} from "@apollo/client";
import {Load_PastMissions} from '../GraphQL/Queries';
import PostPastMission from './PostPastMission';
import { Container, Grid, Typography } from '@mui/material';
import {Route} from 'react-router-dom'
function GetPastMissions() {


    const {error, loading, data} = useQuery(Load_PastMissions);
    const [pastMissions, setPastMissions] = useState([]);

    useEffect(()=>{
        if(data)
        {
            console.log("We are in with data = ", data);
            setPastMissions(data.launchesPast);
        }
    }, [data]);

    return (
     
        <Container>
            <Typography variant = "h3" align = 'center' component = "div" nowrap = "false" gutterBottom>
                Past Spacex Missions</Typography>
           <Grid container spacing = {5}>
            {
                pastMissions && pastMissions.map((pastMission, index) =>{
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
