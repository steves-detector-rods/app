import { NextApiRequest, NextApiResponse } from 'next';
import { createMerchantAuthenticationType } from './authorize-net/helpers/create-merchant-authentication-type';

/**
 * WIP endpoint - cool that this is working and creating the auth stuff
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
	createMerchantAuthenticationType();

	return res.status(200).json({ message: 'Successfully authorized test' });
}
