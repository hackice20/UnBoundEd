# UnBoundEd - Unbounded Education

## Brief Project Description

UnBoundEd (Unbounded Education) – Learning without limits.
In today’s world, access to quality education remains a challenge for students in areas with
low-resource devices and limited network connectivity. Our solution is a lightweight, AI-
powered online education platform designed to function seamlessly in such environments.

Key Features:

- ✅ Offline Support – Students can download lessons (text & video) and sync progress when
online.
- ✅ AI-Powered Assistance – Smart AI tutors provide personalized learning recommendations
and instant Q&A support.
- ✅ Lightweight UI & Optimized Performance – Minimalist design ensures smooth operation on
low-end devices and slow networks.
- ✅ Micro-Certifications & Leaderboard – Learners earn digital certifications and compete in a
gamified ranking system.
- ✅ Learn-to-Earn Model – Students receive discounts or rewards for course completions,
making education more affordable.
- ✅ Community Support – Peer-to-peer learning, mentor matching, and discussion forums
enhance collaboration.

Our platform ensures inclusive and scalable learning, empowering students with minimal data
consumption and maximum engagement. 🚀

---
## Key Features to Implement:

1. **User Authentication and Authorization:**
   - User registration and login.
   - Role-based access control (e.g., student, mentor).

2. **Offline Support:**
   - Ability for students to download lessons (text and video).
   - Data synchronization when the device is online.

3. **AI-Powered Assistance:**
   - Integration of AI tutors for personalized learning recommendations.
   - Instant Q&A support using AI.

4. **Lightweight UI & Optimized Performance:**
   - Minimalist design for smooth operation on low-end devices.
   - Usage of TailwindCSS for a lightweight UI.
   - Performance optimization for slow networks.

5. **Micro-Certifications & Leaderboard:**
   - Digital certifications upon course completion.
   - Gamified ranking system to encourage competition.

6. **Learn-to-Earn Model:**
   - Reward system for course completions (e.g., discounts, points).

7. **Community Support:**
   - Peer-to-peer learning platforms.
   - Mentor matching systems.
   - Discussion forums for collaboration.

8. **Courses & Lessons:**
   - Video lectures, PDFs, downloadable notes, quizzes.
     
---

## Resources and Libraries:

1. **User Authentication and Authorization:**
   - **Passport.js:** A flexible authentication middleware for Node.js, supporting various strategies including local authentication and OAuth.
   - **JSON Web Token (JWT):** For secure token-based authentication.

2. **Offline Support:**
   - **PouchDB:** A JavaScript database that enables offline storage and synchronization with a CouchDB-compatible server.
   - **Service Workers:** Utilize service workers to cache assets and manage offline capabilities.

3. **AI-Powered Assistance:**
   - **Claude AI API:** Integrate the Claude AI API for natural language understanding and personalized responses.
   - **TensorFlow.js:** For running machine learning models directly in the browser.

4. **Lightweight UI & Optimized Performance:**
   - **React:** A library for building user interfaces, known for its efficiency and flexibility.
   - **React Lazy Load:** To defer loading of off-screen components, improving initial load performance.
   - **Lighthouse:** A tool for auditing performance and accessibility, guiding optimizations.

5. **Micro-Certifications & Leaderboard:**
   - **Badgr API:** For issuing and managing digital badges and micro-certifications.
   - **Leaderboard.js:** To implement and manage gamified leaderboards.

6. **Learn-to-Earn Model:**
   - **Incentive Program Module:** Custom development of a module to manage rewards and incentives, possibly integrating with existing e-commerce platforms for discounts.

7. **Community Support:**
   - **Discourse:** An open-source discussion platform that can be integrated for forums.
   - **Socket.io:** For real-time communication features like chat and notifications.
   - **Mentorship Matching Algorithm:** Develop a custom algorithm to match mentors and mentees based on preferences and expertise.
   
---

## Backend Stack & Libraries

| Feature                    | Tech Stack / Library |
|----------------------------|----------------------|
| **Authentication**         | Passport.js, JWT, bcrypt |
| **Database**               | MongoDB, Mongoose |
| **API Framework**          | Express.js |
| **AI Chatbot**             | Claude AI API |
| **Leaderboard System**     | Custom Logic + MongoDB Aggregation |
| **Video Storage**          | Youtube |
| **Certificate Generation** | pdfkit, node-html-pdf |
| **Offline Syncing**        | PouchDB, Workbox (Service Workers) |
| **Community Features**     | Socket.io, Discourse Integration |
| **Gamification & Rewards** | Custom Rewards Logic |

---

## Backend Project Structure

```
backend/
├── config/
│   ├── db.js                # Database Connection (MongoDB)
│   ├── cloudStorage.js      # Cloud Storage Config (AWS/GCS)
│   ├── aiConfig.js          # Claude AI API Config
│   ├── auth.js              # JWT Authentication Setup
│   ├── certConfig.js        # Certificate Generation Setup
│   ├── leaderboardConfig.js # Leaderboard Logic
│   ├── offlineMode.js       # Offline Storage Config
├── controllers/
│   ├── userController.js    # User Authentication, Profile Management
│   ├── courseController.js  # Course CRUD (Videos, Notes)
│   ├── aiController.js      # AI Chatbot, Recommendations
│   ├── certController.js    # Certificate Issuance
│   ├── leaderboardController.js # Leaderboard Rankings
│   ├── offlineController.js # Offline Download Syncing
│   ├── communityController.js # Peer Discussions, Mentorship
├── middleware/
│   ├── authMiddleware.js    # Role-based Access (Student/Mentor/Admin)
│   ├── errorHandler.js      # Global Error Handling
│   ├── rateLimiter.js       # API Rate Limiting
├── models/
│   ├── User.js              # User Schema (Students, Mentors)
│   ├── Course.js            # Course Schema (Videos, Notes, Quizzes)
│   ├── AIChat.js            # AI Chat History
│   ├── Certificate.js       # Certificate Schema (Course Completion)
│   ├── Leaderboard.js       # Points & Ranking System
│   ├── Discussion.js        # Community Discussions
│   ├── MentorMatch.js       # Mentor Matching Logic
├── routes/
│   ├── userRoutes.js        # /api/users (Auth, Profile)
│   ├── courseRoutes.js      # /api/courses (Videos, Notes)
│   ├── aiRoutes.js          # /api/ai (AI Chat, Recommendations)
│   ├── certRoutes.js        # /api/certificates (Generate, Verify)
│   ├── leaderboardRoutes.js # /api/leaderboard (Ranks)
│   ├── offlineRoutes.js     # /api/offline (Download, Sync)
│   ├── communityRoutes.js   # /api/community (Discussions, Mentorship)
├── utils/
│   ├── certificateHelper.js # PDF Certificate Generator
│   ├── leaderboardHelper.js # Score Calculation Logic
│   ├── aiHelper.js          # Claude API Wrapper
│   ├── storageHelper.js     # Cloud Storage Helper (AWS/GCS)
├── .env                     # Environment Variables (DB, API Keys)
├── package.json             # Dependencies
├── server.js                # Main Express App Setup
```
---

## Backend Flow (Data Flow Explanation)

1. **User Signup/Login**
   - Users register & log in using JWT-based authentication.
   - Role-based access (Student/Mentor/Admin) is managed.

2. **Courses & Content**
   - Admin uploads video courses, notes (Stored on Youtube).
   - Students access video courses & downloadable PDFs.
   - Offline mode enables downloads for later viewing.

3. **AI-Powered Assistance**
   - Students ask questions → Sent to Claude AI API.
   - AI returns answers + personalized recommendations.

4. **Gamification & Leaderboard**
   - Students earn points by completing quizzes/courses.
   - Leaderboard updates ranks based on learning activity.

5. **Certificates & Rewards**
   - On course completion, a PDF certificate is generated.
   - Students receive rewards (discounts, badges, points).

6. **Community & Mentorship**
   - Peer discussions in forums (Discourse).
   - Mentor-student matching for guidance.

7. **Offline Support**
   - Course materials are downloadable.
   - Progress syncs once online.

---

