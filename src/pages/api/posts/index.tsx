// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPostCollection } from '@/utilities/data-handler';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let posts: Array<any> = []

  try {
    posts = await getPostCollection();
  } catch (error) {
    console.error(error);
  }
  res.status(200).json({ posts })
}
