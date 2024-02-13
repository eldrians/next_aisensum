"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useQueryClient } from "@tanstack/react-query";

// shadcn
import * as UI from "@/components/ui";

// constants
import { COLOR_ITEMS } from "@/constants";

//api
import { addCustomer } from "@/app/api/customer";

// schema
import { CustomerSchema } from "@/libs/schema/customer";

const CustomerForm = () => {
  const { mutate } = addCustomer();
  const queryClient = useQueryClient();
  const { toast } = UI.useToast.useToast();

  const form = useForm<z.infer<typeof CustomerSchema>>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      name: "",
      username_ig: "",
      fav_color: "",
    },
  });

  const onSubmit = (data: z.infer<typeof CustomerSchema>) => {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Add Customer 😉",
        });
        queryClient.invalidateQueries({ queryKey: ["customer"] });
        form.reset();
        form.setValue("name", "");
        form.setValue("username_ig", "");
        form.setValue("fav_color", "");
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      },
    });
  };

  return (
    <UI.form.Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-4 lg:p-0 space-y-4 w-full">
          <UI.form.FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <UI.form.FormItem>
                <UI.form.FormLabel>Name</UI.form.FormLabel>
                <UI.form.FormControl>
                  <UI.input.Input
                    placeholder="name..."
                    {...field}
                    className="w-full"
                  />
                </UI.form.FormControl>
                <UI.form.FormMessage />
              </UI.form.FormItem>
            )}
          />
          <UI.form.FormField
            control={form.control}
            name="username_ig"
            render={({ field }) => (
              <UI.form.FormItem>
                <UI.form.FormLabel>Username IG</UI.form.FormLabel>
                <UI.form.FormControl>
                  <UI.input.Input
                    placeholder="username ig..."
                    {...field}
                    className="w-full"
                  />
                </UI.form.FormControl>
                <UI.form.FormMessage />
              </UI.form.FormItem>
            )}
          />
          <UI.form.FormField
            control={form.control}
            name="fav_color"
            render={({ field }) => (
              <UI.form.FormItem>
                <UI.form.FormLabel>Favourite Color</UI.form.FormLabel>
                <UI.select.Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <UI.form.FormControl>
                    <UI.select.SelectTrigger>
                      <UI.select.SelectValue placeholder="Select Color" />
                    </UI.select.SelectTrigger>
                  </UI.form.FormControl>
                  <UI.select.SelectContent position="popper">
                    {COLOR_ITEMS.map((color) => (
                      <UI.select.SelectItem value={color.hex} key={color.hex}>
                        <div className="flex flex-row gap-2 items-center">
                          <div
                            style={{ backgroundColor: color.hex }}
                            className="h-3 w-3 rounded-full border border-slate-400"
                          />
                          <div className="text-xs capitalize">
                            {color.color}
                          </div>
                        </div>
                      </UI.select.SelectItem>
                    ))}
                  </UI.select.SelectContent>
                </UI.select.Select>
                <UI.form.FormMessage />
              </UI.form.FormItem>
            )}
          />
          <UI.button.Button type="submit" className="w-full">
            Submit
          </UI.button.Button>
        </div>
      </form>
    </UI.form.Form>
  );
};

export default CustomerForm;
