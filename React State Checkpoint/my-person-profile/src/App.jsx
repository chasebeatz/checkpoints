import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initializing the state
    this.state = {
      person: {
        fullName: "Akinola Mayowa",
        bio: "A passionate software developer",
        imgSrc: "https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_640.jpg", // You can replace with an actual image URL
        profession: "Software Engineer"
      },
      shows: false,
      intervalId: null,  // To store the setInterval ID for clearing it later
      timeElapsed: 0 // To track time since the component mounted
    };
  }

  // Toggle the shows state when the button is clicked
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  // Start the timer when the component is mounted
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000); // Update every second
    this.setState({ intervalId });
  }

  // Clean up the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profile of {fullName}</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <p><strong>Bio:</strong> {bio}</p>
            <p><strong>Profession:</strong> {profession}</p>
          </div>
        )}

        <p>Time since component mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
