import { stripe } from '@/src/lib/stripe';
import Image from 'next/image';
import {
  Button,
  ImageContainer,
  SucessContainer,
} from '@/src/styles/pages/sucess';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import Head from 'next/head';

interface SucessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Sucess({ customerName, product }: SucessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SucessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Button href="/">Voltar ao catálogo</Button>
      </SucessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_Id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  // @ts-ignore
  const customerName = session.customer_details.name;
  // @ts-ignore
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
