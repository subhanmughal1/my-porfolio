import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "Mozzine Technologies",
    companyName: "Mozzine Technologies",
    companyLogo: "/logo.svg",
    positions: [
      {
        id: "full-stack-developer-mozzine",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "07.2025",
          end: undefined,
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Backend and hardware integration role focused on biometric systems and API development.

**Responsibilities:**

- **Biometric Backend**: Designed backend logic for biometric attendance systems using Python and Django, managing attendance data processing and SQLite3 database operations
- **API Development**: Built and integrated REST APIs using FastAPI/Flask to enable secure communication between biometric devices and web applications
- **Hardware Support**: Delivered end-to-end support for biometric hardware, resolving fingerprint/face recognition, synchronization, and deployment issues for clients
- **Technical Troubleshooting**: Diagnosed and resolved complex hardware-software integration issues across client deployments
`,
        skills: [
          "Python",
          "Django",
          "FastAPI",
          "Flask",
          "SQLite3",
          "REST API",
          "Biometric Integration",
          "Fingerprint Systems",
          "Face Recognition",
          "HTML",
          "CSS",
          "Git",
          "Postman",
          "Technical Support",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];