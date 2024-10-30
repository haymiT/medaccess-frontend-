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
import { IconUser, IconPhone } from "@tabler/icons-react";
import notification from "../../../_components/notification";
import { Pharmacy } from "@/app/lib/models/pharmacy";

export default function EditPharmacyForm({ pharmacy }: { pharmacy: Pharmacy }) {
  const [formData, setFormData] = useState({
    name: pharmacy?.name || "",
    location: pharmacy?.location || "",
    phone_number: pharmacy?.phone_number || "",
    established_year: pharmacy?.established_year || "",
    license_number: pharmacy?.license_number || "",
    owner_id: pharmacy?.owner_id || "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/pharmacies/${pharmacy.id}/edit`, {
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
        notification.success("Success", "Pharmacy updated successfully");
        router.push("/pharmacy");
      }
    } catch (error) {
      console.error("Error updating pharmacy:", error);
    }
  };

  return (
    <Container my={40}>
      <Paper mt={10} shadow="md" p='lg' radius="md">
        <TextInput
          label="Name"
          placeholder="User's name"
          leftSection={<IconUser size={16} />}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextInput
          label="Location"
          placeholder="User's location"
          leftSection={<IconUser size={16} />}
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Phone Number"
          placeholder="User's phone number"
          leftSection={<IconPhone size={16} />}
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Established Year"
          placeholder="User's established year"
          leftSection={<IconUser size={16} />}
          name="established_year"
          value={formData.established_year}
          onChange={handleChange}
          required

        />
        <TextInput
          label="License Number"
          placeholder="User's license number"
          leftSection={<IconUser size={16} />}
          name="license_number"
          value={formData.license_number}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Owner ID"
          placeholder="User's owner ID"
          leftSection={<IconUser size={16} />}
          name="owner_id"
          value={formData.owner_id}
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
