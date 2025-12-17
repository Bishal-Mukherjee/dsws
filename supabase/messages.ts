import { supabaseClient } from "@/supabase/config";

export interface ContactMessage {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export async function saveContactMessage(
  data: ContactMessage
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseClient.from("messages").insert([
      {
        full_name: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Error saving contact message:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected error saving contact message:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
