"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  TextInput,
  Select,
  Paper,
  Container,
  Flex,
} from "@mantine/core";
import { IconUser, IconMail, IconPhone } from "@tabler/icons-react";
import notification from "../../_components/notification";
import { Backend_URL } from "../../lib/constant";
import { User } from "@/app/lib/user";

export default function EditUserForm({ user }: { user: User }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
    role: user?.role || "",
    // address: {
    //   city: user?.address?.city || "",
    //   street: user?.address?.street || "",
    //   country: user?.address?.country || "",
    // },
  });

  console.log("Form Data", formData);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (value: string | null) => {
    setFormData((prevState: any) => ({ ...prevState, role: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/${user.userId}/edit`, {
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
        notification.success("Success", "User updated successfully");
        router.push("/user/user-management");
      }
    } catch (error) {
      console.error("Error updating user:", error);
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
          label="Email"
          placeholder="User's email"
          leftSection={<IconMail size={16} />}
          name="email"
          value={formData.email}
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

        <Select
          label="Role"
          placeholder="Select a role"
          // data={['customer', 'pharmacy', 'supplier']}
          data={[
            { value: "customer", label: "Customer" },
            { value: "pharmacy", label: "Pharmacy" },
            { value: "supplier", label: "Supplier" },
          ]}
          value={formData.role}
          onChange={handleSelectChange}
          required
        />
        {/* <TextInput
          label="City"
          placeholder="City"
          name="city"
          value={formData?.address?.city}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Street"
          placeholder="Street"
          name="street"
          value={formData?.address?.street}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Country"
          placeholder="Country"
          name="country"
          value={formData?.address?.country}
          onChange={handleChange}
          required
        /> */}

        <Flex direction={"row"} gap={5}>
          <Button type="submit" color="blue" mt={10} onClick={handleSubmit}>
            Update User
          </Button>

          <Button
            type="submit"
            color="blue"
            variant="outline"
            mt={10}
            component="a"
            href="/user/user-management"
          >
            Cancel
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}
