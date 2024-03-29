import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {/* Sidebar */}
      <Sidebar />
      {/* body */}
    </>
  );
}
