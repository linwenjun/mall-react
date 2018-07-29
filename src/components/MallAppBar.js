import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom'

const tabData = ['/', '/cart']

class MallAppBar extends Component {

    state = {
        value: 0
    };

    handleChange = (event, value)=> {
        const { history } = this.props
        history.push(tabData[value]);

        this.setState({
            value
        })
    };

    componentDidMount() {
        const { history } = this.props;
        const { pathname } = history.location;
        const value = tabData.indexOf(pathname);

        this.setState({
            value
        })
    }

    render() {
        return (
            <AppBar position="static">
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab key={0} label="商品列表"/>
                    <Tab key={1}  label="购物车"/>
                </Tabs>
            </AppBar>
        )
    }
}

export default withRouter(MallAppBar);