//app.tsx
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from'react';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'aos/dist/aos.css'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
  );
}