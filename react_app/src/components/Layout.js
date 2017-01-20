import React from 'react';
import '../assets/layout.css';
import SearchBar from './SearchBar'

class Layout extends React.Component {
  render() {
    return (
      <div className="box">
        <SearchBar />
      </div>
      );
  }
}

export default Layout;
