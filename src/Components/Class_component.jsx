import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=tqm5JsRdsRQfNq5XbKKtmywO3WaciMx4")
      .then((res) => res.json())
      .then((users) => {
        console.log("users:", users.results);
        this.setState({ users: users.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>My Movies</h1>
        <hr />
        
        <div>
          {this.state.users.map((user) => (
            <div>
                <img src={user.multimedia?.src} />
                <p>{user.byline}</p>
              <p>{user.critics_pick}</p>
              <p>{user.display_title}</p>
              <p>{user.headline}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Users;
