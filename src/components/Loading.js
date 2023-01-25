import React from "react";

export const Loading = ({ isLoading, isError }) => {
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error data not found</h1>;
  }
};
