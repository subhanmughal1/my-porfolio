import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Muhammad",
  lastName: "Subhan",
  displayName: "Subhan",
  username: "subhanmughal1",
  gender: "male",
  pronouns: "he/him",
  bio: "Building scalable web applications and integrating real-world hardware solutions with Python.",
  flipSentences: [
    "Full-Stack Developer · Python Focused",
    "Backend · APIs · Biometric Systems",
    "Django · FastAPI · Flask",
    "Automation · Hardware Integration",
  ],
  address: "Narowal, Punjab, Pakistan",
  phoneNumber: "MDMwNy01ODYxMTQ4", // 0307-5861148 base64
  email: "c3ViaGFubXVnaGFsOTMxQGdtYWlsLmNvbQ==", // subhanmughal931@gmail.com base64
  jobTitle: "Full-Stack Developer (Python Focused)",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Mozzine Technologies",
      website: "https://mozzine.com",
    },
  ],
  about: `
Hey, I'm Muhammad Subhan — a Full-Stack Developer with strong expertise in Python-based backend development and real-world hardware integration.

I specialize in building backend systems using **Django**, **FastAPI**, and **Flask**, along with front-end development using HTML and CSS. My work spans REST API design, SQLite3 database management, automation scripting, and **biometric hardware integration** — including fingerprint and face recognition systems.

Currently working at **Mozzine Technologies**, where I design backend logic for biometric attendance systems, build secure APIs for device communication, and provide end-to-end technical support for hardware deployments.

I hold a **Bachelor of Science in Computer Science** from the University of Narowal (2021–2025). I'm passionate about building efficient, scalable, and secure applications while continuously learning modern development practices.

If you're building something that needs reliable backend systems or hardware-software integration — let's talk.
`,
  avatar: "/avatar.jpeg",
  ogImage: "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475",
  dateCreated: "2025-07-01",
};