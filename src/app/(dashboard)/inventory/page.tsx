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
import notification from "@/app/_components/notification";
import { Inventory } from "@/app/lib/models/inventory";

export default function UserListTable() {
  const [inventory, setInventory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(`http://localhost:5000/inventory`);
        const data = await response.json();
        setInventory(data);
      } catch (error: any) {
        notification.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/inventory/${id}/delete`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setInventory((prevInv) =>
          prevInv.filter((inv: Inventory) => inv?.inventory_id !== id)
        );
        closeModal("delete");
        notification.success(
          "Success",
          `Inventory with ID ${id} has been deleted`
        );
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Something went wrong";

        notification.error("Error", errorMessage);
      }
    } catch (error) {
      notification.error("Error", "There was an issue deleting the inventory");
    }
  };

  const showModal = ({
    inventory,
    action,
  }: {
    inventory: Inventory;
    action: "delete" | "view" | "edit";
  }) => {
    if (action === "delete") {
      modals.openConfirmModal({
        // title: `Are you sure you want to delete "${inventory.name}?"`,
        children: (
          <Text size="sm">
            This action is irreversible. The inventory with ID {inventory.inventory_id} will be
            permanently deleted.
          </Text>
        ),
        labels: { confirm: "Delete", cancel: "Cancel" },
        confirmProps: { color: "red" },
        onConfirm: () => handleDelete(inventory.inventory_id),
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
              <GridCol span={10}>{inventory.inventory_id}</GridCol>
              {/* <GridCol span={2}>Name</GridCol> */}
              {/* <GridCol span={10}>{inventory.name}</GridCol> */}
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
            Inventory
          </h1>

          <Link
            href="/inventory/create"
            className="flex h-10 -mt-1 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <span className="hidden md:block">New Inventory</span>{" "}
            <IconPlus className="h-5 md:ml-4" />
          </Link>
        </Flex>
        <DataTable
          withTableBorder
          height={400}
          withColumnBorders
          columns={[
            // { accessor: "inventoryId", title: "Inventory Id", textAlign: "left" },
            // { accessor: "pharmacyId", title: "Pharmacy Id", textAlign: "left" },
            // { accessor: "medicationId", title: "Medication Id", textAlign: "left" },
            // { accessor: "name", title: "Name", textAlign: "left" },
            { accessor: "quantity", title: "Quantity", textAlign: "left" },
            { accessor: "unit_price", title: "Unit Price", textAlign: "left" },
            { accessor: "manufacturer", title: "Manufacturer", textAlign: "left" },
            { accessor: "manufacturing_date", title: "Manufacturing Date", textAlign: "left" },
            { accessor: "expiration_date", title: "Expiration Date", textAlign: "left" },
            { accessor: "shelf_number", title: "Shelf Number", textAlign: "left" },
            // { accessor: "createdAt", title: "Created At", textAlign: "left" },
            // { accessor: "updatedAt", title: "Updated At", textAlign: "left" },
            { accessor: "bin_card", title: "Bin Card", textAlign: "left" },
            { accessor: "score_card", title: "Score Card", textAlign: "left" },
            { accessor: "dosage_unit", title: "Dosage Unit", textAlign: "left" },
            { accessor: "dosage_value", title: "Dosage Value", textAlign: "left" },
            {
              accessor: "actions",
              title: <Box mr={6}>Actions</Box>,
              width: "0%",
              textAlign: "right",
              render: (inventory: Inventory) => (
                <Group gap={4} wrap="nowrap">
                  <Tooltip label="View" position="top" withArrow>
                    <ActionIcon
                      size="sm"
                      variant="subtle"
                      color="green"
                      onClick={() => showModal({ inventory, action: "view" })}
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
                        router.push(`/inventory/${inventory.inventory_id}/edit`)
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
                      onClick={() => showModal({ inventory, action: "delete" })}
                    >
                      <IconTrash size={16} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              ),
            },
          ]}
          records={inventory}
          rowClassName="hover:bg-gray-50"
          className="border border-gray-200 rounded-lg"
        />
      </Box>
    </Box>
  );
}
