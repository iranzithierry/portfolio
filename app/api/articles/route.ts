import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    req.statusCode = 200


}
export async function GET(request: Request) {
    return "hello world"
}