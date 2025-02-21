import express from 'express';
import { getLeaderboardController } from '../controllers/leaderboardController.js';

const router = express.Router();

<<<<<<< HEAD
router.get('/', getLeaderboardController);
=======
// Updated route to include courseId as a route parameter.
router.get('/:courseId', getLeaderboardController);
>>>>>>> eaeaeab (Added AI ChatBot Seperate LeaderBoard for Each Course)

export default router;
