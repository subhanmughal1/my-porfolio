import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap items-center justify-center gap-3 px-2 select-none sm:gap-4 sm:px-4 md:gap-6 md:px-6">
          {TECH_STACK.map((tech) => {
            // Generate a unique identifier for mapping
            const identifier =
              tech.key ||
              tech.title.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");

            // Determine if we should fetch from remote server or local public folder
            const isRemote = !!tech.key;

            // Map for local file names (updated with correct identifiers)
            const localFileMap: Record<string, string> = {
              // Subhan's local icons
              python: "python",
              html5: "html-5-svgrepo-com",
              css3: "css-3-svgrepo-com",
              django: "django",
              fastapi: "fastapi",
              flask: "flask-svgrepo-com",
              sqlite3: "sqlite-svgrepo-com",
              postman: "postman-icon-svgrepo-com",
              "vs-code": "vscode-svgrepo-com",
              github: "github",
              // Kept from original template
              "drizzle-orm": "drizzle-orm",
              mongoose: "mongoose",
              nestjs: "nestjs",
              postgresql: "postgresql",
              qdrantdb: "qdrantdb",
              zod: "zod",
              langchain: "langchain",
              langgraph: "langgraph",
              "better-auth": "better_auth",
              vercel: "vercel",
            };

            const localFileName = localFileMap[identifier] || identifier;

            // Build the appropriate image path
            const getImagePath = (variant?: "light" | "dark") => {
              if (isRemote) {
                // Fetch from remote server
                const suffix = variant ? `-${variant}` : "";
                return `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}${suffix}.svg`;
              } else {
                // Fetch from local public folder
                if (variant) {
                  // For themed icons, check your comment pattern
                  const themeVariant = variant === "light" ? "black" : "white";
                  return `/tech-icons/${localFileName}-${themeVariant}.svg`;
                }
                return `/tech-icons/${localFileName}.svg`;
              }
            };

            return (
              <li key={identifier} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                    className="transition-transform hover:scale-110 active:scale-95"
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          src={getImagePath("light")}
                          alt={`${tech.title} light icon`}
                          width={62}
                          height={62}
                          className="hidden h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={getImagePath("dark")}
                          alt={`${tech.title} dark icon`}
                          width={62}
                          height={62}
                          className="hidden h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={getImagePath()}
                        alt={`${tech.title} icon`}
                        width={62}
                        height={62}
                        className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}