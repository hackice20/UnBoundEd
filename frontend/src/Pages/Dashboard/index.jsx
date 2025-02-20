import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, Search, Star, PlayCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CourseCard from "@/components/Course/CourseCard";
import { AuthContext } from "@/context/authContext";

export default function DashboardPage() {
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  
  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      image:
        "https://res.cloudinary.com/drn8ou2tw/image/upload/v1739958471/Code_With_Harry_-_Sigma_Batch_ai0aem.jpg",
      lastAccessed: "2 days ago",
    },
    {
      id: 2,
      title: "Introduction to Physics",
      instructor: "Prof. Michael Chen",
      progress: 32,
      totalLessons: 18,
      completedLessons: 6,
      image:
        "https://res.cloudinary.com/drn8ou2tw/image/upload/v1739958471/Code_With_Harry_-_Sigma_Batch_ai0aem.jpg",
      lastAccessed: "5 days ago",
    },
    {
      id: 3,
      title: "World History",
      instructor: "Dr. Emily Williams",
      progress: 89,
      totalLessons: 30,
      completedLessons: 27,
      image:
        "https://res.cloudinary.com/drn8ou2tw/image/upload/v1739958471/Code_With_Harry_-_Sigma_Batch_ai0aem.jpg",
      lastAccessed: "1 day ago",
    },
  ];

  const fetchRecommendedCourses = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/courses");

      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = await response.json();
      console.log(data);
      setRecommendedCourses(data);
    } catch (error) {
      console.error("Error fetching recommended courses:", error);
    }
  };

  useEffect(() => {
    fetchRecommendedCourses();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#FFFBF5]">
      {/* Main Content */}
      <main className="ml-4 flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">My Dashboard</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input placeholder="Search courses..." className="w-64 pl-9" />
          </div>
        </div>

        {/* Enrolled Courses */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">
            Enrolled Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-slate-800">
                    {course.title}
                  </h3>
                  <p className="mb-3 text-sm text-slate-600">
                    {course.instructor}
                  </p>
                  <div className="mb-3">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-600">
                        {course.completedLessons} of {course.totalLessons}{" "}
                        lessons
                      </span>
                      <span className="font-medium text-purple-600">
                        {course.progress}%
                      </span>
                    </div>
                    {/* <Progress value={course.progress} className="h-2" /> */}
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Last accessed {course.lastAccessed}
                    </span>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => navigate(`/course/${course.id}`)}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Courses */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-slate-800">
            Recommended Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendedCourses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} id={course.id} title={course.title} instructor={course.instructor} rating={course.rating} price={course.price} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
