export const StorageKeys = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user",
};

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";
export const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:3000";

export const UserRoleEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

export const AvailableUserRoles = Object.values(UserRoleEnum);

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};
