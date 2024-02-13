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
      const response = await fetch("http://127.0.0.1:5000/customer");
      const data = await response.json();
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

// export async function updatePost(updatedPost) {
//   const response = await fetch(
//     `http://localhost:3000/posts/${updatedPost.id}`,
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedPost),
//     }
//   );
//   return response.json();
// }

// export async function deletePost(id) {
//   const response = await fetch(`http://localhost:3000/posts/${id}`, {
//     method: "DELETE",
//   });
//   return response.json();
// }
