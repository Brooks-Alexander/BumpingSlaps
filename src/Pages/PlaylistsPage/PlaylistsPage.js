import React from 'react';
import { Tracklist } from '../Components/Tracklist/Tracklist';

export default class PlaylistsPage extends React.Component {
  render() {
    return (
      <div className='PlaylistsPage'>
        <h2>Your Playlists</h2>
        <input defaultValue={'New Playlist'} />
        <Tracklist
          tracks={this.props.playlistTracks}
          onAdd={this.props.onAdd}
          addSongToPlaylist={this.props.addSongToPlaylist}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    );
  }
};

