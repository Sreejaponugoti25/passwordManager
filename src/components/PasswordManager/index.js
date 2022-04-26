import {Component} from 'react'
import {v4 as uuid4} from 'uuid'

import PasswordItems from '../PasswordItems'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isShowPasswords: false,
  }

  onChangeWebsite = event => {
    const {value} = event.target
    this.setState({website: value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = event => {
    console.log(event.target.checked)
    const {isShowPasswords} = this.state
    this.setState({isShowPasswords: !isShowPasswords})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password, isShowPasswords} = this.state

    const newPassword = {
      id: uuid4(),
      website,
      username,
      password,
      isShowPasswords,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  deleteUser = deleteId => {
    const {passwordList} = this.state
    const filteredUser = passwordList.filter(
      eachUser => eachUser.id !== deleteId,
    )
    this.setState({passwordList: filteredUser})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {website, username, password, passwordList, searchInput} = this.state
    const searchFilter = passwordList.filter(eachItem =>
      eachItem.username.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-bg-container">
            <div className="password-form-container">
              <h1 className="heading">Add New Password</h1>
              <form className="form" onSubmit={this.onAddPassword}>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-logo"
                  />
                  <hr className="line" />
                  <input
                    value={website}
                    type="text"
                    placeholder="Enter website"
                    className="input"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-logo"
                  />
                  <hr className="line" />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="website-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website-logo"
                  />
                  <hr className="line" />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="btn-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
          <div className="password-bottom-container">
            <div className="password-search-container">
              <div className="password-count-card">
                <h1 className="heading">Your Passwords</h1>
                <div className="count-container">
                  <p className="count">{passwordList.length}</p>
                </div>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website-logo"
                />
                <hr className="line2" />
                <input
                  type="search"
                  placeholder="Search"
                  className="input"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="show-password-container">
              <button
                className="show-password-button"
                type="button"
                onClick={this.showPassword}
              >
                <input type="checkbox" className="radio-box" id="password" />
              </button>
              <label className="heading" htmlFor="password">
                Show Passwords
              </label>
            </div>
            {searchFilter.length === 0 ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="error-image"
                />
                <p className="error-message">No Passwords</p>
              </div>
            ) : (
              <ul className="list-items">
                {searchFilter.map(eachItem => (
                  <PasswordItems
                    details={eachItem}
                    key={eachItem.id}
                    deleteUser={this.deleteUser}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
