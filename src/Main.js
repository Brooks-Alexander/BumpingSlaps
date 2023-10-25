import React from 'react';
import { Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import PlaylistsPage from './Pages/PlaylistsPage/PlaylistsPage';
import SlapsPage from './Pages/SlapsPage/SlapsPage';
import NowPlayingPAge from './Pages/NowPlayingPage/NowPlayingPage';
import MixerPage from './Pages/MixerPage/MixerPage';
//import { Playlist } from './Pages/Components/Playlist/Playlist';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [
        {
          name: 'Example Track Name',
          artist: 'Example Track Artist',
          album: 'Example Track Album',
          id: 1,
        },
        {
          name: 'Example Track Name 2',
          artist: 'Example Track Artist 2',
          album: 'Example Track Album 2',
          id: 2,
        },
      ],
      playlistName: 'Example Playlist',
      playlistTracks: [
        {
          name: 'Example Playlist Track Name 3',
          artist: 'Example Playlist Track Artist 3',
          album: 'Example Playlist Track Album 3',
          id: 3,
        },
        {
          name: 'Example Playlist Track Name 4',
          artist: 'Example Playlist Track Artist 4',
          album: 'Example Playlist Track Album 4',
          id: 4,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addSongToPlaylist = (track) => {
    // Use setState to update the playlistTracks array
    this.setState((prevState) => ({
      playlistTracks: [...prevState.playlistTracks, track],
    }));
  };

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find((playlistTrack) =>
      playlistTrack.id === track.id
    );

    const newTrack = this.state.playlistTracks.concat(track);
    foundTrack ? console.log('Track already exists in playlist') : this.setState({ playlistTracks: newTrack });
  }

  removeTrack(track) {
    const isPresent = this.state.playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    this.setState({ playlistTracks: isPresent });
  }

  handleRoute = route => () => {
    this.props.history.push({ pathname: route });
  };

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  }

  handleSearchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: '/SlapsPage',
        state: {
          searchText: this.state.searchText
        }
      });
    } else {
      alert(`Don't forget to enter text for music that you would like to search.`);
    }
  };

  render() {
    return (
      <>
        <Navbar bg='dark' data-bs-theme='dark'>
          <Nav className="align-items-center w-100">
            <Navbar.Brand>
              <img
                src={require('./Images/knowWhereLogo.png')}
                width="50"
                height="50"
                alt=""
              />{''}
              BumpingSlaps
            </Navbar.Brand>
            <Nav.Link onClick={this.handleRoute('/')}>Playlists</Nav.Link>
            <Nav.Link onClick={this.handleRoute('/SlapsPage')}>Slaps</Nav.Link>
            <Nav.Link onClick={this.handleRoute('/MixerPage')}>Mixer</Nav.Link>
            <Nav.Link onClick={this.handleRoute('/NowPlayingPage')}>Now Playing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="text"
              placeholder="Ya' Dig"
            />
            <Container>
              <Button
                onClick={this.handleSearchSubmit}
                variant='outline-info'
                style={{ height: '100%' }}>
                Find music
              </Button>
            </Container>
          </Form>
          {/* <Nav.Link style={{ color: 'white'}} onClick={this.handleRoute('/SignOut')}>Sign Out</Nav.Link> */}
        </Navbar>
        <Switch>
          <Route exact path="/">
            <PlaylistsPage
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onAdd={this.addTrack}
              onRemove={this.removeTrack}
              addSongToPlaylist={this.addSongToPlaylist} />
          </Route>
          <Route exact path='/SlapsPage'>
            <SlapsPage
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              addSongToPlaylist={this.addSongToPlaylist}
            />
          </Route>
          <Route exact path="/NowPlayingPage">
            <NowPlayingPAge />
          </Route>
          <Route exact path='/MixerPage'>
            <MixerPage />
          </Route>
        </Switch>
      </>
    )
  }
}

export default withRouter(Main);