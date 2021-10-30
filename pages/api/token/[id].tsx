
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import logger from '../../../modules/app/lib/logger';
import { getTokenFromChain } from '../../../modules/nft/api/getTokenFromChain';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=120'
  )
  try {
    logger("INFO", "Fetching token json for " + id);
    const number = parseInt(id, 10);
    const item = await getTokenFromChain(number);
    res.status(200).json(item)

  } catch (e) {
    logger("ERROR", e);
    // IF it errors
    return res.status(500).json("Error fetching data");
  }
}
