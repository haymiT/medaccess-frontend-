import notification from "../_components/notification";
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
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function fetchPharmacyById(id: number) {
  try {
    const response = await fetch(`http://localhost:5000/pharmacies/${id}`, {
      credentials: "include",
    });
    if (!response.ok) {
      return null;
    }
    const pharmacy = await response.json();
    return pharmacy;
  } catch (error: any) {
    notification.error("Error fetching pharmacy:", error);
    return null;
  }
}

export async function fetchMedicationById(id: number) {
  try {
    const response = await fetch(`http://localhost:5000/medications/${id}`, {
      credentials: "include",
    });
    if (!response.ok) {
      return null;
    }
    const medication = await response.json();
    return medication;
  } catch (error: any) {
    notification.error("Error fetching medication:", error);
    return null;
  }
}

export async function fetchInventoryById(id: number) {
  try {
    const response = await fetch(`http://localhost:5000/inventory/${id}`, {
      credentials: "include",
    });
    if (!response.ok) {
      return null;
    }
    const inventory = await response.json();
    return inventory;
  } catch (error: any) {
    notification.error("Error fetching inventory:", error);
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