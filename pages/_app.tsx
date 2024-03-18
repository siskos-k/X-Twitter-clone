import Layout from "@/components/Layout";
import "../styles/globals.css";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  {/* <Modal actionLabel="Submit" title="Test Modal"isOpen /> */}
  <LoginModal/>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}
