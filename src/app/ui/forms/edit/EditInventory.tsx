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
import { Inventory } from "@/app/lib/models/inventory";

export default function EditInventoryForm({ inventory }: { inventory: Inventory }) {
  const [formData, setFormData] = useState({
    // name: inventory?.name || "",
    pharmacy_id: inventory?.pharmacy_id || "",
    medication_id: inventory?.medication_id || "",
    quantity: inventory?.quantity || "",
    unit_price: inventory?.unit_price || "",
    manufacturer: inventory?.manufacturer || "",
    manufacturing_date: inventory?.manufacturing_date || "",
    expiration_date: inventory?.expiration_date || "",
    shelf_number: inventory?.shelf_number || "",
    bin_card: inventory?.bin_card || "",
    score_card: inventory?.score_card || "",
    dosage_unit: inventory?.dosage_unit || "",
    dosage_value: inventory?.dosage_value || "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/inventory/${inventory.inventory_id}/edit`, {
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
        notification.success("Success", "Inventory updated successfully");
        router.push("/inventory");
      }
    } catch (error) {
      console.error("Error updating inventory:", error);
    }
  };

  return (
    <Container my={40}>
      <Paper mt={10} shadow="md" p='lg' radius="md">
        {/* <TextInput
          label="Name"
          placeholder="Enter name"
          leftSection={<IconUser size={16} />}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /> */}

        <TextInput
          label="Pharmacy ID"
          placeholder="Enter pharmacy ID"
          leftSection={<IconUser size={16} />}
          name="pharmacy_id"
          value={formData.pharmacy_id}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Medication ID"
          placeholder="Enter medication ID"
          leftSection={<IconUser size={16} />}
          name="medication_id"
          value={formData.medication_id}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Quantity"
          placeholder="Enter quantity"
          leftSection={<IconUser size={16} />}
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Unit Price"
          placeholder="Enter unit price"
          leftSection={<IconUser size={16} />}
          name="unit_price"
          value={formData.unit_price}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Manufacturer"
          placeholder="Enter manufacturer"
          leftSection={<IconUser size={16} />}
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Manufacturing Date"
          type="date"
          placeholder="Enter manufacturing date"
          leftSection={<IconUser size={16} />}
          name="manufacturing_date"
          value={formData.manufacturing_date}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Expiration Date"
          type="date"
          placeholder="Enter expiration date"
          leftSection={<IconUser size={16} />}
          name="expiration_date"
          value={formData.expiration_date}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Shelf Number"
          placeholder="Enter shelf number"
          leftSection={<IconUser size={16} />}
          name="shelf_number"
          value={formData.shelf_number}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Bin Card"
          placeholder="Enter bin card"
          leftSection={<IconUser size={16} />}
          name="bin_card"
          value={formData.bin_card}
          onChange={handleChange}
          required
        />

        <TextInput
          label="Score Card"
          placeholder="Enter score card"
          leftSection={<IconUser size={16} />}
          name="score_card"
          value={formData.score_card}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Dosage Unit"
          placeholder="Enter dosage unit"
          leftSection={<IconUser size={16} />}
          name="dosage_unit"
          value={formData.dosage_unit}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Dosage Value"
          placeholder="Enter dosage value"
          leftSection={<IconUser size={16} />}
          name="dosage_value"
          value={formData.dosage_value}
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
