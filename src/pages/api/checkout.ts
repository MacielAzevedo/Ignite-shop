import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler  (req:NextApiRequest, res:NextApiResponse) {
  const priceId = 'price_1MtahrIjbLH3VtJT5kuacZsI'
  const successUrl = `${process.env.NEXT_URL}/sucess`
  const canceUrl = `${process.env.NEXT_URL}/`

  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: canceUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
  })

  return res.status(201).json({
    checkoutId: checkoutSession.url
  })
}