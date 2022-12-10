import type { NextApiRequest, NextApiResponse } from 'next';

type PostResponse = {
  date: string;
  title: string;
  body: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<PostResponse>) {
  const { slug } = req.query;

  res.status(200).json({
    date: new Date().toLocaleDateString(),
    title: `${slug} from API`,
    body: 'Some text from API',
  });
}
