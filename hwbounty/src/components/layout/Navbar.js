// React
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Styling
import theme from "./../../util/theme";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

// Icons
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";

// Images
import HWBountyLogo from "../../images/HWBounty-Logo.png";

const styles = {
  ...theme.spreadIt,
  root: {},
  button: {
    ...theme.button,
    height: "50px",
    color: "white",
  },
  navBar: {
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    objectFit: "fill",
    maxWidth: "100px",
    maxHeight: "100px",
  },
};

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false,
    };
  }

  handleHover = () => {
    this.setState({ showNavbar: true });
  };

  handleLeave = () => {
    this.setState({ showNavbar: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.navBar}>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={0}>
              <Button href="/" className={classes.button}>
                Home
              </Button>
            </Grid>
            <Grid item xs={0}>
              <Button href="/login" className={classes.button}>
                Login
              </Button>
            </Grid>
            <Grid item xs={0}>
              <Button href="/signup" className={classes.button}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
