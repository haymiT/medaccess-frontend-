import { Backend_URL } from "./constant";

export async function fetchUserById(userId: number) {
  try {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      credentials: "include",
    });
    if (!response.ok) {
      return null;
    }
    const user = await response.json();
    // console.log("API Fetched By Id", user);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}


export async function fetchUsers() {
  try {
    const response = await fetch(`${Backend_URL}/users`, {
      credentials: "include",
    });
    if (!response.ok) {
      return [];
    }
    const users = await response.json();
    // console.log("API Fetched Users", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function getAuthentication() {
  try {
    const response = await fetch(`${Backend_URL}/authentication/`, {
      credentials: "include",
    });
    const content = await response.json();
    return content;
  } catch (error) {
    console.error("Error fetching authentication:", error);
    return null;
  }
}