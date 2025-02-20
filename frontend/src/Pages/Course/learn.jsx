"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  MenuIcon,
  X,
  CheckCircle,
  PlayCircle,
  MessageCircle,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseLearningPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentVideoId, setCurrentVideoId] = useState("dQw4w9WgXcQ");

  const course = {
    title: "Complete Web Development Bootcamp",
    progress: 35,
    totalLessons: 48,
    completedLessons: 17,
    sections: [
      {
        id: 1,
        title: "Getting Started with Web Development",
        lessons: [
          {
            id: "lesson1",
            title: "Introduction to Web Development",
            duration: "15:00",
            videoId: "dQw4w9WgXcQ",
            completed: true,
          },
          {
            id: "lesson2",
            title: "Setting Up Your Development Environment",
            duration: "20:00",
            videoId: "dQw4w9WgXcQ",
            completed: true,
          },
          {
            id: "lesson3",
            title: "Understanding HTML Basics",
            duration: "25:00",
            videoId: "dQw4w9WgXcQ",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "CSS Fundamentals",
        lessons: [
          {
            id: "lesson4",
            title: "CSS Selectors and Properties",
            duration: "30:00",
            videoId: "dQw4w9WgXcQ",
            completed: false,
          },
          {
            id: "lesson5",
            title: "Flexbox and Grid Layout",
            duration: "45:00",
            videoId: "dQw4w9WgXcQ",
            completed: false,
          },
          {
            id: "lesson6",
            title: "Responsive Design Principles",
            duration: "35:00",
            videoId: "dQw4w9WgXcQ",
            completed: false,
          },
        ],
      },
    ],
    resources: {
      quizLink: "https://forms.google.com/...",
      discordLink: "https://discord.gg/...",
    },
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLessonClick = (videoId) => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className="flex h-screen bg-[#FFFBF5]">
      {/* Sidebar */}
      <div
        className={`flex flex-col ${
          sidebarOpen ? "w-64" : "w-0"
        } transition-width duration-300`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link to="/courses" className="flex items-center gap-2">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-semibold text-slate-800">
              Back to Courses
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex h-[calc(100vh-4rem)] flex-col">
          <div className="border-b p-4">
            <h2 className="mb-2 font-semibold text-slate-800">
              {course.title}
            </h2>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-slate-600">
                {course.completedLessons} of {course.totalLessons} lessons
              </span>
              <span className="font-medium text-purple-600">
                {course.progress}%
              </span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>

          <ScrollArea className="flex-1">
            <Accordion type="single" collapsible className="w-full">
              {course.sections.map((section) => (
                <AccordionItem key={section.id} value={`section-${section.id}`}>
                  <AccordionTrigger className="px-4 text-sm hover:no-underline">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1 p-2">
                      {section.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => handleLessonClick(lesson.videoId)}
                          className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm hover:bg-slate-50"
                        >
                          {lesson.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <PlayCircle className="h-4 w-4 text-slate-400" />
                          )}
                          <div className="flex-1">
                            <p className="text-slate-700">{lesson.title}</p>
                            <p className="text-xs text-slate-500">
                              {lesson.duration}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link to={course.resources.quizLink} target="_blank">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Take Quiz
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link to={course.resources.discordLink} target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join Discord
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-[80vh]">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between border-b bg-white px-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden md:inline-flex">
              Currently watching
            </Badge>
            <span className="text-sm font-medium text-slate-800">
              Understanding HTML Basics
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              Next
            </Button>
          </div>
        </div>

        {/* Video Player */}
        <div className="aspect-video w-[60vw] bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=0&rel=0`}
            title="Course Video"
            className="object-cover w-[60vw] h-full" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <Separator className="my-3" />
        {/* Video Information */}
        <div className="p-6">
          <div className="mb-6">
            <h1 className="mb-2 text-2xl font-bold text-slate-800">
              Understanding HTML Basics
            </h1>
            <p className="text-slate-600">
              Learn the fundamental building blocks of HTML and how to structure
              your web pages effectively. This lesson covers elements,
              attributes, and best practices for writing clean HTML code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
