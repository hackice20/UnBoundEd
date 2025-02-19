// controllers/courseController.js
import Course from '../models/Course.js';

// Admin: Create a new course
export const createCourse = async (req, res) => {
  try {
    const { title, description, youtubePlaylist, googleQuizLink, discordServerLink } = req.body;
    const newCourse = new Course({ title, description, youtubePlaylist, googleQuizLink, discordServerLink });
    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Public: Get list of all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Public: Get course details by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Update a course
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course updated successfully', course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Delete a course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Public: Get certificate details for a course
// Expects query parameters: username and courseName
export const getCertificate = async (req, res) => {
  try {
    const { username, courseName } = req.query;
    if (!username || !courseName) {
      return res.status(400).json({ message: 'username and courseName are required' });
    }
    const course = await Course.findOne({ title: courseName });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    // Return the minimal data needed for the certificate
    res.json({ username, courseName: course.title });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
