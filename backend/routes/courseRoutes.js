// routes/courseRoutes.js
import express from 'express';
import { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/courseController.js';
import { authenticateToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/:id', getCourseById);

// Admin-only routes
router.post('/', authenticateToken, isAdmin, createCourse);
router.put('/:id', authenticateToken, isAdmin, updateCourse);
router.delete('/:id', authenticateToken, isAdmin, deleteCourse);

export default router;
