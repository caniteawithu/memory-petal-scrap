import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const deleteGuestbookMessage = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z
      .object({
        id: z.string().uuid(),
        token: z.string().min(1).max(200),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const adminToken = process.env.GUESTBOOK_ADMIN_TOKEN;
    if (!adminToken || data.token !== adminToken) {
      throw new Error("Unauthorized");
    }
    const { error } = await supabaseAdmin
      .from("guestbook_messages")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  });
