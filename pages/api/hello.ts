import type { NextApiRequest, NextApiResponse } from 'next';

type HelloResponse = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<HelloResponse>) {
  res.status(200).json({ name: 'John Doe' });
}
