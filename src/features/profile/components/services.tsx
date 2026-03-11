import { CodeIcon, CpuIcon, ServerIcon, ZapIcon } from "lucide-react";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const SERVICES = [
  {
    icon: ServerIcon,
    title: "Web Application Development",
    description:
      "Custom backend systems built with Django and FastAPI — scalable, secure, and production-ready. From architecture design to deployment.",
    tags: ["Django", "FastAPI", "Flask", "Python"],
  },
  {
    icon: CodeIcon,
    title: "API Development & Integration",
    description:
      "Secure, well-documented REST APIs and third-party service integrations. Designed for reliability and ease of consumption.",
    tags: ["REST API", "FastAPI", "JSON", "API Integration"],
  },
  {
    icon: CpuIcon,
    title: "Biometric System Integration",
    description:
      "End-to-end fingerprint and face recognition device configuration, backend integration, and client deployment support.",
    tags: ["Fingerprint", "Face Recognition", "Hardware", "SQLite3"],
  },
  {
    icon: ZapIcon,
    title: "Python Automation",
    description:
      "Process automation scripts that eliminate repetitive tasks, reduce errors, and free up your team for higher-value work.",
    tags: ["Python", "Automation", "Scripting", "Workflow"],
  },
];

export function Services() {
  return (
    <Panel id="services">
      <PanelHeader>
        <PanelTitle>Services</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-lg border border-edge bg-muted/30 p-5 transition-colors hover:bg-muted/60"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-edge bg-background text-foreground">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="font-medium leading-tight">{service.title}</h3>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-edge bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}