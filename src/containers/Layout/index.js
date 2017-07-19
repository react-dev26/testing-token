import React, { PropTypes, Component } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { routes } from 'setup/Router';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  static defaultProps = {
    children: '',
  };

  componentDidMount() {
    
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
export default Layout;
