import { getLeaderboard } from '../utils/resultsHelper.js';

<<<<<<< HEAD
export const getLeaderboardController = (req, res) => {
  try {
    const leaderboard = getLeaderboard();
    res.json(leaderboard);
  } catch (error) {
    console.error(error);
=======
export const getLeaderboardController = async (req, res) => {
  try {
    const { courseId } = req.params;
    const leaderboard = await getLeaderboard(courseId);
    res.json(leaderboard);
  } catch (error) {
    console.error('Error retrieving leaderboard:', error);
>>>>>>> eaeaeab (Added AI ChatBot Seperate LeaderBoard for Each Course)
    res.status(500).json({ message: 'Error retrieving leaderboard' });
  }
};
