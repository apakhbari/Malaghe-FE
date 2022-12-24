import { createContext, useState } from 'react'

const UserCredentialsContext = createContext({
  userCredential: [],
  totalUserCredential: 0,
  addUserCredentials: (userToAdd) => {},
  removeUserCredentials: (userId) => {},
  removeAll: () => {},
  userIsAvailable: (userId) => {},
})

export function UserCredentialsContextProvider(props) {
  const [userCredentials, setUserCredentials] = useState([])

  function addUserCredentialsHandler(userToAdd) {
    setUserCredentials((prevUserCredentials) => {
      return prevUserCredentials.concat(userToAdd)
    })
  }

  function removeUserCredentialsHandler(userId) {
    setUserCredentials((prevUserCredentials) => {
      return prevUserCredentials.filter((user) => user.id !== userId)
    })
  }

  function removeAllHandler() {
    setUserCredentials(() => {
      return []
    })
  }

  function userIsAvailableHandler(userId) {
    return userCredentials.some((user) => user.id === userId)
  }

  const context = {
    userCredential: userCredentials,
    totalUserCredential: userCredentials.length,
    addUserCredentials: addUserCredentialsHandler,
    removeUserCredentials: removeUserCredentialsHandler,
    removeAll: removeAllHandler,
    userIsAvailable: userIsAvailableHandler,
  }

  return (
    <UserCredentialsContext.Provider value={context}>
      {props.children}
    </UserCredentialsContext.Provider>
  )
}

export default UserCredentialsContext

{
  /*
To Use:
1- wrap <UserCredentialsContextProvider> around _app.js
2- import UserCredentialsContext in desired function
2.25- userCredentialsCtx = useContext(UserCredentialsContext)
2.5- const activeUser = userCredentialsCtx.userCredentials
*/
}
