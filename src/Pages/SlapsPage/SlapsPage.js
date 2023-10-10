import React from 'react';
import { Tracklist } from '../Components/Tracklist/Tracklist';


class SlapsPage extends React.Component {

  render() {
    return (
      <div className='SlapsPage'>
        <h2>Check the Slaps</h2> 
        <Tracklist 
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
          addSongToPlaylist={this.props.addSongToPlaylist}
        />    
      </div>
    );
  }
};

export default SlapsPage;
