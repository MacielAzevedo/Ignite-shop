import { ImageContainer, ProductContainer, ProductDetail } from "@/src/styles/pages/product"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetail>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis facilis placeat quae laboriosam quibusdam nemo 
                    non dolorem excepturi mollitia repudiandae adipisci a 
                    suscipit impedit blanditiis reprehenderit, eligendi illum, 
                    nobis minima!
                </p>

                <button>
                    Comprar agora
                </button>
            </ProductDetail>
        </ProductContainer>
    )
}