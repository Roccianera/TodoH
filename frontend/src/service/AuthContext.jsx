import { createContext,useState,useContext} from "react";


const AuthContext = createContext();



export function AuthProvider({children}) {

    const [user,setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        //TODO implent API call to get user data
        localStorage.setItem("user",JSON.stringify(userData));
    }


    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )


}





export function useAuth(){
    return useContext(AuthProvider);
}