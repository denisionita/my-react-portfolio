import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import{
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
}from "@material-ui/core";
import{
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail,
Create
}from "@material-ui/icons";
import avatar from "../avatar.png"
import Footer from "./Footer"
//CSS styles
const useStyle = makeStyles(theme=>({
    menuSliderContainer: {
        width:250,
        background: "#511",
        height: "100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width: theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "About Me",
        listPath: "/aboutme"
    },
    {
        listIcon: <Create/>,
        listText: "Contact",
        listPath: "/contact"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right:false //for the right sidebar - by default it s gonna be false/hidden
    });
    const toggleSlider = (slider, open) => () =>{
        setState({...state, [slider]: open });
    };
    const classes = useStyle();

    const sideList = slider =>(
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider,false)}> {/*onclickul asta face ca dupca ce dai click oriunde, sa se retraga sidebarul*/}
        <Avatar className={classes.avatar} src={avatar} alt="Denisian Ionita"/>
        <Divider />
        <List>
            {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
            ))}
        </List>
    </Box>
    )
    return(
        <>

        <Box component="nav">
            <AppBar position="static" style={{background: "#144965"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>{/* //creeaza efectul de apasare pe buttonul ArrowBack */} 
                        <ArrowBack style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography varaint="h5" style={{color:"tan"}}>
                        My super duper menu
                    </Typography>
                    <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right",false)}>{/*wtf anchor right il muta la dreapta */}
                        {sideList("right")}
                        <Footer/>
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
};

export default Navbar;