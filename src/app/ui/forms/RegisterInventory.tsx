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
    name: "",
    pharmacyId: "",
    medicationId: "",
    quantity: "",
    unitPrice: "",
    manufacturer: "",
    manufacturing_date: "",
    expiration_date: "",
    shelf_number: "",
    bin_card: "",
    score_card: "",
    dosage_unit: "",
    dosage_value: "",
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
      pharmacyId: formData.pharmacyId,
      medicationId: formData.medicationId,
      quantity: formData.quantity,
      unitPrice: formData.unitPrice,
      manufacturer: formData.manufacturer,
      manufacturing_date: formData.manufacturing_date,
      expiration_date: formData.expiration_date,
      shelf_number: formData.shelf_number,
      bin_card: formData.bin_card,
      score_card: formData.score_card,
      dosage_unit: formData.dosage_unit,
      dosage_value: formData.dosage_value,
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
    <Container my={40}>
      <Paper mt={10} shadow="md" p='lg' radius="md">

        <TextInput
          label="Name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <TextInput
          label="Pharmacy Id"
          placeholder="Pharmacy Id"
          value={formData.pharmacyId}
          onChange={handleInputChange}
          name="pharmacyId"
          required
        />
        <TextInput
          label="Medication Id"
          placeholder="Medication Id"
          value={formData.medicationId}
          onChange={handleInputChange}
          name="medicationId"
          required
        />
        <TextInput
          label="Quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          name="quantity"
          required
        />
        <TextInput
          label="Unit Price"
          placeholder="Unit Price"
          value={formData.unitPrice}
          onChange={handleInputChange}
          name="unitPrice"
          required
        />
        <TextInput
          label="Manufacturer"
          placeholder="Manufacturer"
          value={formData.manufacturer}
          onChange={handleInputChange}
          name="manufacturer"
          required
        />
        <TextInput
          label="Manufacturing Date"
          placeholder="Manufacturing Date"
          value={formData.manufacturing_date}
          onChange={handleInputChange}
          name="manufacturing_date"
          required
        />
        <TextInput
          label="Expiration Date"
          placeholder="Expiration Date"
          value={formData.expiration_date}
          onChange={handleInputChange}
          name="expiration_date"
          required
        />
        <TextInput
          label="Shelf Number"
          placeholder="Shelf Number"
          value={formData.shelf_number}
          onChange={handleInputChange}
          name="shelf_number"
          required
        />
        <TextInput
          label="Bin Card"
          placeholder="Bin Card"
          value={formData.bin_card}
          onChange={handleInputChange}
          name="bin_card"
          required
        />
        <TextInput
          label="Score Card"
          placeholder="Score Card"
          value={formData.score_card}
          onChange={handleInputChange}
          name="score_card"
          required
        />
        <TextInput
          label="Dosage Unit"
          placeholder="Dosage Unit"
          value={formData.dosage_unit}
          onChange={handleInputChange}
          name="dosage_unit"
          required
        />
        <TextInput
          label="Dosage Value"
          placeholder="Dosage Value"
          value={formData.dosage_value}
          onChange={handleInputChange}
          name="dosage_value"
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
