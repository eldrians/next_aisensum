"use client";

import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

type TCustomer = {
  name: string;
  username_ig: string;
  fav_color: string;
};

export const usePostCustomer = (): UseMutationResult<any> => {
  return useMutation({
    mutationFn: async (data: any) =>
      await fetch("http://127.0.0.1:5000/customer", data),
  });
};
