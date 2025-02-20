import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CoursePreview from "@/components/Admin/Course/PreviewCard";
import PublishingChecklist from "@/components/Admin/Course/PublishingChecklist";
import { useForm } from "react-hook-form";
import { GraduationCap, Upload, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CreateCoursePage() {
  const [thumbnail, setThumbnail] = useState(null);

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

  function onSubmit(values) {
    console.log(values);
    // Handle form submission
  }

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
              <Button className="bg-purple-600 hover:bg-purple-700">
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
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>
                    Provide the basic details about your course
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter course title" {...field} />
                        </FormControl>
                        <FormDescription>
                          Make it clear and compelling
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter course description"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Describe what students will learn
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="development">
                              Development
                            </SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="music">Music</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the most relevant category
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Course Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Content</CardTitle>
                  <CardDescription>
                    Add your course content and resources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="youtubePlaylist"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>YouTube Playlist URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://youtube.com/playlist?list=..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Link to your course video playlist
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="googleQuizLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Google Quiz Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://forms.google.com/..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Link to your course assessments
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="discordServerLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discord Server Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://discord.gg/..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Link to your course community
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Course Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                  <CardDescription>
                    Set your course pricing and instructor details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price (INR)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="299"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number.parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormDescription>Set your course price</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="instructor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instructor Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormDescription>
                          Name of the course instructor
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <Label htmlFor="thumbnail">Course Thumbnail</Label>
                    <div className="mt-2">
                      <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                          <Input
                            id="thumbnail"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleThumbnailChange}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={() =>
                              document.getElementById("thumbnail")?.click()
                            }
                          >
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Thumbnail
                          </Button>
                        </div>
                        {thumbnail && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => setThumbnail(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      {thumbnail && (
                        <div className="mt-4">
                          <img
                            src={thumbnail || "/placeholder.svg"}
                            alt="Course thumbnail preview"
                            className="rounded-lg border object-cover"
                            width={200}
                            height={112}
                          />
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-500">
                      Recommended size: 1280x720px (16:9)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Create Course
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
