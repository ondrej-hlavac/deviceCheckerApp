import React, { useEffect, useState } from "react";
import { API_PHONES } from "../constants/Api";
import { Text } from "./Themed";

export function DevicesList() {
  //   const [devices, setDevices] = useState([]);

  const getDevices = async () => {
    const res = await fetch(API_PHONES);
    console.log(
      "🚀 ~ file: DevicesList.tsx ~ line 9 ~ getDevices ~ res",
      res.json()
    );
  };

  useEffect(() => {
    getDevices();
  }, []);

  return <Text>aha</Text>;
}
