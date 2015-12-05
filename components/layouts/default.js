import React from 'react';
import {Link} from 'react-router';

class DefaultLayout extends React.Component {
  render() {
    return(
      <div>
        <ul className='navigation'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
