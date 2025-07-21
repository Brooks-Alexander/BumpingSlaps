import React from "react";
import { Track } from '../Track/Track';
import './SongList.css';

export class SongList extends React.Component {

    render() {
        return (
            <div className="SongList">
                {this.props.tracks.map((song, index) => {
                    return <Track
                        key={index}
                        track={song}
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={false}
                        addSongToPlaylist={this.props.addSongToPlaylist}
                    />;
                })}
            </div>
        );
    }
}