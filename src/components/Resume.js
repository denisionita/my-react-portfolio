import React from 'react'
import Timeline from './timeline/Timeline'
import '../Resume.scss'
import Navbar from "./Navbar"
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      ...theme.typography.button,
        color:"white",
      padding: theme.spacing(1),
      textAlign: "center",
      fontSize:"24px",
      marginTop:"2rem"
      
    },
  }));

const Resume = () => {
    const classes = useStyles();
    return(
    <>
        <Navbar />
         <div className={classes.title}>{"31.08.2000 - i was born"}</div>;
        <Timeline />
    </>

    );
};

export default Resume;
