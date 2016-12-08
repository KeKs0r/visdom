import React, {Component, PropTypes} from "react";
import {AppBar, Drawer, Menu, MenuItem, Divider, ListItem} from "material-ui";
import LetterAvatar from "components/UI";
import {NavigationClose, ActionPowerSettingsNew} from "material-ui/svg-icons";
import routingContainer from "containers/RoutingContainer";


export class AppHeader extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      openDrawer: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate(e, route) {
    const { push } = this.props;
    this.toggleDrawer(e);
    push(route);
  }

  toggleDrawer(e) {
    e.preventDefault();
    this.setState({ openDrawer: !this.state.openDrawer });
  }


  logout(e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  }

  render() {
    const { push } = this.props;
    return (
      <AppBar
        title="Visdom"
        onLeftIconButtonTouchTap={this.toggleDrawer}
        onTitleTouchTap={(e) => push('/dashboard')}
        titleStyle={{ cursor: 'pointer' }}
      >
        <Drawer
          open={this.state.openDrawer}
          onToggleDrawer={this.toggleDrawer}
          docked={false}>
          <Menu onChange={this.navigate}>
            <ListItem leftIcon={<LetterAvatar name={"John Doe"} key="avatar"/>}
                      primaryText={"John Doe"} secondaryText="Logged in" disabled/>
            <onLeftIconButtonTouchTapMenuItem primaryText="Logout" key="logout"
                      leftIcon={<ActionPowerSettingsNew />}
                      />
            <MenuItem onTouchTap={this.toggleDrawer} leftIcon={<NavigationClose />} key="close">Close</MenuItem>
            <Divider />
            <MenuItem primaryText="Home" value="/dashboard" className="drawerItem" key="dashboard"/>
          </Menu>
        </Drawer>
      </AppBar>
    )
  }
}

export default routingContainer(AppHeader);
