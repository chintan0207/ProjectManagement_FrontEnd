export const StorageKeys = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  USER: "user",
};

export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";
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

export const plans = [
  {
    title: "Free",
    price: 0,
    description: "For individuals and small teams",
    buttonText: "Get Started",
    features: [
      "3 Projects",
      "5 Members per project",
      "Basic task & Kanban",
      "Chat and file sharing",
    ],
  },
  {
    title: "Pro",
    price: 9,
    description: "Best for growing teams and small businesses",
    highlight: true,
    buttonText: "Start Pro",
    features: [
      "Unlimited Projects",
      "Unlimited Members",
      "Advanced reporting",
      "Priority support",
    ],
  },
  {
    title: "Premium",
    price: 19,
    description: "All-in-one solution for enterprises",
    highlight: false,
    buttonText: "Go Premium",
    features: [
      "Unlimited everything",
      "Analytics & audit logs",
      "Dedicated account manager",
      "Premium support & SLA",
    ],
  },
];
