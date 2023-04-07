import axios from "axios"
import Stripe from "stripe"
import Image from "next/image"
import { useState } from "react"
import { stripe } from "@/src/lib/stripe"
import { GetStaticPaths, GetStaticProps } from "next"
import { ImageContainer, ProductContainer, ProductDetail } from "@/src/styles/pages/product"

interface ProductProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string,
        defaultPriceId: string,
    }
}

export default function Product({product}: ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct () {
        try {
            setIsCreatingCheckoutSession(true)
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            })

            const {checkoutUrl} = response.data

            window.location.href = checkoutUrl
        } catch (error) {
            // Conectar com uma ferramenta de observabilidade (Datadog, Sentry)

            setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar ao checkout!')
        }
        console.log(product.defaultPriceId)
    }
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
            </ImageContainer>
            <ProductDetail>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>

                <button
                    disabled={isCreatingCheckoutSession} 
                    onClick={handleBuyProduct}
                >
                    Comprar agora
                </button>
            </ProductDetail>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps:GetStaticProps<any, {id: string}> = async({params})=> {
    //@ts-ignore
    const productId = params.id;
    
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    const formattedPrice = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        // @ts-ignore
      }).format(price.unit_amount / 100)
    

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                // @ts-ignore
                price: formattedPrice,
                description: product.description,
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1, //1 hour
    }
}