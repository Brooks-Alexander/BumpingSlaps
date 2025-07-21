import React from 'react';
import { Playlist } from '../Components/Playlist/Playlist';

export default class PlaylistsPage extends React.Component {
  render() {
    return (
      <div className='PlaylistsPage'>
        <h2>Your Playlists</h2>
        <input value={this.props.playlistName} onChange={this.props.onNameChange} />
        <Playlist
          playlistTracks={this.props.playlistTracks}
          onAdd={this.props.onAdd}
          addSongToPlaylist={this.props.addSongToPlaylist}
          onRemove={this.props.onRemove}
          isRemoval={true}
          onNameChange={this.props.onNameChange}
          onSave={this.props.onSave}
        />
      </div>
    );
  }
};

