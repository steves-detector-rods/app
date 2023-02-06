import { APIContracts } from 'authorizenet';

export const createMerchantAuthenticationType = () => {
	const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
	merchantAuthenticationType.setName(process.env.AUTHORIZE_NET_API_LOGIN_KEY ?? '');
	merchantAuthenticationType.setTransactionKey(process.env.AUTHORIZE_NET_TRANSACTION_KEY ?? '');

	return merchantAuthenticationType;
};
