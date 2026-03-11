import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "biometric-attendance",
    title: "Biometric Attendance Management System",
    period: {
      start: "2025",
    },
    link: "https://github.com/subhanmughal1/biometric-system",
    skills: [
      "Python",
      "Django",
      "SQLite3",
      "FastAPI",
      "REST API",
      "Biometric Integration",
      "Fingerprint",
      "Face Recognition",
    ],
    description: `A production biometric attendance management system integrating fingerprint and face recognition devices with a Django-based backend for real-time attendance tracking.

**Key Technical Achievements:**

- **Hardware Integration**: Integrated fingerprint and face recognition biometric devices directly with the Django backend for real-time attendance recording
- **REST API Layer**: Implemented FastAPI endpoints to handle secure device communication, enabling automated data synchronization between hardware and web application
- **Database Management**: Designed and managed SQLite3 schema for attendance logs, user records, and system reports, ensuring performance and reliability under concurrent operations
- **Real-time Tracking**: Built attendance tracking pipeline with automated reporting generation and data export features
- **End-to-End Deployment**: Handled complete system setup including hardware configuration, backend deployment, and client onboarding`,
    isExpanded: true,
  },
  {
    id: "django-student-management",
    title: "Django Student Management System",
    period: {
      start: "2024",
    },
    link: "https://github.com/subhanmughal1",
    skills: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "SQLite3",
      "Authentication",
      "CRUD",
      "Responsive Design",
    ],
    description: `A full-featured student management web application built with Django, featuring secure authentication and complete CRUD operations.

**Key Features:**

- **Authentication System**: Implemented secure user registration, login, and session management using Django's built-in auth framework
- **CRUD Operations**: Full create, read, update, and delete functionality for student records, courses, and grades
- **Responsive UI**: Built responsive frontend using HTML and CSS for consistent experience across all devices
- **Database Design**: Relational SQLite3 schema design with optimized queries for student, course, and enrollment data
- **Admin Panel**: Leveraged Django's admin interface for system-level management and data oversight`,
    isExpanded: false,
  },
  {
    id: "python-automation",
    title: "Python Automation & API Services",
    period: {
      start: "2025",
    },
    link: "https://github.com/subhanmughal1/python-automation",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "SQLite3",
      "REST API",
      "Automation",
      "Data Validation",
      "Logging",
    ],
    description: `A collection of automation scripts and RESTful API services built to streamline operational workflows and enable reliable data exchange between systems.

**Key Technical Achievements:**

- **Process Automation**: Developed Python scripts to automate repetitive operational tasks, significantly reducing manual effort and human error
- **Dual Framework APIs**: Built RESTful APIs using both FastAPI and Flask to serve different use-cases — FastAPI for high-performance async endpoints, Flask for lightweight integration services
- **Biometric Device APIs**: Created dedicated endpoints for data exchange between biometric hardware and backend systems
- **Data Pipeline**: Implemented structured data validation, error logging, and processing pipelines for reliable and auditable system operations
- **Workflow Integration**: Connected disparate systems through standardized API contracts with JSON-based data exchange`,
    isExpanded: false,
  },
];