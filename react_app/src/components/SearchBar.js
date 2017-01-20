import React from 'react';
import '../assets/search.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: ''
    }
  }

  render() {
    return (
      <form>
        <h3>Search Hero</h3>

        <div className="form-group">
          <label className="control-label">Hero</label>
          <input
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
