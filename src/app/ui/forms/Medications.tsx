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

  const handleCategoryChange = (category: string | null) => {
    setFormData({
      ...formData,
      category: category || "",
    });
  }

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
      const response = await fetch(`http://localhost:5000/medications/new`, {
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
          "You have successfully Registered the Medication"
        );
        router.push("/medications");
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
      <Paper mt={10} shadow="md" p={'lg'} radius="md">
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
          data={[
            { value: 'Gastrointestinal drugs', label: 'Gastrointestinal drugs' },
            { value: 'Anti pain drugs', label: 'Anti pain drugs' },
            { value: 'ENT Drugs', label: 'ENT Drugs' },
            { value: 'Anti bacterial/antibiotics', label: 'Anti bacterial/antibiotics' },
            { value: 'Anti Histamines and Anti allergies', label: 'Anti Histamines and Anti allergies' },
            { value: 'Antihelminitics', label: 'Antihelminitics' },
            { value: 'Hypoglycemic', label: 'Hypoglycemic' },
            { value: 'CVS drugs', label: 'CVS drugs' },
            { value: 'NSAID', label: 'NSAID' },
            { value: 'Dermatological Agents', label: 'Dermatological Agents' },
            { value: 'CNS drugs', label: 'CNS drugs' },
            { value: 'Respiratory drugs', label: 'Respiratory drugs' },
            { value: 'Hormonal Drugs', label: 'Hormonal Drugs' },
            { value: 'Antiemetics and antiprotozoal drugs', label: 'Antiemetics and antiprotozoal drugs' },
            { value: 'Ophthalmic products', label: 'Ophthalmic products' },
            { value: 'Milk and cosmetics', label: 'Milk and cosmetics' },
            { value: 'CBS drugs', label: 'CBS drugs' },
          ]}
          onChange={handleCategoryChange}
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
