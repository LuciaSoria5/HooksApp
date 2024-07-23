import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    // const user = {
    //     id: 123,
    //     name: 'Lucia Soria',
    //     email: 'luci@gmail.com'
    // }

    const [user, setUser] = useState();

  return (
    // cualquier hijo va a poder acceder a ese objeto
    <UserContext.Provider value={ { user, setUser } }>
        { children }
    </UserContext.Provider>

  )
}
