import { Text } from "@nextui-org/react";
import { ReactElement } from "react";

export const PlaylistHeader = (props: any): ReactElement => {
  return (
    <>
      <Text
        h1
        size={60}
        css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
        weight="bold"
      >
        {props.playlistName} Albums
      </Text>
    </>
  );
};
