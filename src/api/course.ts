import request from "@site/src/api/request";
import { TLesson, TCourse } from "@site/src/typings/course";
import { TResult } from "@site/src/typings/common";

// TODO 待增加类型
export const getLessons = (courseId: string) => {
  return request
    .get<unknown, TResult<{ list: TLesson[] }>>(`/courses/${courseId}/lessons`)
    .then((res) => res.data.list);
};

export const getLesson = (courseId: string, lessonId: string) => {
  return request
    .get<unknown, TResult<{ lesson: TLesson }>>(
      `/courses/${courseId}/user_lessons/${lessonId}`
    )
    .then((res) => res.data.lesson);
};

export const getCourseInfo = (courseId: string) => {
  return request.get(`/course/${courseId}`).then((res) => res.data);
};

export const getCourses = (start_status: 1 | 2, lan?: undefined | "en") => {
  return request
    .get<unknown, TResult<{ list: TCourse[] }>>(
      `/courses?start_status=${start_status}&lan=${lan ?? ""}`
    )
    .then((res) => res.data);
};
