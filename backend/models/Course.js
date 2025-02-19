// models/Course.js
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    youtubePlaylist: { type: String },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    discordServerLink: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('Course', courseSchema);
