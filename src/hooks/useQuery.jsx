import React, { useEffect, useState } from "react";

const useQuery = (promise, dependencise = []) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  const fetching = async (id) => {
    try {
      const res = await promise(id);
      setData(res?.data?.result);
      if (res) {
        setData(res?.data?.result);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      console.log("error", error);
    } finally {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, dependencise);
  return { data, error, isLoading, refetch: fetching };
};

export default useQuery;
