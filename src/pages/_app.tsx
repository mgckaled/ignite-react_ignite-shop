import { globalStyles } from "@/styles/global"
import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"
import Image from "next/image"

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

globalStyles()

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Container>
        <Header>
          <Image
            src={logoImg}
            alt='logo app image: Ignite Shop'
            width={130}
            height={52}
            priority
          />
        </Header>

        <Component {...pageProps} />
      </Container>
    </>
  )
}
