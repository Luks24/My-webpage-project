export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
    kubernetes: {
    name: "kubernetes",
    iconName: "kubernetes",
  },
    AWS: {
    name: "AWS",
    iconName: "AWS",
  },
    linux: {
    name: "linux",
    iconName: "linux",
  },
    terraform: {
    name: "terraform",
    iconName: "terraform",
  },
    kiabana: {
    name: "kibana",
    iconName: "kibana",
  },
    gitlab: {
    name: "gitlab",
    iconName: "gitlab",
  },
    github: {
    name: "github",
    iconName: "github",
  },
    docker: {
    name: "docker",
    iconName: "docker",
  },
    prometheus: {
    name: "prometheus",
    iconName: "prometheus",
  },
    grafana: {
    name: "grafana",
    iconName: "grafana",
  },
    pgsql: {
    name: "pgsql",
    iconName: "pgsql",
  },
    ansible: {
    name: "ansible",
    iconName: "ansible",
  }
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 