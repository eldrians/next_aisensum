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
import { useAddCustomer, useUpdateCustomer } from "@/app/api/customer";

// schema
import { CustomerSchema } from "@/libs/schema/customer";
import { Pen, Plus } from "lucide-react";
import { useEffect } from "react";

const CustomerForm = ({ dataCustomer }: { dataCustomer?: any }) => {
  const addCustomerMutation = useAddCustomer();
  const updateCustomerMutation = useUpdateCustomer();
  const queryClient = useQueryClient();
  const { toast } = UI.useToast.useToast();

  useEffect(() => {
    if (dataCustomer) {
      form.setValue("name", dataCustomer.name || "");
      form.setValue("username_ig", dataCustomer.username_ig || "");
      form.setValue("fav_color", dataCustomer.fav_color || "");
    }
  }, []);

  const form = useForm<z.infer<typeof CustomerSchema>>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      name: "",
      username_ig: "",
      fav_color: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CustomerSchema>) => {
    try {
      if (dataCustomer) {
        await updateCustomerMutation.mutateAsync({
          data: data,
          customerId: dataCustomer["id"],
        });
        toast({
          title: "Update Success",
          description: "Customer Updated 😉",
        });
      } else {
        await addCustomerMutation.mutateAsync(data);
        toast({
          title: "Add Success",
          description: "Customer Added 😉",
        });
      }
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "error",
      });
    }
  };

  return (
    <div className="w-full">
      <UI.form.Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="p-4 lg:p-0 space-y-4 w-full">
            <UI.form.FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <UI.form.FormItem>
                  <UI.form.FormLabel className="flex">Name</UI.form.FormLabel>
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
                  <UI.form.FormLabel className="flex">
                    Username IG
                  </UI.form.FormLabel>
                  <UI.form.FormControl>
                    <UI.input.Input
                      placeholder="username ig..."
                      {...field}
                      className="w-full "
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
                  <UI.form.FormLabel className="flex flex-row gap-1 items-center">
                    <div>Favourite Color</div>
                    <div>
                      {dataCustomer ? (
                        <div className="text-xs font-thin flex flex-row gap-1 items-center">
                          default:
                          {COLOR_ITEMS.map((color) =>
                            dataCustomer?.fav_color === color.hex ? (
                              <>
                                <div
                                  key={color.hex}
                                  className="w-2 h-2 rounded-full border border-slate-400"
                                  style={{
                                    backgroundColor: dataCustomer?.fav_color,
                                  }}
                                />
                                ({color.color})
                              </>
                            ) : null
                          )}
                        </div>
                      ) : null}
                    </div>
                  </UI.form.FormLabel>
                  <UI.select.Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={form.getValues("fav_color") || ""}
                  >
                    <UI.form.FormControl>
                      <UI.select.SelectTrigger>
                        <UI.select.SelectValue
                          placeholder="Select Color"
                          defaultValue={form.getValues("fav_color")}
                        />
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
            <UI.button.Button
              type="submit"
              className="w-full"
              aria-label="submit customer"
            >
              {dataCustomer ? (
                <>
                  <Pen className="h-4 w-4 md:mr-2" />
                  Update Customer
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 md:mr-2" />
                  Add Customer
                </>
              )}
            </UI.button.Button>
          </div>
        </form>
      </UI.form.Form>
    </div>
  );
};

export default CustomerForm;
