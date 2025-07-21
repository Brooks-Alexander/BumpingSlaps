import React from "react";
import { Tracklist } from '../Tracklist/Tracklist';
import './Playlist.css';

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.props.onNameChage(e.target.value);
    }

    render () {

        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
                <Tracklist
                    playlistTracks={this.props.playlistTracks} 
                    onAdd={this.props.onAdd}
                    addSongToPlaylist={this.props.addSongToPlaylist}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />
                <button className='Playlist-save' onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}