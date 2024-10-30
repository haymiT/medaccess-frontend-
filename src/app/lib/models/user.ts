export interface User {
  userId: number;
  name: string;
  email: string;
  phone_number: string; 
  password?: string;
  role: string;
  address?: {
    city: string;
    street: string;
    country: string;
  };
}
