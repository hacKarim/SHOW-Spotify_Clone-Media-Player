import { Text } from "@nextui-org/react";
import { ReactElement } from "react";

export const PageHeader = (props: any): ReactElement => {
  return (
    <>
      <Text h1 size={40} weight="thin" style={{ width: "100%" }}>
        {props.text}
      </Text>
    </>
  );
};
