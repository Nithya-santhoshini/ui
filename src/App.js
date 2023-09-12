import React from 'react'
import { AppBar,Toolbar, Typography,Container, ImageList, ImageListItem, TextField,Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import ImagesData from './ImagesData.json';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const App  = () => {
  return(
    <div>
      <AppBar>
        <Toolbar>
          <CameraAltIcon></CameraAltIcon>
           <Typography variant="h5">photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{"marginTop":"70px","textAlign":"center"}}>
        <Typography variant='h2'>Our Latest Version Of Photography</Typography>
        <Typography paragraph>pleasure to take your photo as well,please fill the below form for any invite requests</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={400} col={2} width={200}>
          {ImagesData.map(imageObj =>
             <ImageListItem key={imageObj}cols={1}>
               <img src={imageObj.image} alt={imageObj.title}/>
             </ImageListItem>
            )}
          
        </ImageList>
      </Container>
      <center>
        <Container>
          <Typography variant='h4' >Contact Form</Typography>
          <form>
            <TextField  style={{"width":"500px","margin":"5px"}}type="text" label="Name" variant="outlined"  /> <br />
            <TextField  style={{"width":"500px","margin":"5px"}}type="text" label="E-mail" variant="outlined"  /> <br />
            <TextField  style={{"width":"500px","margin":"5px"}}type="text" label="Proposal" variant="outlined"  /> <br />
            <TextField  style={{"width":"500px","margin":"5px"}}type="text" label="Address" variant="outlined"  /> <br />
            <Button variant="contained" color="primary">Submit</Button>
            
          </form>
        </Container>
      </center>
    </div>
  )
          }

          export default App

