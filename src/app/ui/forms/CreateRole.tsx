"use client";
import { useState } from "react";
import {
  TextInput,
  Select,
  Paper,
  Container,
  Button,
  PasswordInput,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import notification from "../../_components/notification";
import { Backend_URL } from "../../lib/constant";

export default function CreateRoleModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    phoneNumber: "",
    street: "",
    city: "",
    country: "",
  });

  const router = useRouter();
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (role: string | null) => {
    setFormData({
      ...formData,
      role: role || "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Construct the address object
    const address = {
      street: formData.street,
      city: formData.city,
      country: formData.country,
    };

    // Prepare the final payload
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      role: formData.role,
      address,
    };

    try {
      const response = await fetch(`${Backend_URL}/users/create-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (response.status === 201) {
        notification.success(
          "Success",
          "You have successfully created an admin role"
        );
        router.push("/auth/signin");
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Something went wrong";

        notification.error("Error", errorMessage);
      }
    } catch (err) {
      notification.error("Error", String(err));
    }
  };

  return (
    <Container size={500} my={40}>
      <Paper mt={10} className="-ml-40" radius="md">
        <TextInput
          label="Name"
          placeholder="John Doe"
          name="name"
          onChange={handleInputChange}
          required
        />
        <TextInput
          label="Email"
          placeholder="you@rbac.tech"
          name="email"
          onChange={handleInputChange}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          name="password"
          onChange={handleInputChange}
          required
          mt="md"
        />
        <TextInput
          label="Phone Number"
          placeholder="1234567890"
          name="phoneNumber"
          onChange={handleInputChange}
          required
        />
        <TextInput
          label="City"
          placeholder="New York"
          name="city"
          onChange={handleInputChange}
          required
        />
        <TextInput
          label="Street"
          placeholder="Wall Street"
          name="street"
          onChange={handleInputChange}
          required
        />
        <TextInput
          label="Country"
          placeholder="USA"
          name="country"
          onChange={handleInputChange}
          required
        />
        <Select
          label="Role"
          placeholder="Select a role"
          data={[
            { value: "SuperAdmin", label: "SuperAdmin" },
            { value: "User", label: "User" },
            { value: "Supplier", label: "Supplier" },
            { value: "Admin", label: "Admin" },
          ]}
          onChange={handleRoleChange}
          required
        />

        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Create User
        </Button>
      </Paper>
    </Container>
  );
}
