// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export const config = {
  runtime: 'edge',
}

export default async function (req: NextApiRequest,
  res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
