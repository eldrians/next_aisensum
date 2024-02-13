import { api } from "@/libs/api";
import { TCustomer } from "@/types/Customer";
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

export const getCustomers = (): UseQueryResult => {
  return useQuery<TCustomer[]>({
    queryKey: ["customer"],
    queryFn: async () => {
      const { data } = await api.get("/customer");
      return data.payload || [];
    },
  });
};

export const addCustomer = (): UseMutationResult => {
  return useMutation({
    mutationFn: async (data: any) => {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      return await api.post("customer", formData);
    },
  });
};

export const updateCustomer = () => {
  return useMutation({
    mutationFn: async ({
      data,
      customerId,
    }: {
      data: any;
      customerId: any;
    }) => {
      console.log(data);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      return await api.patch(`/customer/patch/${customerId}`, formData);
    },
  });
};

export const deleteCustomer = () => {
  return useMutation({
    mutationFn: async (customerId: any) => {
      return await api.delete(`/customer/${customerId}`);
    },
  });
};
