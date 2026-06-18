export interface WorkshopDetail {
  icon: string;
  label: string;
  value: string;
}

export interface LearningOutcome {
  id: number;
  emoji: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    id?: string;
    name: string;
    email: string;
    workshop: string;
  };
  errors?: Record<string, string>;
}
