export interface Language {
  name: string;
  iconName: string;
  /** Extra classes for the icon tile (e.g. a dark tile for white logos). */
  className?: string;
}

export const languages: Record<string, Language> = {
  cloudflare: { name: "Cloudflare", iconName: "cloudflare" },
  html: { name: "HTML 5", iconName: "html" },
  mysql: { name: "MySQL", iconName: "mysql" },
  node: { name: "Node.js", iconName: "node" },
  markdown: { name: "Markdown", iconName: "markdown" },
  php: { name: "PHP", iconName: "php" },
  ts: { name: "TypeScript", iconName: "typescript" },
  git: { name: "Git", iconName: "git" },
  cursor: { name: "Cursor", iconName: "cursor-ia" },
  deepseek: { name: "DeepSeek", iconName: "deepseek" },
  python: { name: "Python", iconName: "python" },
  kubernetes: { name: "Kubernetes", iconName: "kubernetes" },
  AWS: { name: "AWS", iconName: "AWS" },
  linux: { name: "Linux", iconName: "linux" },
  terraform: { name: "Terraform", iconName: "terraform" },
  kibana: { name: "Kibana", iconName: "kibana" },
  gitlab: { name: "GitLab", iconName: "gitlab" },
  github: { name: "GitHub", iconName: "github" },
  docker: { name: "Docker", iconName: "docker" },
  prometheus: { name: "Prometheus", iconName: "prometheus" },
  grafana: { name: "Grafana", iconName: "grafana" },
  pgsql: { name: "PostgreSQL", iconName: "pgsql" },
  ansible: { name: "Ansible", iconName: "ansible", className: "bg-[#1a1918]!" },
  astro: { name: "Astro", iconName: "astro" },
  tailwind: { name: "Tailwind", iconName: "tailwind" },
  javascript: { name: "JavaScript", iconName: "javascript" },
  vercel: { name: "Vercel", iconName: "vercel" },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || { name: lang, iconName: "code" };
};
