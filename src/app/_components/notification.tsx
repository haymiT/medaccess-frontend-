import { notifications } from "@mantine/notifications";
import { IconCheck, IconExclamationCircle, IconX } from "@tabler/icons-react";

const notification = {
  success: (title: string, message: string) => {
    notifications.show({
      title: title,
      message: message,
      color: "teal",
      icon: <IconCheck size={16} />,
      autoClose: 1800,
    });
  },

  error: (title: string, message: string) => {
    notifications.show({
      title: title,
      message: message,
      color: "red",
      icon: <IconExclamationCircle size={16} />,
      autoClose: 1800,
    });
  },

  info: (title: string, message: string) => {
    notifications.show({
      title: title,
      message: message,
      color: "blue",
      autoClose: 1800,
    });
  },

  warning: (title: string, message: string) => {
    notifications.show({
      title: title,
      message: message,
      color: "orange",
      autoClose: 1800,
    });
  },
};

export default notification;
