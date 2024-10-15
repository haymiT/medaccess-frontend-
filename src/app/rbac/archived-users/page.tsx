"use client";

import { ActionIcon, Box, Flex, Group, Text, Tooltip } from "@mantine/core";
import { closeModal, modals } from "@mantine/modals";
import { IconRestore } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { useMediaQuery } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { lusitana } from "../../ui/fonts";
import { useRouter } from "next/navigation";
import { User } from "../../lib/user";
import notification from "../../_components/notification";
import { Backend_URL } from "../../lib/constant";

export default function ArchivedTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${Backend_URL}/users/get/deleted`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        console.log("Users Data", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleRestore = async (userId: number) => {
    try {
      const response = await fetch(`${Backend_URL}/users/restore/${userId}`, {
        method: "PATCH",
        credentials: "include",
      });

      if (response.ok) {
        setUsers((prevUsers) =>
          prevUsers.filter((user: User) => user?.id !== userId)
        );
        closeModal("restore");
        notification.success(
          "Success",
          `User with ID ${userId} has been restored`
        );
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Something went wrong";

        notification.error("Error", errorMessage);
      }
    } catch (error) {
      notification.error("Error", "There was an issue restoring the user");
    }
  };

  const showModal = ({ user, action }: { user: User; action: "restore" }) => {
    if (action === "restore") {
      modals.openConfirmModal({
        title: `Are you sure you want to restore "${user.name}?"`,
        children: (
          <Text size="sm">
            This action is irreversible. The user with ID {user.id} will be
            permanently deleted.
          </Text>
        ),
        labels: { confirm: "Restore", cancel: "Cancel" },
        confirmProps: { color: "yellow" },
        onConfirm: () => handleRestore(user.id),
      });
    } else {
      console.error("Invalid action");
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
            Archived Users
          </h1>
        </Flex>
        <DataTable
          withTableBorder
          height={400}
          withColumnBorders
          columns={[
            { accessor: "name", title: "Name", textAlign: "left" },
            { accessor: "email", title: "Email", textAlign: "left" },
            { accessor: "role", title: "Role", textAlign: "left" },
            {
              accessor: "phoneNumber",
              title: "Phone Number",
              textAlign: "left",
            },
            {
              accessor: "actions",
              title: <Box mr={6}>Actions</Box>,
              width: "0%",
              textAlign: "right",
              render: (user: any) => (
                <Group gap={4} wrap="nowrap">
                  {/* Restore */}
                  <Tooltip label="Restore" position="top" withArrow>
                    <ActionIcon
                      size="sm"
                      variant="subtle"
                      color="blue"
                      // onClick={() => handleRestore(user.id)}
                      onClick={() => showModal({ user, action: "restore" })}
                    >
                      <IconRestore size={16} />
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
