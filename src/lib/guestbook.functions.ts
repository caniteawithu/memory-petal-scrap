import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { timingSafeEqual } from "node:crypto";
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
    if (!adminToken) throw new Error("Unauthorized");
    const provided = Buffer.from(data.token);
    const expected = Buffer.from(adminToken);
    if (
      provided.length !== expected.length ||
      !timingSafeEqual(provided, expected)
    ) {
      throw new Error("Unauthorized");
    }
    const { error } = await supabaseAdmin
      .from("guestbook_messages")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  });
