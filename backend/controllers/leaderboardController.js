import { getLeaderboard } from '../utils/resultsHelper.js';

export const getLeaderboardController = (req, res) => {
  try {
    const leaderboard = getLeaderboard();
    res.json(leaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving leaderboard' });
  }
};
