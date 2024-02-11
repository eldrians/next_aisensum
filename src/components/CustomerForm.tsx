"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COLOR_ITEMS } from "@/constants";
import { cn } from "@/libs/utils";
import { api } from "@/libs/api";
// import { usePostCustomer } from "@/hooks/landing-page/hook";

//tanstack
import {
  useQuery,
  useIsFetching,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createCustomer } from "@/app/api/customer";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  username_ig: z.string().min(2, {
    message: "username must be at least 2 characters.",
  }),
  fav_color: z.string(),
});

const CustomerForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username_ig: "",
      fav_color: "",
    },
  });

  // const { mutate } = usePostCustomer();

  const queryClient = useQueryClient();

  // const { mutateAsync: addCustomerMutation } = useMutation({
  //   mutationFn: async (data: any): Promise<any> => {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     const newCustomer = {
  //       name: data.name,
  //       username_ig: data.username_ig,
  //       fav_color: data.fav_color,
  //     };

  //     api.post("customer", newCustomer);
  //     return newCustomer;
  //   },
  //   onSuccess: ()=> {
  //     queryClient.invalidateQueries({queryKey:["customer"]})
  //   }
  // });

  const addCustomerMutation = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      console.log("Customer Form:", data);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      return await api.post("customer", formData);
    },
    onSuccess: () => {
      console.log("Berhasil anjay");
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },
  });
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // mutation.mutate(data, {
    //   onSuccess: () => {
    //     console.log("Added CustomerForm");
    //     // form.reset();
    //     // form.setValue("name", "");
    //     // form.setValue("username_ig", "");
    //     // form.setValue("fav_color", "");
    //   },
    //   onError: (error) => {
    //     console.log("Error CustomerForm");
    //   },
    // });
    mutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-4 lg:p-0 space-y-4 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name..." {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username_ig"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username IG</FormLabel>
                <FormControl>
                  <Input
                    placeholder="username ig..."
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fav_color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Favourite Color</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position="popper">
                    {COLOR_ITEMS.map((color) => (
                      <SelectItem value={color.hex} key={color.hex}>
                        <div className="flex flex-row gap-2 items-center">
                          <div
                            style={{ backgroundColor: color.hex }}
                            className="h-3 w-3 rounded-full border border-slate-400"
                          />
                          <div className="text-xs capitalize">
                            {color.color}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CustomerForm;
