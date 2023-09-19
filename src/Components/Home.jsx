import { ReactDOM } from "react";
import React from "react";
import { createUseStyles } from "react-jss";

const customStyles = createUseStyles({

    Wrapper: {
        padding: 40,
        textAlign: "left",
        background: "#EFEFEF"
    },
    Heading: {
        font: 30,
        fontWeight: 500,
        color: "#fff"
    }

});

export default function Home()
{
    const classes = customStyles();
    return (<div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Welcome to my app</h1>
    </div>);
}