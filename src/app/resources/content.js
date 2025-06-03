import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kusemererwa",
  lastName: "Edson",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Systems Engineer",
  avatar: "/images/avatar.jpg",
  email: "kusemererwaedson2000@gmail.com",
  location: "Africa/Kampala", 
  languages: ["English", "Runyoro"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Software Engineering, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kusemererwaedson",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/kusemererwa-edson-ba727527a",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Automating Business process through powerful Software Systems</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">MultiVendor Ecommerce</strong></>,
    href: "/work/multi-vendor-ecommerce-system",
  },
  subline: (
    <>
      I'm Edson, a Software systems engineer at Cygnus Automation Limited, 
      <br />where We build software systems that automate business processes
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Edson is a Uganda-based software systems engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2021 - Present",
        role: "Software systems Engineer",
        achievements: [
          <>
            Contributed to building of Unicef Malawi workflow software system
          </>,
          <>
            Built a Multivendor Ecommerce System that enables vendors to showcase their products on the platform so buyers can buy them and make online transactions .
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/admin3.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Hakateq Solutions",
        timeframe: "2022 - 2025",
        role: "Lead Developer",
        achievements: [
          <>
            Contributed to building of Unicef Malawi workflow software system
          </>,
          <>
            Built a Multivendor Ecommerce System that enables vendors to showcase their products on the platform so buyers can buy them and make online transactions .
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lira University",
        description: <>Studied computer Science.</>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Laravel",
        description: <>Able to build powerful API's that can be integrated in multiple framewroks and platforms</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/admin3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/admin3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/next.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/hero-desktop.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/admin3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/iconadmin1.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/next.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
