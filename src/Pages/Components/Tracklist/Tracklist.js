import React from "react";
import { Track } from '../Track/Track';
import './Tracklist.css';

export class Tracklist extends React.Component {

    render() {
        return (
            <div className="Tracklist">
                {this.props.tracks.map((song, index) => {
                    return <Track
                        key={index}
                        track={song}
                        onAdd={this.props.onAdd}
                        addSongToPlaylist={this.props.addSongToPlaylist}
                    />;
                })}
            </div>
        );
    }
}