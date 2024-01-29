import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../utils/userContext";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
        LoggedIn User
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </userContext.Consumer>
          </div>
        <h2>This is a food delivery application.</h2>
        <UserClass  />
      </div>
    );
  }
}

export default About;
