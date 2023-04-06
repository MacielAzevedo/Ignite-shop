import { stripe } from "@/src/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetail } from "@/src/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Stripe from "stripe"

interface ProductProps {
    product: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string,
    }
}

export default function Product({product}: ProductProps) {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
            </ImageContainer>
            <ProductDetail>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>

                <button>
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
            }
        },
        revalidate: 60 * 60 * 1, //1 hour
    }
}