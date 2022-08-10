import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, ImageListItem, Typography } from '@mui/material';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function BoxSx() {
  return (
    <Box
      flex={2}
      padding={2}
      sx={{
        display: {xs: "none", sm: "block"}
      }}
      className="activitybar"
    >
      <Box
      position={"fixed"}
      width={300}
      >
         <Typography
            variant="h5"
          >
            Online Friends
        </Typography>
        <AvatarGroup max={5} className="group">
          <Avatar alt="Kam Sharp" src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/GxjuxtQC-4lOx0fgdLxdsiJI-Oc=/960x0/filters:focal(209x219:219x209)/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/ID2MONZ7KVBRRJ2BWV4CPJ7U6Y.jpg"/>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&w=1000&q=80"/>
          <Avatar alt="Cindy Baker" src="https://images.adagio.com/images2/icons/784253.jpg"/>
          <Avatar alt="Anne Walker" src="https://assets.vogue.com/photos/5fced19ddad9ba0c310e4d7e/1:1/w_799,h_799,c_limit/IMG_1849.JPG"/>
          <Avatar alt="Brenda Henderson" src="https://campusdata.uark.edu/resources/images/articles/2022-02-15_11-14-36-AMChulyndriaLayeDeansSpotlightheadshot.jpg"/>
          <Avatar alt="Max"/>
          <Avatar alt="Sam"/>
          <Avatar alt="Tim"/>
        </AvatarGroup>
        <Typography variant='h5' className="word" mt={2} mb={2}>
          Lastest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} className='photos'>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h5' className="convo">
          Lastest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="list">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kam Sharp" src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/GxjuxtQC-4lOx0fgdLxdsiJI-Oc=/960x0/filters:focal(209x219:219x209)/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/ID2MONZ7KVBRRJ2BWV4CPJ7U6Y.jpg"/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Kam Sharp
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&w=1000&q=80" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.adagio.com/images2/icons/784253.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
}