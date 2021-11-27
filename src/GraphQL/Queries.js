import {gql} from "@apollo/client";

export const Load_PastMissions = gql`
{
  launchesPast(limit: 20) {
    mission_name
    launch_date_local
    links {
      article_link
      video_link
      wikipedia
      reddit_campaign
      flickr_images
    }
    rocket {
      rocket_name
      rocket_type
    }
    details
    id
  }
}

`;

export const Load_missionDetail = gql`
{
  launchesPast(limit: 20) {
    mission_name
    launch_date_local
    links {
      article_link
      video_link
      wikipedia
      reddit_campaign
      flickr_images
    }
    rocket {
      rocket_name
      rocket_type
    }
    details
    id
  }
}

`



