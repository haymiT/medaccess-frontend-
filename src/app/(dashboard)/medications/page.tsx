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
import { Medication } from "@/app/lib/models/medication";

export default function UserListTable() {
  const [medication, setMedication] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await fetch(`http://localhost:5000/medications`);
        const data = await response.json();
        setMedication(data);
      } catch (error: any) {
        notification.error("Error fetching medications:", error);
      }
    };

    fetchMedications();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/medications/${id}/delete`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setMedication((prevMedication) =>
          prevMedication.filter((medication: Medication) => medication?.id !== id)
        );
        closeModal("delete");
        notification.success(
          "Success",
          `Medication with ID ${id} has been deleted`
        );
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Something went wrong";

        notification.error("Error", errorMessage);
      }
    } catch (error) {
      notification.error("Error", "There was an issue deleting the medication");
    }
  };

  const showModal = ({
    medication,
    action,
  }: {
    medication: Medication;
    action: "delete" | "view" | "edit";
  }) => {
    if (action === "delete") {
      modals.openConfirmModal({
        title: `Are you sure you want to delete "${medication.name}?"`,
        children: (
          <Text size="sm">
            This action is irreversible. The medication with ID {medication.id} will be
            permanently deleted.
          </Text>
        ),
        labels: { confirm: "Delete", cancel: "Cancel" },
        confirmProps: { color: "red" },
        onConfirm: () => handleDelete(medication.id),
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
              <GridCol span={10}>{medication.id}</GridCol>
              <GridCol span={2}>Name</GridCol>
              <GridCol span={10}>{medication.name}</GridCol>
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
            Show Medication
          </h1>

          <Link
            href="/medications/create"
            className="flex h-10 -mt-1 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <span className="hidden md:block">Add Medication</span>{" "}
            <IconPlus className="h-5 md:ml-4" />
          </Link>
        </Flex>
        <DataTable
          withTableBorder
          height={400}
          withColumnBorders
          columns={[
            { accessor: "name", title: "Name", textAlign: "left" },
            { accessor: "description", title: "Description", textAlign: "left" },
            { accessor: "category", title: "Category", textAlign: "left" },
            { accessor: "dosage", title: "Dosage", textAlign: "left" },
            {
              accessor: "actions",
              title: <Box mr={6}>Actions</Box>,
              width: "0%",
              textAlign: "right",
              render: (medication: Medication) => (
                <Group gap={4} wrap="nowrap">
                  <Tooltip label="View" position="top" withArrow>
                    <ActionIcon
                      size="sm"
                      variant="subtle"
                      color="green"
                      onClick={() => showModal({ medication, action: "view" })}
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
                        router.push(`/medications/${medication.id}/edit`)
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
                      onClick={() => showModal({ medication, action: "delete" })}
                    >
                      <IconTrash size={16} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              ),
            },
          ]}
          records={medication}
          rowClassName="hover:bg-gray-50"
          className="border border-gray-200 rounded-lg"
        />
      </Box>
    </Box>
  );
}
