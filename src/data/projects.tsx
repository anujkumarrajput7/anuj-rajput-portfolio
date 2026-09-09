import SlideShow from "@/components/slide-show";

import { Button } from "@/components/ui/button";

import { TypographyH3, TypographyP } from "@/components/ui/typography";

import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

import { ReactNode } from "react";

import { RiNodejsFill, RiReactjsFill } from "react-icons/ri";

import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ repo }: { repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },

  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },

  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },

  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },

  express: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },

  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },

  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },

  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];

  skills: {
    frontend: Skill[];
    backend: Skill[];
  };

  content: React.ReactNode | any;

  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "rentifyy",

    category: "Product Rental Platform",

    title: "Rentifyy",

    src: "/assets/projects-screenshots/rentifyy/rentifyy1.png",

    screenshots: [
      "rentifyy1.png",
      "rentifyy2.png",
      "rentifyy3.png",
      "rentifyy4.png",
      "rentifyy5.png",
      "rentifyy6.png",
      "rentifyy7.png",
      "rentifyy8.png",
      "rentifyy9.png",
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },

    github: "https://github.com/anujkumarrajput7/rentifyy-final",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Product Rental Platform
          </TypographyP>

          <TypographyP className="font-mono">
            Rentifyy is a full-stack product rental platform designed to allow
            users to rent everyday products such as furniture, cars, bikes,
            ACs, TVs, refrigerators and other useful products.
          </TypographyP>

          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            How Rentifyy Works
          </TypographyH3>

          <p className="font-mono mb-2">
            Users can browse available products, select a product they want to
            rent and complete the required payment. After using the product
            during the rental period, the user can return it according to the
            platform&apos;s rental conditions.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Product-Based Rental Model
          </TypographyH3>

          <p className="font-mono mb-2">
            The platform follows a product-value-based rental concept. The
            user pays the required product amount at the beginning and, after
            successfully returning the product according to the applicable
            conditions, the eligible product amount can be returned.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Product Screenshots
          </TypographyH3>

          <SlideShow
            images={[
              `${BASE_PATH}/rentifyy/rentifyy1.png`,
              `${BASE_PATH}/rentifyy/rentifyy2.png`,
              `${BASE_PATH}/rentifyy/rentifyy3.png`,
              `${BASE_PATH}/rentifyy/rentifyy4.png`,
              `${BASE_PATH}/rentifyy/rentifyy5.png`,
              `${BASE_PATH}/rentifyy/rentifyy6.png`,
              `${BASE_PATH}/rentifyy/rentifyy7.png`,
              `${BASE_PATH}/rentifyy/rentifyy8.png`,
              `${BASE_PATH}/rentifyy/rentifyy9.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Product Categories
          </TypographyH3>

          <p className="font-mono mb-2">
            The platform is designed to support different categories including
            furniture, cars, bikes, air conditioners, televisions,
            refrigerators and other rental products.
          </p>
        </div>
      );
    },
  },

  {
    id: "collab-platform",

    category: "Influencer & Brand Collaboration",

    title: "Collab Platform",

    src: "/assets/projects-screenshots/collab-platform/collab1.png",

    screenshots: [
      "collab1.png",
      "collab2.png",
      "collab3.png",
      "collab4.png",
      "collab5.png",
      "collab6.png",
      "collab7.png",
      "collab8.png",
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },

    github: "https://github.com/anujkumarrajput7/collab-platform",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Influencer & Brand Collaboration Platform
          </TypographyP>

          <TypographyP className="font-mono">
            Collab Platform is a full-stack platform designed to connect
            companies and influencers for marketing campaigns and
            collaborations.
          </TypographyP>

          <ProjectsLinks repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Campaign Creation
          </TypographyH3>

          <p className="font-mono mb-2">
            Companies can create startups and marketing campaigns with
            campaign details, supported social platforms, follower
            requirements and budgets.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Influencer Applications
          </TypographyH3>

          <p className="font-mono mb-2">
            Influencers can apply to campaigns and submit a cover message
            along with their proposed collaboration price.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Authentication & User Roles
          </TypographyH3>

          <p className="font-mono mb-2">
            The backend provides authentication and role-based workflows for
            different types of users, including companies and influencers.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Communication & Reviews
          </TypographyH3>

          <p className="font-mono mb-2">
            The platform includes APIs for messaging and reviews, allowing
            users to communicate and provide feedback around collaborations.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Payment Workflow
          </TypographyH3>

          <p className="font-mono mb-2">
            A payment workflow is included in the backend. Payment processing
            is currently simulated and can be connected to a real payment
            provider in a future version.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Project Screenshots
          </TypographyH3>

          <SlideShow
            images={[
              `${BASE_PATH}/collab-platform/collab1.png`,
              `${BASE_PATH}/collab-platform/collab2.png`,
              `${BASE_PATH}/collab-platform/collab3.png`,
              `${BASE_PATH}/collab-platform/collab4.png`,
              `${BASE_PATH}/collab-platform/collab5.png`,
              `${BASE_PATH}/collab-platform/collab6.png`,
              `${BASE_PATH}/collab-platform/collab7.png`,
              `${BASE_PATH}/collab-platform/collab8.png`,
            ]}
          />
        </div>
      );
    },
  },
];

export default projects;