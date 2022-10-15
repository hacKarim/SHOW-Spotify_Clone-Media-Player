import { Text } from "@nextui-org/react";
import { ReactElement } from "react";

export const PlaylistHeader = (props: any): ReactElement => {
  return (
    <>
       <Text
        h1
        size={40}
        css={{ textGradient: "45deg, $gray900 -20%, $gray100 50%" }}
        weight="thin"
        style={{width: "100%"}}
      >
        {props.playlistName}
      </Text>
    </>
  );
};
