export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string; 
  password?: string;
  role: string;
  address?: {
    city: string;
    street: string;
    country: string;
  };
}
