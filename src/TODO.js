
import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

var TODOstore = [{ index: 1, value: "Shopping"},
                { index: 2, value: "Sleeping"},
                { index: 3, value: "Go to school"},
                { index: 4, value: "Go to office"},
                { index: 5, value: "Go to bed"}];

const style = theme => ({
    paper: {
        background: '#ddd',
    },
});

const TodoItem = (props) => {
    let item = props.item;
    return (
        <ListItem key={item.index} dense button >
            <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={ <Typography variant='headline'> {item.value} </Typography>} />
        </ListItem>
    );
}

class TODO extends React.Component {
    render() {
        let { classes } = this.props;
        return (
            <Grid container alignItems='flex-start' justify='center' style={{ height: '80vh', margin: '20px 0 0 0' }} >
            <Grid item xs={12} sm={6} >
            <Paper className={classes.paper} >
                <List>
                    { TODOstore.map(value => ( <TodoItem item={value} /> ))}
                </List>
            </Paper>
            </Grid>
            </Grid>
        )
    }
}

export default withStyles(style)(TODO);
