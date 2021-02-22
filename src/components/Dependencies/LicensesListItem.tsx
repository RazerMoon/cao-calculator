/* eslint-disable react/require-default-props */
import React from "react";

import { Avatar, List } from "react-native-paper";

import { StyleSheet, ViewStyle } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { LicensesType } from "../../utils/getLicensesFromJSON";

type Props = Omit<LicensesType, "parents" | "key"> & {
  onPress: (url: string) => void;
  leftStyle?: ViewStyle;
  rightStyle?: ViewStyle;
  style?: ViewStyle;
  iconName?: IconSource;
};

const styles = StyleSheet.create({
  avatar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,

    elevation: 5,
  },
});

const LicensesListItem = ({
  image,
  username,
  name,
  version,
  repository,
  licenses,
  onPress,
  style,
  leftStyle,
  rightStyle,
  iconName = "open-in-new",
}: Props): JSX.Element => {
  return (
    <List.Item
      title={name}
      description={`${version} • ${licenses} • ${username}`}
      style={{ margin: 5, ...style }}
      onPress={() => onPress(repository)}
      accessibilityComponentType=""
      accessibilityTraits=""
      left={(props) => (
        <Avatar.Image
          accessibilityComponentType=""
          accessibilityTraits=""
          {...props}
          style={{ ...styles.avatar, ...props.style, ...leftStyle }}
          source={{ uri: image }}
        />
      )}
      right={(props) => (
        <List.Icon
          {...props}
          style={{ alignSelf: "center", ...props.style, ...rightStyle }}
          icon={iconName}
        />
      )}
    />
  );
};

export default LicensesListItem;
