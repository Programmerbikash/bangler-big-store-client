import store from "@/app/store";
import "@/styles/globals.css";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
// import { categoryApi } from "./category/categorySlice";
// import '@/styles/Banner.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={categoryApi}> */}
        <Component {...pageProps} />
      {/* </ApiProvider> */}
    </Provider>
  );
}
