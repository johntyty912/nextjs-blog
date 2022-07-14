import "../styles/global.css";
import { useProvideAuth } from "../hooks";
import { AuthContext } from "../contexts";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
