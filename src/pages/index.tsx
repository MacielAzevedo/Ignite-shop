import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/Shirt/1.png'
import camiseta2 from '../assets/Shirt/2.png'
import camiseta3 from '../assets/Shirt/3.png'
import camiseta4 from '../assets/Shirt/4.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={420} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta1} width={520} height={420} alt="" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}