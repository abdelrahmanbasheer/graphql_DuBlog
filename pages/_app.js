import React from 'react';
import  Router  from "next/router"
import '../styles/globals.scss';
import { Layout } from '../components';
import NProgress from "nprogress"
import Head from 'next/head';
import progressbarstyles from "../styles/progressbar.scss"
function MyApp({ Component, pageProps }) {
  NProgress.configure({showSpinner:false})
  Router.events.on("routeChangeStart",()=>NProgress.start())
  NProgress.configure({showSpinner:false})
  Router.events.on("routeChangeComplete",()=>NProgress.done())
  return (
    <>
      <Head>
        <link rel='stylesheet' href={progressbarstyles}/>
        <link rel="icon" href="web-icon.png"/>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );

}

export default MyApp;