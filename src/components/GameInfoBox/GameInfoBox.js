import React from "react";
import { Descriptions } from "antd";
import { showBoatsStillFloating } from "./helper-functions";

export const GameInfoBox = () => {
  return (
    <Descriptions>
      <Descriptions.Item label="Boats: ">
        {showBoatsStillFloating()}
      </Descriptions.Item>
    </Descriptions>
  );
};
