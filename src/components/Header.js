import React from 'react';
import{
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles"

//CSS Styles
const useStyle = makeStyles(theme =>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        marin:theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle:{
        color:"tan",
        marginBottom:"3rem" 
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign:"center",
        zIndex:1
    }
}))

const Header = () => {
    const classes = useStyle()
    return (
        <>
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Denisian Ionita"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Denisian Ionita"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Future Web Designer", "Quick learner", "Clatite cu ciocolata"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
            </Typography>
            
        </Box>
        
        </>
    )
}

export default Header;