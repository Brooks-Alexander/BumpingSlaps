import React from "react";
import { Tracklist } from '../Tracklist/Tracklist';
import './Playlist.css';

export class Playlist extends React.Component {
    render () {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                <Tracklist tracks={this.props.playlistTracks} />
            </div>
        );
    }
}