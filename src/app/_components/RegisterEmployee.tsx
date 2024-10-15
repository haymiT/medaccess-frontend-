"use client";
import { useState } from "react";
import {
  TextInput,
  Paper,
  Container,
  Button,
  Select,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import notification from "./notification";
import { Backend_URL } from "../lib/constant";

export default function RegisterEmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    sex: "",
    address: ""
  });

  const router = useRouter();
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSexChange = (sex: string | null) => {
    setFormData({
      ...formData,
      sex: sex || "",
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    

    // Prepare the final payload
    const payload = {
      name: formData.name,
      contact: formData.contact,
      sex: formData.sex,
      address: formData.address
    };

    try {
      const response = await fetch(`${Backend_URL}/drugs/register-drug`, {
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
          "You have successfully Registered Employee"
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
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <TextInput
          label="Contact"
          placeholder="Enter Contact"
          value={formData.contact}
          onChange={handleInputChange}
          name="contact"
          required
          />
          
          <Select
          label="Role"
          placeholder="Select a role"
          data={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          onChange={handleInputChange}
          required
        />
        <TextInput
          label="Address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleInputChange}
          name="address"
          required
        />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
