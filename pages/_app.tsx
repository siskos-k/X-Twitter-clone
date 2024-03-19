import Layout from "@/components/Layout";
import "../styles/globals.css";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <RegisterModal/>
  <LoginModal/>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}
