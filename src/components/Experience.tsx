import React from "react";
import TitleText from "./TitleText";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Experience = () => {
  return (
    <div>
      <TitleText title="My Experience" />
      <StickyScroll content={content} />
    </div>
  );
};

export default Experience;

const content = [
  {
    title: "Full Stack Python Developer",
    description:
      "Building Centralized Data Enrichment Platform combines a Django backend with a Next.js frontend to provide a robust solution. Celery and Redis were integrated for handling background task with Celery logs utilized for error resolution. To optimize data scraping efficiency, Multiprocessing and asyncio were employed. The frontend utilizes ShadcnUI and TypeScript for enhanced user interface and functionality. Furthermore, the web crawler engine was scaled and automated using AWS Lambda, SQS, and S3, ensuring seamless and scalable data processing and storage capabilities in a cloud-native environment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white flex-col space-y-4">
        <p>InfoAnalytica</p>
        <p>Full Stack Python Developer</p>
        <p>Jan 2024 - Present</p>
      </div>
    ),
  },
  {
    title: "SDE Intern",
    description:
      "Developed frontend web pages using NEXTJS using Tailwind, CSS and nextUI. Loaded CSV data into a Node.js application with TypeScript,leveraging design patterns for scalability",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white flex-col space-y-4">
        <p>Stealth Startup</p>
        <p>SDE Intern</p>
        <p>Oct 2023 - Dec 2023</p>
      </div>
    ),
  },
  {
    title: "SDE Intern",
    description:
      "Designed and implemented a robust microservice backend in TypeScript for a stateless user authentication application, leveraging MongoDB to optimize data models for improved storage efficiency. The application was containerized using Docker and deployed on AWS EKS using node groups. I monitored the EKS cluster using Datadog Monitoring Tool to ensure performance and reliability. Additionally, I integrated AWS WebSocket API with AWS Lambda functions to manage and store connection IDs in DynamoDB",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white flex-col space-y-4">
        <p>Minfy Technologies</p>
        <p>SDE Intern</p>
        <p>June 2023 - Aug 2023</p>
      </div>
    ),
  },
  {
    title: "Backend Developer Intern",
    description:
      "Designed and implemented a relational database schema to manage multiple instructors, courses, leads (learner applications), and comments. Leveraging Node.js developed a RESTful API server that enabled essential functionalities: creating and updating course details such as name, maximum seats, and start date; facilitating course registration for learners through name, email, phone number, and LinkedIn profile submissions; allowing instructors to update lead statuses (Accept / Reject / Waitlist) and search leads by name or email; and enabling instructors to add comments to leads for improved communication. To enhance deployment flexibility and scalability, I dockerized both the server and database components, providing clear instructions in the README on using Docker commands for setup and including a script for loading test data.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white flex-col space-y-4">
        <p>AVIPL</p>
        <p>Backend Developer Intern</p>
        <p>Jan 2022 - April 2022</p>
      </div>
    ),
  },
];
