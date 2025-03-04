import { createContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {
            name: "Ravi",
            email: "raviak213@gmail.com.com",
            password: "ravi213",
            amount: 1000
        }
    ]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;