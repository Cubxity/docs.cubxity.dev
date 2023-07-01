import Link from "@docusaurus/Link";
import React from "react";

import styles from "./HomeProjects.module.css";

interface ProjectItem {
  title: string;
  description: string;
  href?: string;
}

const FeatureList: ProjectItem[] = [
  {
    title: "UnifiedMetrics",
    description: "Open-source metrics collection agent for Minecraft",
    href: "/docs/unifiedmetrics/intro",
  },
  {
    title: "docker-minecraft-server",
    description: "Production-ready Docker image for Minecraft server",
  },
  {
    title: "docker-minecraft-proxy",
    description: "Production-ready Docker image for Minecraft proxy",
  },
];

function Project({ title, description, href }: ProjectItem) {
  return (
    <div className={styles.project}>
      <div className={styles.flex}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {href ? (
        <div>
          <Link className="button button--primary" to={href}>
            View
          </Link>
        </div>
      ) : (
        <p>Soon™️</p>
      )}
    </div>
  );
}

export default function HomeProjects(): JSX.Element {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        {FeatureList.map((props, idx) => (
          <Project key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
