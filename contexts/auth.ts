import { createContext } from "react";
import { Auth } from '../entities/auth';

const AuthContext = createContext<Auth>(null);

export default AuthContext;