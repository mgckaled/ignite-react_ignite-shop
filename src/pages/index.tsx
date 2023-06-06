import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import camiseta1 from "../assets/camisetas/1.png"
import camiseta2 from "../assets/camisetas/2.png"
import camiseta3 from "../assets/camisetas/3.png"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src={camiseta1}
          width={520}
          height={480}
          alt='Camiseta preta - Explorer'
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image
          src={camiseta2}
          width={520}
          height={480}
          alt='Camiseta preta - Ignite Aboard'
        />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 73,90</span>
        </footer>
      </Product>
      <Product>
        <Image
          src={camiseta3}
          width={520}
          height={480}
          alt='Camiseta preta - Ignite Lab'
        />

        <footer>
          <strong>Camiseta z</strong>
          <span>R$ 76,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}



