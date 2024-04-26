import { Component } from 'react';
import './index.css';

import { TiTickOutline } from 'react-icons/ti';
import { TiTimesOutline } from 'react-icons/ti';

class PV extends Component {
  state = {
    username: '',
    password: '',
    countCheck: false,
    capitalCheck: false,
    lowerCheck: false,
    numCheck: false,
  };

  onPassEntry(event) {
    let text = event.target.value;
    this.setState({ password: text });

    this.onValidatePass();
  }

  onValidatePass() {
    let { password } = this.state;

    password.length >= 8
      ? this.setState({ countCheck: true })
      : this.setState({ countCheck: false });

    for (let i = 0; i < password.length; i++) {
      let character = password.charCodeAt(i);

      if (character >= 97 && character <= 122) {
        this.setState({ lowerCheck: true });
      } else {
        this.setState({ lowerCheck: false });
      }

      if (character >= 65 && character <= 90) {
        this.setState({ capitalCheck: true });
      } else {
        this.setState({ capitalCheck: false });
      }
    }
  }

  onUserEntry(event) {
    let text = event.target.value;
    this.setState({ username: text });
  }

  render() {
    let { username, password } = this.state;

    return (
      <div className="bg-con">
        <h1 className="app-title">Password Validator</h1>
        <div className="content-con">
          <div className="validity-con">
            <form onSubmit="validate()">
              <label htmlFor="userInput">Username</label>
              <input
                value={username}
                onChange={onUserEntry}
                id="userInput"
                type="text"
              />

              <label htmlFor="passInput">Password</label>
              <input
                value={password}
                onChange={onPassEntry}
                id="passInput"
                type="text"
              />

              <button type="submit">Validate Password</button>
            </form>

            <div className="req-con">
              <h2>Password must contain the following:</h2>
              <hr />
              <ul>
                <li>
                  <TiTimesOutline /> Eight characters.
                </li>
                <li>
                  <TiTickOutline /> One capital letter.
                </li>
                <li>
                  <TiTimesOutline /> One lowercase letter.
                </li>
                <li>
                  <TiTimesOutline /> One number.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PV;
