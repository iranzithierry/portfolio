"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/resources/data";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 pt-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => {
        return (
          <li key={index} className="relative flex flex-col items-start">
            <div
              className={
                "rounded-full h-14 w-14 bg-secondary border border:theme(colors.secondary.fg/15%) z-10 p-1 overflow-hidden flex items-center"
              }>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer noopener"
                href={project.href}>
                <Image
                  width={100}
                  height={100}
                  decoding="async"
                  src={project.image}
                  alt={`${project.name} Logo`}
                  className="h-full object-fill rounded-full bg-white p-1"
                />
              </a>
            </div>
            <h2 className="mt-6 text-base font-semibold text-fg flex justify-between items-center w-full">
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer noopener"
                href={project.href}>
                {project.name}
              </a>
              {project.acquired && (
                <Badge
                  className="ml-auto text-xs ring-1 ring-inset ring-success/20 bg-success/10 px-1.5 py-0.5 rounded-full"
                  intent="success">
                  Acquired
                </Badge>
              )}
            </h2>
            <p className="relative line-clamp-5 z-10 mt-2 text-sm text-muted-fg transition-all ease-in-out duration-100">
              {project.description}
            </p>

            {project.tags && project.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags?.map((tag) => (
                  <Badge className="px-1.5 py-0 text-[10px]" intent="secondary" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-1 mt-4">
                {project.links?.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <Link href={link?.href} key={idx} target="_blank">
                      <Badge shape="circle" key={idx} className="px-2 py-1 ">
                        <span className="flex items-center gap-1 text-[10px]">
                          <Icon className="size-3" />
                          {link.type}
                        </span>
                      </Badge>
                    </Link>
                  );
                })}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
