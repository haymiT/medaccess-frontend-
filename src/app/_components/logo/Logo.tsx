import { Flex, Text } from "@mantine/core";
import Link from "next/link";

interface Props {
  width?: string;
  height?: string;
}

export const Logo: React.FC<Props> = () => {
  return (
    <Flex direction="row" align="center" gap={4}>
      <Link
        href="/"
        style={{ textDecoration: "none" }}
      >
        <Text fw="bolder" size="xl">
          Med
          <Text component="span" fw="normal">
            Access
          </Text>
        </Text>
      </Link>
    </Flex>
  );
};
