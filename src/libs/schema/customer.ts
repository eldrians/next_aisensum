import { z } from "zod";

export const CustomerSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  username_ig: z.string().min(2, {
    message: "username must be at least 2 characters.",
  }),
  fav_color: z.string(),
});
