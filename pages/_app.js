import Head from "next/head";
//Router
import Router from "next/router";
//NProgress
import NProgress from "nprogress";
//Chakra Provider
import { ChakraProvider } from "@chakra-ui/react";

//Layout
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
