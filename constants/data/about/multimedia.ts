export interface MediaItem {
  type?: string;
  title: string;
  description: string;
  source: string;
  thumbnail: string;
  date?: string;
  duration?: string;
}

export interface ShowcaseImage {
  src: string;
  alt: string;
  caption: string;
}

export interface MediaSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MediaItem[];
}

export const organizationMedia: MediaSection[] = [
  {
    id: "org-story",
    title: "Our Story",
    subtitle: "Discover the heart and soul of our mission",
    items: [
      {
        title: "Why We Exist",
        description:
          "A journey through our mission, values, and the communities we serve. Watch how we're making a difference in the lives of thousands.",
        source: "/media/dsws_video_1.mp4",
        thumbnail: "/media/video_1_thumbnail.png",
        duration: "07:42",
      },
    ],
  },
  {
    id: "media-coverage",
    title: "In The News",
    subtitle: "Recent highlights and media coverage",
    items: [
      {
        type: "news-clip",
        title: "Udaan — Sports for All",
        description:
          "Udaan is our initiative to make sports and athletics accessible to every child, regardless of background. Through friendly competition and shared play, we inspire the next generation to dream bigger, move freely, and discover the joy of athleticism.",
        source: "/media/dsws_video_2.mp4",
        thumbnail: "/media/video_2_thumbnail.png",
        date: "January 12, 2026",
        duration: "00:52",
      },
    ],
  },
];

export const showcaseImages: ShowcaseImage[] = [
  {
    src: "/media/gallery/pevdlqdlpyxg.jpg",
    alt: "Udaan - Sports for All",
    caption: "Udaan - Sports for All",
  },
  {
    src: "/media/gallery/fntli0oixvpzzkpxvbvg.jpg",
    alt: "Child Protection & Education",
    caption: "Child Protection & Education",
  },
  {
    src: "/media/gallery/hma4ts8ziqfh7ptsc7bd.jpg",
    alt: "Volunteers working together",
    caption: "Volunteer Day",
  },
  {
    src: "/media/gallery/m4l9qkq9fjfckq6wpesa.jpg",
    alt: "Levlihoods",
    caption: "Levlihoods Development",
  },
  {
    src: "/media/gallery/vv3xzciyxxrwi0mgvxwz.jpg",
    alt: "Disaster Risk Reduction",
    caption: "Disaster Risk Reduction",
  },
];
