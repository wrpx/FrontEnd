// User type definitions
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Navigation types (ถ้าใช้ React Navigation)
export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
};

// Theme types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    error: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

// Common component props
export interface BaseComponentProps {
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
} 