import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux'

import ActionItem from './ActionItem';
import Nav from './common/Nav';
import styles from './styles';

const items = [
  { id: 1, label: 'Home', to: '/home', action: () => {} },
  { id: 2, label: 'FAQ', to: '/generic', action: () => {} },
  { id: 3, label: 'Whitepaper', to: '/generic', action: () => {} },
  { id: 4, label: 'CrowdSale', to: '/generic', action: () => {} },
  { id: 5, label: 'Blog', to: '/generic', action: () => {} },
  { id: 6, label: '中文', to: '/home', action: () => {} },
  { id: 7, label: 'About Us', to: '/home#TEAM', action: () => {} },
];

class TopNav extends Component {
  render() {
    return (
      <nav style={styles.nav}>
        <ul style={styles.wrapper}>
          {
            items.map(item =>
              <ActionItem key={item.id} label={item.label} to={item.to} />,
            )
          }
          <Nav loggedIn={this.props.data.loggedIn}
            currentlySending={this.props.data.currentlySending}
            history={this.props.history}
            dispatch={this.props.dispatch}
            location={this.props.location} />
        </ul>
      </nav>
    );
  }
}

TopNav.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};
TopNav.defaultProps = {
  data: null,
  history: null,
  location: null,
  dispatch: () => {},
};

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(TopNav);
