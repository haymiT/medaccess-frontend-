"use client";
import { useState } from "react";
import {
  TextInput,
  Paper,
  Container,
  Button,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import notification from "./notification";
import { Backend_URL } from "../lib/constant";

export default function RegisterDrugModal() {
  const [formData, setFormData] = useState({
    name: "",
    Manufacturer: "",
    Price: "",
    Quantity: "",
    ExpiryDate: "",
  });

  const router = useRouter();
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Prepare the final payload
    const payload = {
      name: formData.name,
      Manufacturer: formData.Manufacturer,
      Price: formData.Price,
      Quantity: formData.Quantity,
      ExpiryDate: formData.ExpiryDate,
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
          "You have successfully Registered the Drug"
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
          required
          label="Drug Name"
          placeholder="Enter Drug Name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />
        <TextInput
          required
          label="Manufacturer"
          placeholder="Enter Manufacturer"
          value={formData.Manufacturer}
          onChange={handleInputChange}
          name="Manufacturer"
        />
        <TextInput
          required
          label="Price"
          type="number"
          placeholder="Enter Price"
          value={formData.Price}
          onChange={handleInputChange}
          name="Price"
        />
        <TextInput
          required
          type="number"
          label="Quantity"
          placeholder="Enter Quantity"
          value={formData.Quantity}
          onChange={handleInputChange}
          name="Quantity"
        />
        <TextInput
          required
          label="Expiry Date"
          type="date"
          placeholder="Enter Expiry Date"
          value={formData.ExpiryDate}
          onChange={handleInputChange}
          name="ExpiryDate"
        />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Register Drug
        </Button>
      </Paper>
    </Container>
  );
}
