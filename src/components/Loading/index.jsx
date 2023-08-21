import { Spin } from "antd";
import React from "react";
import { styled } from "styled-components";
const DivLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <DivLoading className="load">
      <Spin />
    </DivLoading>
  );
};

export default Loading;
