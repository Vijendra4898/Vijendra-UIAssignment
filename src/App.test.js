
import { calculatePoints, aggregateRewards } from './utils/rewardCalculator';

describe('calculatePoints', () => {
  it('should calculate correct points for a $120 purchase', () => {
    const amount = 120;
    const points = calculatePoints(amount);
    expect(points).toBe(90); // Expected 90 points
  });

  it('should calculate correct points for a $75 purchase', () => {
    const amount = 75;
    const points = calculatePoints(amount);
    expect(points).toBe(25); // Expected 25 points
  });

  it('should calculate correct points for a $200 purchase', () => {
    const amount = 200;
    const points = calculatePoints(amount);
    expect(points).toBe(250); // Expected 250 points
  });

  it('should return 0 points for an amount under $50', () => {
    const amount = 50;
    const points = calculatePoints(amount);
    expect(points).toBe(0); // Expected 0 points for less than $50
  });
});

describe('aggregateRewards', () => {
  it('should aggregate correct rewards for John Doe', () => {
    const customer = {
      customerId: "1",
      name: "John Doe",
      transactions: [
        { date: "2024-10-01", amount: 120 },
        { date: "2024-10-15", amount: 75 },
        { date: "2024-11-02", amount: 200 }
      ]
    };

    const result = aggregateRewards(customer.transactions);
    expect(result.rewardsByMonth).toEqual({
      Oct: 115, // 90 + 25 points from October transactions
      Nov: 250 // 250 points from November transaction
    });
    expect(result.totalPoints).toBe(365); // Expected total points: 115 + 250 = 365
  });


});
