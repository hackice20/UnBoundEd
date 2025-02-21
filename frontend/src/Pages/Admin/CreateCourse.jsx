import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import BasicInformation from "@/components/Admin/Course/BasicInfo";
import CourseContent from "@/components/Admin/Course/ContentInfo";
import CourseDetails from "@/components/Admin/Course/CourseDetails";
import CoursePreview from "@/components/Admin/Course/PreviewCard";
import PublishingChecklist from "@/components/Admin/Course/PublishingChecklist";
import { Form } from "@/components/ui/form";
import { AuthContext } from "@/context/authContext";

export default function CreateCoursePage() {
  const [thumbnail, setThumbnail] = useState(null);
  const token = sessionStorage.getItem("token");
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      youtubePlaylist: "",
      googleQuizLink: "",
      discordServerLink: "",
      price: 0,
      instructor: "",
      category: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch(`http://localhost:3000/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          youtubePlaylist: values.youtubePlaylist,
          discordServerLink: values.discordServerLink,
          price: values.price,
          thumbnail: values.thumbnail,
          instructor: user.id,
          category: values.category || "development"
        })
      })
      if (response.ok) {
        const data = await response.json();
        const id = data.course._id;
        navigate(`/admin/${id}/createQuiz`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleThumbnailChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800"
            >
              <Button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2 text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-800">
                Create New Course
              </h1>
              <p className="text-slate-600">
                Add a new course to your platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <BasicInformation form={form} />
              <CourseContent form={form} />
              <CourseDetails
                form={form}
                thumbnail={thumbnail}
                handleThumbnailChange={handleThumbnailChange}
                setThumbnail={setThumbnail}
              />
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Create Course
                </Button>
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
              </div>
            </form>
          </Form>

          {/* Preview Card */}
          <div className="space-y-6">
            <CoursePreview
              thumbnail={thumbnail}
              title={form.watch("title")}
              description={form.watch("description")}
              instructor={form.watch("instructor")}
              price={form.watch("price")}
            />
            <PublishingChecklist
              title={form.watch("title")}
              description={form.watch("description")}
              thumbnail={thumbnail}
              price={form.watch("price")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
