"use client";
import { useState } from "react";
import {
  TextInput,
  Paper,
  Container,
  Button,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import notification from "../../_components/notification";
import { Backend_URL } from "../../lib/constant";

export default function RegisterInventoryForm() {
  const [formData, setFormData] = useState({
    inventoryId: "",
    medicationId: "",
    quantity: "",
    location: "",
    expiryDate: "",
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
      inventoryId: formData.inventoryId,
      medicationId: formData.medicationId,
      quantity: formData.quantity,
      location: formData.location,
      expiryDate: formData.expiryDate,
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
          "You have successfully Create Sales"
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
          label="Inventory ID"
          placeholder="Enter Inventory ID"
          value={formData.inventoryId}
          onChange={handleInputChange}
          name="inventoryId"
        />
        <TextInput
          required
          label="Medication ID"
          placeholder="Enter Medication ID"
          value={formData.medicationId}
          onChange={handleInputChange}
          name="medicationId"
        />
        <TextInput
          required
          label="Quantity"
          type="number"
          placeholder="Enter Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          name="quantity"
        />
        <TextInput
          required
          label="Location"
          placeholder="Enter Location"
          value={formData.location}
          onChange={handleInputChange}
          name="location"
        />
        <TextInput
          required
          label="Expiry Date"
          type="date"
          placeholder="Enter Expiry Date"
          value={formData.expiryDate}
          onChange={handleInputChange}
          name="expiryDate"
        />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
