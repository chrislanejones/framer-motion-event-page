import { Home } from "@/components/home/Home";
import Head from "next/head";

export default function home() {
  return (
    <>
      <Head>
        <title>Framer Motion Event Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home />
    </>
  );
}
