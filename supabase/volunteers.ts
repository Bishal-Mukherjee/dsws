import { supabaseClient } from "@/supabase/config";

export interface VolunteerApplication {
  fullName: string;
  email: string;
  phoneNumber: string;
  availability: string;
  motivation: string;
}

export async function saveVolunteerApplication(
  data: VolunteerApplication
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseClient
      .from("volunteer_applications")
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone_number: data.phoneNumber,
          availability: data.availability,
          motivation: data.motivation,
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error("Error saving volunteer application:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected error saving volunteer application:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
