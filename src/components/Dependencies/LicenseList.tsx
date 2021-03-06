import React from "react";
import { FlatList, FlatListProps } from "react-native";
import { LicensesType } from "../../utils/getLicensesFromJSON";

// TODO: Add dark mode support
const LicenseList = ({ ...rest }: FlatListProps<LicensesType>): JSX.Element => {
  return <FlatList {...rest} keyExtractor={({ key }) => key} />;
};

export default LicenseList;
