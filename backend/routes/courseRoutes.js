// routes/courseRoutes.js
import express from 'express';
import { createCourse, getCourses, getCourseById, updateCourse, deleteCourse, purchaseCourse, rateCourse } from '../controllers/courseController.js';
import { authenticateToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/:id', getCourseById);

// User routes
router.post('/:id/purchase', authenticateToken, purchaseCourse);
router.post('/:id/rate', authenticateToken, rateCourse);


// Admin-only routes
router.post('/', authenticateToken, isAdmin, createCourse);
router.put('/:id', authenticateToken, isAdmin, updateCourse);
router.delete('/:id', authenticateToken, isAdmin, deleteCourse);

export default router;
