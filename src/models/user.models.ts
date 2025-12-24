export interface User {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
}

// simulasi database
export const users: User[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@mail.com',
    password: '$2a$10$iQInLWbvPe2uWswNJbxzcumLXIhFNroJ305XvVWW1L2efpXi2uYyG', // hasil bcrypt
    role: 'admin'
  }
]
