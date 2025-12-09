import { cn } from "@/lib/utils";
import Image from "next/image";

interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  images: string[];
  alignRight?: boolean;
}

const milestones: JourneyMilestone[] = [
  {
    year: "2010",
    title: "Foundation Laid",
    description:
      "DSWS was founded with a mission to empower rural communities through education.",
    images: [],
    alignRight: false,
  },
  {
    year: "2014",
    title: "First Major Project",
    description:
      "Launched the 'Light Up a Village' initiative, bringing solar power to 10 remote villages.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7UVbqzp8DGanrmSSDGHjI4joYBh-uu5wlKuKGtuM840wSH_1fhLyswwmEtxUIgmuDTLU0mgKcWP18R0SwrbfOIGP0rXl_fMmO49UijnmC1tosBRl7dcCcnzAZu9BEjaEEf2Mpag-ZCfWqLs4Eo1XptRa4-LRG395aqR667U3sLMvSAqVbin44GJZ3eH2PBc2ixTlMHX_w-FSwlGLDvHiD8PErZhUW_foSJDFf_X3IQhRsDWhobVYHHm_2cyJjgY6huz3Qu1FMUjGI",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_R6ty0XO9CZsAhrAbTg6ycT_HJUGIunjIN8clwJitbNbvOGWJXDpEmjVreIShgwvawywnZy7CuGsvDxC4LCyvoRuRhJNHYfIZxyW0ScDj1CVnPVk0FFPi9jJMW_WZ7VMEsCZA3YTi3R4fnXjvZkX8LAcKszKp6Keky4NZWXXh11WjFxxwCRpc-7C3PBBZ7vuDMQ199-zfIeIsde_kRBxkdhK718NEQOPCvMgExFFx6MdZcFMwVkg8zGdMF_0xS_V__G_2DVroBrqg",
    ],
    alignRight: true,
  },
  {
    year: "2018",
    title: "Women Empowerment Center",
    description:
      "Established a dedicated center for vocational training, empowering over 500 women.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRYU2k9baDFOCW7VP1cWdHO3W-TPlr1VBSiSqRHMVbZYb0aKgsTudQbJAzlMMLSN4ZyTTszg2wJKRD0GZ5d7Vz49PSYryf_hEDnouGzhAepU-pRBS1_iz7vxGadVbfWE0PPIooT1GolR0mxLkG26r12DcTDHNNtzCxU01QTDa4YZy5caQC6qcPvfP77lYi03xbMNGEcgu5QtZI4FaYorsFdFOpcWv0g1K7Wo9KdlRuBjRMhbZS0kyADyI2-xpj1zpuomnTj6Fqrn4W",
    ],
    alignRight: false,
  },
  {
    year: "2022",
    title: "Digital Literacy Program",
    description:
      "Introduced computer education in partner schools, bridging the digital divide.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClSkjIUkLQSLbTKup-dX7PZH7nAsDdj8ScPDaKATAsvPLoMO2jNYnyTMc3Kx6atAjfIwYWSqQzGplpAcYKinI9YuNBd10kz9VMfWHkdeubbRIdOTmQCh64qNLwBOQDLbfyAaTtW90TZI3J2XpQ8hxv9mNp0WYJ0Jwn7-GbR9_feU_XE052t_ILyyqUyDrZIGwAU3caoXPpKJqlnlXh_RmgmuOaS_qWRvJK1IN9xtJkw4eSfuoA0vBl_iLa6erssNr8NV-BJDdmzbaX",
    ],
    alignRight: true,
  },
];

export function Journey() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
          Our Journey
        </h2>
        <p className="text-[#61896f] dark:text-white/60">
          Tracing our path from a humble beginning to a beacon of hope.
        </p>
      </div>

      <div className="relative py-6">
        <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-[#dbe6df] dark:bg-white/10 md:-translate-x-1/2" />

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start"
            >
              <div className="md:hidden flex gap-6 w-full">
                <div className="relative shrink-0">
                  <div className="size-4 rounded-full bg-[#54ec63] border-4 border-white mt-4 ml-[25px]" />
                </div>

                <div className="flex-1 pb-8 -mt-1.5 ml-[-15px]">
                  <div className="p-6 py-4 rounded-xl border border-[#dbe6df] dark:border-white/10 bg-white dark:bg-background-dark">
                    <p className="text-[#54ec63] font-bold">{milestone.year}</p>
                    <h3 className="text-lg font-bold text-black/80 dark:text-white mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#61896f] dark:text-white/60 mt-2">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:w-full md:items-start">
                <div
                  className={cn("w-1/2", {
                    "pr-8 text-right": milestone.alignRight,
                    "order-2 pl-8": !milestone.alignRight,
                  })}
                >
                  <div className="p-6 py-4 -mt-1.5 rounded-xl border border-[#dbe6df] dark:border-white/10 bg-white dark:bg-background-dark">
                    <p className="text-[#54ec63] font-bold">{milestone.year}</p>
                    <h3 className="text-lg font-bold text-black/80 dark:text-white mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#61896f] dark:text-white/60 mt-2">
                      {milestone.description}
                    </p>

                    {milestone.images && milestone.images.length > 0 && (
                      <div
                        className={`mt-4 grid ${
                          milestone.images.length === 1
                            ? "grid-cols-1"
                            : "grid-cols-2"
                        } gap-2`}
                      >
                        {milestone.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={cn(
                              "relative w-full rounded-lg overflow-hidden",
                              {
                                "aspect-video": milestone.images.length === 1,
                                "aspect-square": milestone.images.length > 1,
                              }
                            )}
                          >
                            <Image
                              src={img}
                              alt={`${milestone.title} image ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute left-1/2 top-4 size-4 rounded-full bg-[#54ec63] border-4 border-white -translate-x-1/2 z-10" />

                <div
                  className={cn("w-1/2", {
                    "pr-8": !milestone.alignRight,
                    "order-2 pl-8": milestone.alignRight,
                  })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
