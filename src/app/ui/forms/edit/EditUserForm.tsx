"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  TextInput,
  Paper,
  Container,
  Flex,
} from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import notification from "../../../_components/notification";
import { Medication } from "@/app/lib/models/medication";

export default function EditMedicationForm({ medication }: { medication: Medication }) {
  const [formData, setFormData] = useState({
    name: medication?.name || "",
    description: medication?.description || "",
    category: medication?.category || "",
    dosage: medication?.dosage || "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/medications/${medication.id}/edit`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Something went wrong";

        notification.error("Error", errorMessage);
      } else {
        notification.success("Success", "Medication updated successfully");
        router.push("/medications");
      }
    } catch (error) {
      console.error("Error updating medication:", error);
    }
  };

  return (
    <Container my={40}>
      <Paper mt={10} shadow="md" p='lg' radius="md">
        <TextInput
          label="Name"
          placeholder="Medication name"
          leftSection={<IconUser size={16} />}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextInput
          label="Description"
          placeholder="Medication description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Category"
          placeholder="Medication category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Dosage"
          placeholder="Medication dosage"
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          required
        />

        <Flex direction={"row"} gap={5}>
          <Button type="submit" color="blue" mt={10} onClick={handleSubmit}>
            Update
          </Button>

          <Button
            type="submit"
            color="blue"
            variant="outline"
            mt={10}
            component="a"
            href="/pharmacy"
          >
            Cancel
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}
