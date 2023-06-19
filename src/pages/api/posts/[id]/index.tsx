import { getPathParam } from '../../../../utilities/array-handler'
import { getPostCollection } from '@/utilities/data-handler';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query
    let posts: Array<any> = await getPostCollection();
    let post = posts.find((post: any) => post.id == id)

    if (!post) {
      throw new Error("Post not found")
    }
    
    res.status(200).json({ post })
  } catch (error: any) {
    res.status(400).json({ error: { message: error.message } })
  }
}
