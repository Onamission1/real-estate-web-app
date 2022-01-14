//Chakra UI
import { Box } from "@chakra-ui/react";
//React Head
import Head from "next/head";
//React CJS
import { Children } from "react/cjs/react.production.min";
//NavBar
import Navbar from "./Navbar";
//Footer
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate - Your home at a click</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
