import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "./app/store";
// import '@/styles/Banner.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
}
