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
          isRemoval={false} /* It is not used anywhere now, also don't forget to add this prop to the <PlaylistsPage /> component later */
          addSongToPlaylist={this.props.addSongToPlaylist}
        />
      </div>
    );
  }
};

export default SlapsPage;
