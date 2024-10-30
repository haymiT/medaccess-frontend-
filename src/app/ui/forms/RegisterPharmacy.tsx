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

export default function RegisterPharmacyForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone_number: "",
    established_year: "",
    license_number: "",
    owner_id: "",
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
      location: formData.location,
      phone_number: formData.phone_number,
      established_year: formData.established_year,
      license_number: formData.license_number,
      owner_id: formData.owner_id,
    };

    try {
      const response = await fetch(`http://localhost:5000/pharmacies/new`, {
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
        router.push("/pharmacy"); 
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
      <Paper mt={10} shadow="md" p='lg' radius="md">

        <TextInput
          label="Name"
          placeholder="Enter pharmacy name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <TextInput
          label="Location"
          placeholder="Enter pharmacy location"
          value={formData.location}
          onChange={handleInputChange}
          name="location"
          required
        />
        <TextInput
          label="Phone Number"
          placeholder="Enter pharmacy phone number"
          value={formData.phone_number}
          onChange={handleInputChange}
          name="phone_number"
          required
        />
        <TextInput
          label="Established Year"
          placeholder="Enter pharmacy established year"
          value={formData.established_year}
          onChange={handleInputChange}
          name="established_year"
          required
        />
        <TextInput
          label="License Number"
          placeholder="Enter pharmacy license number"
          value={formData.license_number}
          onChange={handleInputChange}
          name="license_number"
          required
        />
        <TextInput
          label="Owner ID"
          placeholder="Enter pharmacy owner ID"
          value={formData.owner_id}
          onChange={handleInputChange}
          name="owner_id"
          required
        />
        <br />
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
