import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section>
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnyD_sI0VU6P2v4AY5kYxULF17SFPrhFJBSOMZB8jHzqUu4iURftq9XFPFZvTmBd7CbFe-sr67YI1AHsuiygXLwgSzEmTVhjjwwh38t185u1bpqNXAyZNeO9mm3bvj9lf3x7BrftNxyzgh2R34LIg2uuL_DVEc129yhKNpiW-jwFH6ByXZW7VW4k5kQWXIhO2V5eNhDkK28rxXfBvMkOU5hPivMpDedHcfi6m__AYTykWFB46bM0_XyZyP9XRxCD2JWgRbPIOYkmto')`,
        }}
      >
        <div className="flex flex-col gap-2 text-center max-w-3xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Be the Change. Volunteer with DSWS.
          </h1>
          <h2 className="text-white/90 text-sm font-normal leading-normal sm:text-base">
            Join our mission to empower communities and create a lasting impact.
          </h2>
        </div>
        <Button variant="primary" size="lg">
          Apply Now
        </Button>
      </div>
    </section>
  );
}
