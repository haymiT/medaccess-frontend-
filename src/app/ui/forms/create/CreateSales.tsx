"use client";
import { useState } from "react";
import {
  TextInput,
  Paper,
  Container,
  Button,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import notification from "@/app/_components/notification";

export default function CreateSalesForm() {
  const [formData, setFormData] = useState({
    quantity: "",
    price: "",
    salesDate: "",
    inventoryId: "",
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
      quantity: formData.quantity,
      price: formData.price,
      salesDate: formData.salesDate,
      inventoryId: formData.inventoryId,
    };

    try {
      const response = await fetch(`http://localhost:5000/drugs/register-drug`, {
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
        {/* id = db.Column(db.Integer, primary_key=True)  # Unique identifier for the sale
    pharmacy_id = db.Column(db.Integer, db.ForeignKey('pharmacies.id'), nullable=False)  # Foreign key to Pharmacy
    user_id = db.Column(db.Integer, db.ForeignKey('users.userId'), nullable=False)  # Foreign key to User (seller)
    total_price = db.Column(db.Numeric(10, 2), nullable=False)  # Total price for the sale
    sale_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)  # Date of the sale */}
        <TextInput
          required
          label="Inventory ID"
          placeholder="Enter Inventory ID"
          name="inventoryId"
          value={formData.inventoryId}
          onChange={handleInputChange}
        />
        <TextInput
          required
          label="Quantity"
          type="number"
          placeholder="Enter Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <TextInput
          required
          label="Sales Date"
          type="date"
          placeholder="Enter Sales Date"
          name="salesDate"
          value={formData.salesDate}
          onChange={handleInputChange}
        />

        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
