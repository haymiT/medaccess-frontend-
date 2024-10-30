"use client";

import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { closeModal, openModal, modals } from "@mantine/modals";
import { IconEdit, IconEye, IconPlus, IconTrash } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { useState, useEffect } from "react";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { useRouter } from "next/navigation";
import { User }  from "../../lib/user";
import notification from "@/app/_components/notification";
import { Backend_URL } from "@/app/lib/constant";

export default function UserListTable() {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${Backend_URL}/users/`);
        const data = await response.json();
        console.log("Users Data", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    try {
      const response = await fetch(`${Backend_URL}/users/${userId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        setUsers((prevUsers) =>
          prevUsers.filter((user: User) => user?.id !== userId)
        );
        closeModal("delete");
        notification.success(
          "Success",
          `User with ID ${userId} has been deleted`
        );
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Something went wrong";

        notification.error("Error", errorMessage);
      }
    } catch (error) {
      notification.error("Error", "There was an issue deleting the user");
    }
  };

  const showModal = ({
    user,
    action,
  }: {
    user: User;
    action: "delete" | "view" | "edit";
  }) => {
    if (action === "delete") {
      modals.openConfirmModal({
        title: `Are you sure you want to delete "${user.name}?"`,
        children: (
          <Text size="sm">
            This action is irreversible. The user with ID {user.id} will be
            permanently deleted.
          </Text>
        ),
        labels: { confirm: "Delete", cancel: "Cancel" },
        confirmProps: { color: "red" },
        onConfirm: () => handleDelete(user.id),
      });
    } else {
      openModal({
        modalId: action,
        title:
          action === "view"
            ? "Showing user information"
            : action === "edit"
            ? "Editing user information"
            : "Action",
        children: (
          <Stack>
            <Text>
              {action === "view"
                ? "Here’s where you could show more information..."
                : action === "edit"
                ? "Here’s where you could put an edit form..."
                : "Here’s where you could ask for confirmation before deleting..."}
            </Text>
            <Grid gutter="xs">
              <GridCol span={2}>ID</GridCol>
              <GridCol span={10}>{user.id}</GridCol>
              <GridCol span={2}>Name</GridCol>
              <GridCol span={10}>{user.name}</GridCol>
            </Grid>
            <Button onClick={() => closeModal(action)}>Close</Button>
          </Stack>
        ),
      });
    }
  };

  return (
      <Box className="w-full flex p-6 bg-[#f5f7fa]">
        <Box className="w-full p-6 bg-white rounded-lg shadow-md">
          <Flex
            direction={"row"}
            className="justify-between py-2 mb-4 border-b-2 border-gray-200"
          >
            <h1 className={`${lusitana.className} text-2xl text-gray-800`}>
              List of Sold Drugs
            </h1>

            <Link
              href="/drugs/create"
              className="flex h-10 -mt-1 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span className="hidden md:block">Register Drug</span>{" "}
              <IconPlus className="h-5 md:ml-4" />
            </Link>
          </Flex>
          <DataTable
            withTableBorder
            height={400}
            withColumnBorders
            columns={[
              // id = db.Column(db.Integer, primary_key=True)
              // sell_id = db.Column(db.Integer, db.ForeignKey('sells.id'), nullable=False)  # Foreign key to Sell
              // inventory_id = db.Column(db.Integer, db.ForeignKey('inventory.inventory_id'), nullable=False)  # Foreign key to Inventory
              // quantity = db.Column(db.Integer, nullable=False)  # Quantity sold
              // unit_price = db.Column(db.Numeric(10, 2), nullable=False)  # Unit price at sale time
              // subtotal = db.Column(db.Numeric(10, 2), nullable=False)  # Subtotal for this item (quantity * unit_price)
              { accessor: "saleId", title: "Sale Id", textAlign: "left" },
              { accessor: "inventoryId", title: "Inventory Id", textAlign: "left" },
              { accessor: "quantitySold", title: "Quantity Sold", textAlign: "left" },
              { accessor: "price", title: "Price", textAlign: "left" },
              { accessor: "saleDate", title: "Sale Date", textAlign: "left" },
              { accessor: "totalPrice", title: "Total Price", textAlign: "left" },
              {
                accessor: "actions",
                title: <Box mr={6}>Actions</Box>,
                width: "0%",
                textAlign: "right",
                render: (user: any) => (
                  <Group gap={4} wrap="nowrap">
                    <Tooltip label="View" position="top" withArrow>
                      <ActionIcon
                        size="sm"
                        variant="subtle"
                        color="green"
                        onClick={() => showModal({ user, action: "view" })}
                      >
                        <IconEye size={16} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Edit" position="top" withArrow>
                      <ActionIcon
                        size="sm"
                        variant="subtle"
                        color="blue"
                        onClick={() =>
                          router.push(`/role-management/${user.id}/edit`)
                        }
                      >
                        <IconEdit size={16} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Delete" position="top" withArrow>
                      <ActionIcon
                        size="sm"
                        variant="subtle"
                        color="red"
                        onClick={() => showModal({ user, action: "delete" })}
                      >
                        <IconTrash size={16} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                ),
              },
            ]}
            records={users}
            rowClassName="hover:bg-gray-50"
            className="border border-gray-200 rounded-lg"
          />
        </Box>
      </Box>
  );
}
