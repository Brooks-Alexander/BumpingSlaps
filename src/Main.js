import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PlaylistsPage from './Pages/PlaylistsPage/PlaylistsPage';
import SlapsPage from './Pages/SlapsPage/SlapsPage';
import NowPlayingPage from './Pages/NowPlayingPage/NowPlayingPage';
import MixerPage from './Pages/MixerPage/MixerPage';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import {Spotify} from './util/Spotify';

class Main extends Component {
 constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      playlistTracks: [],
      search: '',
      searchResults: []
    };
 }

 addTrack = (track) => {
   if (this.state.playlistTracks.some(e => e.id === track.id)) {
     return;
    }
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
 }

 removeTrack = (track) => {
  this.setState(prevState => {
    let tracks = prevState.playlistTracks.filter(e => e.id !== track.id);
    return { playlistTracks: tracks };
  });
}

addSongToPlaylist = (track) => {
  let trackURIs = this.state.playlistTracks.map(t => t.uri);
  trackURIs.push(track.uri);
  this.setState({ playlistTracks: trackURIs });
}

 updatePlaylistName = (e) => {
    this.setState({ playlistName: e.target.value });
 }

 savePlaylist = () => {
  let trackURIs = this.state.playlistTracks.map(track => track.uri);
  Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
    this.setState({ playlistName: '', playlistTracks: [] });
  });
}

 handleRoute = (route) => {
    this.props.history.push(route);
 }

 handleTermChange = (e) => {
    this.setState({ search: e.target.value });
 }

 search = async () => {
    let response = await Spotify.search(this.state.search);
    this.setState({ searchResults: response.tracks.items });
 }

 handleSubmitSearch = (e) => {
    e.preventDefault();
    this.search();
 }

 render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Jammming</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/SlapsPage">Slaps</Nav.Link>
          <Nav.Link as={Link} to="/MixerPage">Mixer</Nav.Link>
          <Nav.Link as={Link} to="/NowPlayingPage">Now Playing</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <FormControl
              onChange={this.handleTermChange}
              value={this.state.search}
              type="text"
              placeholder="Ya' Dig"
            />
            <Container>
              <Button
                onClick={this.handleSubmitSearch}
                variant='outline-info'
                style={{ height: '100%' }}>
                Find music
              </Button>
            </Container>
          </Form>
          <Nav.Link style={{ color: 'white'}} onClick={() => this.handleRoute('/SignOut')}>Sign Out</Nav.Link>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<PlaylistsPage
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            updatePlaylistName={this.updatePlaylistName}
            savePlaylist={this.savePlaylist}
            removeTrack={this.removeTrack}
            />}
          />
          <Route path="/SlapsPage" element={<SlapsPage searchResults={this.state.searchResults} addSongToPlaylist={this.addSongToPlaylist} />}
          />
          <Route path="/MixerPage" element={<MixerPage searchResults={this.state.searchResults} addTrack={this.addTrack} removeTrack={this.removeTrack} />}
          />
          <Route path="/NowPlayingPage" element={<NowPlayingPage searchResults={this.state.searchResults} addTrack={this.addTrack} removeTrack={this.removeTrack} />}
          />
        </Routes>
      </Router>
    );
 }
}

export default Main;