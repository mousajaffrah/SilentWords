import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
     
        <Toolbar className={classes.toolbar}>
        <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/home"
          >
            <h3 >Silent Words</h3>
      </Link>
          <div className={classes.left}/>
          
            <img src="https://cdn.discordapp.com/attachments/872468951760785411/875328784826515486/Silent_Words_Logo_1-removebg-preview.png" style={{width:'6%', marginLeft:'-14%'}}></img>
          
          <div className={classes.right}>
          <Link
              variant="h6"
              underline="none"
              color="white"
              href="/categories"
              className={clsx(classes.rightLink)}
            >
              {'Categories'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              color="white"
              
              href="/article"
            >
              {'Articles'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
