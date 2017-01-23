import React from 'react';
import '../assets/layout.css';
import SearchBar from './SearchBar';
import HeroInfo from './HeroInfo';

class Layout extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name:'invoker'
    }
  }

  handleSearchUpdate(hero){
    this.setState({
      name: hero
    });
  }

  render() {
    return (
      <div className="box">
        <SearchBar searchedHero={this.handleSearchUpdate.bind(this)}/>
        <HeroInfo heroDisplay={this.state.name}/>
      </div>
      );
  }
}

export default Layout;
