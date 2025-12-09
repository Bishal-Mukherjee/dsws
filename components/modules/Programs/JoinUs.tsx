import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";

const buttonVariants = cva("w-56 h-12 rounded-3xl text-md font-semibold", {
  variants: {
    variant: {
      donate: "bg-[#0a2a43] border-none hover:bg-[#084061] text-white",
      involved: "bg-[#f4a261] text-[#0a2a43] border-none hover:bg-[#e07b3f]",
    },
  },
  defaultVariants: {
    variant: "donate",
  },
});

export function JoinUs() {
  return (
    <div className="flex flex-col justify-end gap-6 items-center bg-white py-12 rounded-3xl">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-black/80 text-3xl font-black max-w-2xl">
          Join Us in Making a Difference
        </h2>
        <p className="text-black/80 text-lg max-w-2xl">
          Your support can help us continue our work and create a brighter
          future for communities in need.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center items-center">
        <Button className={buttonVariants()}>Donate Now</Button>
        <Button className={buttonVariants({ variant: "involved" })}>
          Get Involved
        </Button>
      </div>
    </div>
  );
}
