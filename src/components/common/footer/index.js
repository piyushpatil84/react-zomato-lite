import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link, Grid, Box } from '@material-ui/core';
import { Facebook, LinkedIn } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    backgroundColor: "white",
    marginTop: theme.spacing(1),
    padding: theme.spacing(2, 1),
    position: "relative",
    bottom: "0%",
    display: "Block",
    width: "100%",
    //fontStyle: "lato",
    //padding: "2%",
  },
  root: {
    flexGrow: 1,
    //padding: "1%",
    textTransform: "none",
    position: "relative",
    textAlign: "inline",
    Bottom: "0%",
    flexShrink: "0",
    marginTop: "auto",
  },
  terms: {
    flex: 1,
    fontSize: 15,
    color: "#050505",
    textDecoration: "blink",
    paddingLeft: "5%",
  },
  link: {
    textAlign: "center",
  },
  ln: {
    paddingLeft: "1%",
    color: "#050505",
  },
  fb: {
    color: "#050505",
  },
  desc: {
    fontSize: 16,
    color: "#050505",
    //paddingLeft: "24%",
    //justify: "center",
    textAlign: "center",
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid container >
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box textAlign="center">
              <Link href="/" underline="none" className={classes.terms}>
                Terms & Conditions
              </Link>
              <Link href="/" underline="none" className={classes.terms}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box textAlign="center">
              <span className={classes.desc}>
                Copyright © 2022 Zomato Solution. All Rights Reserved.
              </span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box className={classes.link}>
              <Link target="_blank" href="https://www.facebook.com/zomato" className={classes.fb}>
                <Facebook />
              </Link >
              <Link target="_blank" href="https://in.linkedin.com/company/zomato" className={classes.ln}>
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid >
    </footer >
  );
}