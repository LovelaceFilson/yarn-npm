import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      individuals: [
        {
          name: "Barnbara Filson",
          email: "babs@email.com",
          gen: 1
        },
        {
          name: "Lacey Filson",
          email: "lacey@email.com",
          gen: 6
        },
        {
          name: "Basky Lincoln",
          email: "basky@email.com",
          gen: 3
        },
        {
          name: "Lucci Hendrix",
          email: "lucci@email.com",
          gen: 3
        }
      ],
      name: "",
      email: "",
      gen: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen
    };
    this.setState({
      individuals: [...this.state.individuals, newUser],
      name: "",
      email: "",
      gen: ""
    });
  };

  render() {
    const individuals = this.state.individuals.map((people, index) => {
      return (
        <div key={index}>
          <h4>{people.name}</h4>
          <p>{people.email}</p>
          <p>{people.gen}</p>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="form-container">
          <h1>ADD NEW USER</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label>Gen</label>
              <input
                type="number"
                name="gen"
                value={this.state.gen}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">Save user</button>
            </div>
          </form>
        </div>
        <div className="individuals-container">
          <h1>individuals:</h1>
          {individuals}
        </div>
      </div>
    );
  }
}

export default App;

