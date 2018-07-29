import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MallAppBar from './MallAppBar'
import Cart from './Cart'
import ProductList from './ProductList'

import {BrowserRouter as Router, Route} from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify={'center'} spacing={24}>
                    <Grid item xs={10}>
                        <Paper className={classes.paper}>
                            <Router>
                                <div>
                                    <MallAppBar/>
                                    <Route exact path="/" component={ProductList}/>
                                    <Route path="/cart" component={Cart}/>
                                </div>
                            </Router>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(App);
