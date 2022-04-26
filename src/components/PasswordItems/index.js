import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const PasswordItems = props => {
  const {details, deleteUser} = props
  const {
    website,
    username,
    password,
    showPassword,
    isShowPasswords,
    id,
  } = details
  console.log(isShowPasswords)
  const initial = website ? website[0].toUpperCase() : ''

  const initialColorName = `initial-container ${
    initialContainerBackgroundClassNames[
      Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1)
    ]
  }`

  const onDeleteItem = () => {
    deleteUser(id)
  }

  return (
    <li className="items">
      <div className={`initial-name ${initialColorName}`}>
        <p className="initial">{initial}</p>
      </div>
      <div className="user-details-list">
        <p className="website-details">{website}</p>
        <p className="user-details">{username}</p>
        {isShowPasswords ? (
          <p className="password-details">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="password-img"
          />
        )}
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDeleteItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItems
