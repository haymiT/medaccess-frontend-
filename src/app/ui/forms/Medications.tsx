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
import notification from "../../_components/notification";
import { Backend_URL } from "../../lib/constant";

export default function MedicationsModal() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    dosage: "",
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
      description: formData.description,
      category: formData.category,
      dosage: formData.dosage,
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
    <Container my={40}>
      <Paper mt={10} shadow="md" p={'lg'}  radius="md">
        <TextInput
          required
          label="Name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />
        <TextInput
          required
          label="Description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
        />
        <Select
          required
          label="Category"
          placeholder="Category"
          // value={formData.category}
          data={[
            { value: "antibiotics", label: "Antibiotics" },
            { value: "analgesics", label: "Analgesics" },
            { value: "antimalarial", label: "Antimalarial" },
            { value: "antifungal", label: "Antifungal" },
            { value: "antiviral", label: "Antiviral" },
          ]}
          onChange={handleInputChange}
          name="category"
        />
        <TextInput
          required
          type="number"
          label="Dosage"
          placeholder="Enter Dosage"
          value={formData.dosage}
          onChange={handleInputChange}
          name="dosage"
        />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Add Medication
        </Button>
      </Paper>
    </Container>
  );
}
