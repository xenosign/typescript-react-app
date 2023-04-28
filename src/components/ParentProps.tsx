import React from "react";
import Props from "./Props";

export interface MyProps {
  name: string;
  age: number;
  hobbies?: string[];
}

export default function ParentProps() {
  const tetz: MyProps = {
    name: "이효석",
    age: 39,
    hobbies: ["술마시기", "놀기"],
  };

  return (
    <>
      <Props {...tetz} />
    </>
  );
}
