import Image from "next/image";

interface Story {
  image: string;
  imageAlt: string;
  title: string;
  quote: string;
}

const stories: Story[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_R6ty0XO9CZsAhrAbTg6ycT_HJUGIunjIN8clwJitbNbvOGWJXDpEmjVreIShgwvawywnZy7CuGsvDxC4LCyvoRuRhJNHYfIZxyW0ScDj1CVnPVk0FFPi9jJMW_WZ7VMEsCZA3YTi3R4fnXjvZkX8LAcKszKp6Keky4NZWXXh11WjFxxwCRpc-7C3PBBZ7vuDMQ199-zfIeIsde_kRBxkdhK718NEQOPCvMgExFFx6MdZcFMwVkg8zGdMF_0xS_V__G_2DVroBrqg",
    imageAlt: "A young girl smiling brightly while holding a book.",
    title: "Priya's Journey to Education",
    quote:
      "Thanks to DSWS, I am the first girl in my family to go to school. I dream of becoming a teacher.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRYU2k9baDFOCW7VP1cWdHO3W-TPlr1VBSiSqRHMVbZYb0aKgsTudQbJAzlMMLSN4ZyTTszg2wJKRD0GZ5d7Vz49PSYryf_hEDnouGzhAepU-pRBS1_iz7vxGadVbfWE0PPIooT1GolR0mxLkG26r12DcTDHNNtzCxU01QTDa4YZy5caQC6qcPvfP77lYi03xbMNGEcgu5QtZI4FaYorsFdFOpcWv0g1K7Wo9KdlRuBjRMhbZS0kyADyI2-xpj1zpuomnTj6Fqrn4W",
    imageAlt: "A woman confidently working at a sewing machine.",
    title: "Sunita's New Beginning",
    quote:
      "The tailoring program gave me the skills to start my own business. I can now support my children's dreams.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7UVbqzp8DGanrmSSDGHjI4joYBh-uu5wlKuKGtuM840wSH_1fhLyswwmEtxUIgmuDTLU0mgKcWP18R0SwrbfOIGP0rXl_fMmO49UijnmC1tosBRl7dcCcnzAZu9BEjaEEf2Mpag-ZCfWqLs4Eo1XptRa4-LRG395aqR667U3sLMvSAqVbin44GJZ3eH2PBc2ixTlMHX_w-FSwlGLDvHiD8PErZhUW_foSJDFf_X3IQhRsDWhobVYHHm_2cyJjgY6huz3Qu1FMUjGI",
    imageAlt: "A community gathered around a newly installed water pump.",
    title: "A Village Transformed",
    quote:
      "Clean water was a distant dream. DSWS made it a reality, bringing health and hope to our entire village.",
  },
];

export default function StoriesOfChange() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
            Stories of Change
          </h2>
          <p className="text-[#61896f] dark:text-white/60">
            Read about the lives we&apos;ve transformed together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl overflow-hidden border border-[#dbe6df] dark:border-white/10 bg-white dark:bg-background-dark"
            >
              <div className="relative h-48 w-full">
                <Image
                  className="object-cover"
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-black/80 dark:text-white text-lg font-bold">
                  {story.title}
                </h3>
                <p className="text-[#61896f] dark:text-white/60 text-sm">
                  &quot;{story.quote}&quot;
                </p>
                <a
                  className="text-primary font-bold text-sm mt-2 hover:underline cursor-pointer"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
