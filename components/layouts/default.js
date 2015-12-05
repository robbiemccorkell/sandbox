import React from 'react';

class DefaultLayout extends React.Component {
  render() {
    return(
      <div>
        <ul className='navigation'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
