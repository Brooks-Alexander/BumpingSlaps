import React from "react";
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
      }    

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action" onAdd={this.addTrack} >+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
        this.props.addSongToPlaylist(this.props.track);
    }

    render() {
        return (
            <div className="Track">
                <div ClassName='Track-information'>
                    {/* <h3><!-- track name will go here --></h3> */}
                    {/* <p><!-- track artist will go here --> | <!-- Track album will go here --></p> */}
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {/* <button class='Track-action'><!-- + or - will go here --></button>*/}
                { this.renderAction()}
            </div>
        )
    }
}