import '../styles/global.css';
import { useProvideAuth } from "../hooks";
import { AuthContext } from '../contexts';

export default function App({ Component, pageProps }) {

    const auth = useProvideAuth();

    return (
    <AuthContext.Provider value={auth}>
        <Component {...pageProps} />
    </AuthContext.Provider>
    );
}