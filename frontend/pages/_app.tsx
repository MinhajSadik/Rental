import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "../styles/slider.css";
import "../styles/modalanimation.css";
import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import ApplicationContext from "@/context/ApplicationContext";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);


  return (
    <ApplicationContext>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </ApplicationContext>
  );
}