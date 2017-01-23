import React from 'react';

class HeroInfo extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    let query = this.props.heroDisplay;
    return(
      <div>
        <img
          src={`http://cdn.dota2.com/apps/dota2/images/heroes/${query}_lg.png`}
         />
      </div>
      );
  }
}

export default HeroInfo;
