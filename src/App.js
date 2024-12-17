import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './services/transactionsService';
import { aggregateRewards } from './utils/rewardCalculator';
import CustomerTable from './Components/CustomerTable';
import LoadingSpinner from './Components/LoadingSpinner';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        if (Array.isArray(data)) {
          const processedData = data.map((customer) => ({
            name: customer.name,
            rewards: aggregateRewards(customer.transactions),
          }));
          setCustomers(processedData);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Rewards Program</h1>
      {loading ? <LoadingSpinner /> : <CustomerTable customers={customers} />}
    </div>
  );
};

export default App;
