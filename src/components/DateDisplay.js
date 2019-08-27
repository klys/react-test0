import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const DateDisplay = ((props) => (
  <Paper className="container">
      <List>
          <ListItem>
          <ListItemText>Day: {props.day}</ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Month: {props.month} </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Year: {props.year} </ListItemText>
      </ListItem>
      </List>
  </Paper>
));

DateDisplay.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string
}

export default DateDisplay;