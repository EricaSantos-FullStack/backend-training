const environment = {
  MAINTENANCE: (process.env.MAINTENANCE === 'true'),
  MAX_LENGTH_RESPONSE: Number(process.env.MAX_LENGTH_RESPONSE),
  MAX_LENGTH_ORDERS_RESPONSE: Number(process.env.MAX_LENGTH_ORDERS_RESPONSE),
};
export default environment;
