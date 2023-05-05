import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

const Page: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <div className={`${manrope.className}`}>{children}</div>
    </>
  );
};

export default Page;
