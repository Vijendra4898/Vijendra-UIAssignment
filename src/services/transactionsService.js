import transactionsData from '../data/transactions.json';

/**
 * Simulates an API call to fetch transactions data.
 * @returns {Promise<Array>} List of transactions
 */
export const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactionsData);
    }, 1000); // Simulate network latency
  });
};
