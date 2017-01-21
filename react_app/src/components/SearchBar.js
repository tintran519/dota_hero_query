import React from 'react';
import '../assets/search.css';
import axios from 'axios';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: ''
    }
  }

  componentDidMount() {
    fetch('/api/')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(stories) {
            console.log(stories);
        });
  }

  // getHero() {
  //   axios.get('http://api.sportradar.us/nba-t3/players/82e44ba0-efd4-41de-b998-056d2865cebf/profile.json?api_key=taxxj6d4y8ksdc9ywarkktzv')
  //   .then(function(res){
  //     console.log(res);
  //   })
  // }

  changeHero(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitSearch(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitSearch.bind(this)}>
        <h3>Search</h3>

        <div className="form-group">
          <label className="control-label">Hero</label>
          <input
            onChange={this.changeHero.bind(this)}
            value={this.state.hero}
            type="text"
            name="hero"
            className="form-control"

          />
        </div>
      </form>
      );
  }
}

export default SearchBar;
