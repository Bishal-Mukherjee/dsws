import { Button } from "@/components/ui/button";
import { VolunteerDialog } from "@/components/common/VolunteerDialog";

export function HeroSection() {
  return (
    <section>
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuClSkjIUkLQSLbTKup-dX7PZH7nAsDdj8ScPDaKATAsvPLoMO2jNYnyTMc3Kx6atAjfIwYWSqQzGplpAcYKinI9YuNBd10kz9VMfWHkdeubbRIdOTmQCh64qNLwBOQDLbfyAaTtW90TZI3J2XpQ8hxv9mNp0WYJ0Jwn7-GbR9_feU_XE052t_ILyyqUyDrZIGwAU3caoXPpKJqlnlXh_RmgmuOaS_qWRvJK1IN9xtJkw4eSfuoA0vBl_iLa6erssNr8NV-BJDdmzbaX')`,
        }}
      >
        <div className="flex flex-col gap-2 text-center max-w-3xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Creating Lasting Change Through Compassion and Action
          </h1>
          <h2 className="text-white/90 text-sm font-normal leading-normal sm:text-base">
            Dhagagia Social Welfare Society is dedicated to empowering
            communities through education, social welfare, and sustainable
            development.
          </h2>
        </div>
        <VolunteerDialog>
          <Button variant="primary" size="lg">
            Join Our Mission
          </Button>
        </VolunteerDialog>
      </div>
    </section>
  );
}
