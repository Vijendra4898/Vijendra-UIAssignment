/**
 * Calculates reward points for a given amount.
 * @param {number} amount - Transaction amount
 * @returns {number} Reward points earned
 */

export const calculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += 2 * (amount - 100);
    amount = 100;
  }
  if (amount > 50) {
    points += 1 * (amount - 50);
  }
  return points;
};

/**
 * Aggregates reward points by month and calculates totals.
 * @param {Array} transactions - List of customer transactions
 * @returns {Object} Aggregated rewards
 */
export const aggregateRewards = (transactions) => {
  const rewardsByMonth = {};
  let totalPoints = 0;

  transactions.forEach(({ date, amount }) => {
    const month = new Date(date).toLocaleString('default', { month: 'short' });
    const points = calculatePoints(amount);

    if (!rewardsByMonth[month]) {
      rewardsByMonth[month] = 0;
    }
    rewardsByMonth[month] += points;
    totalPoints += points;
  });

  return { rewardsByMonth, totalPoints };
};
