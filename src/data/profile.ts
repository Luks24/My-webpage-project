// Content for the portfolio sections, kept in one place so the
// home page and about page stay in sync.

export const EXPERIENCE = [
  {
    date: "2025 — Present",
    title: "Owner",
    company: "Luka Kidrič s.p.",
    description:
      "Part-time, self-employed consulting. I help clients with programming and infrastructure work, from building tailored software solutions to custom Raspberry Pi images for a robotics company.",
    current: true,
  },
  {
    date: "2023 — Present",
    title: "SRE Engineer",
    company: "CargoX",
    description:
      "Part of the DevOps/SRE team keeping the platform reliable and fast. Focused on Kubernetes and AWS, deployed monitoring solutions across the stack and automated operational processes.",
    current: true,
  },
  {
    date: "2022 — 2023",
    title: "DevOps Engineer",
    company: "Comtrade 360",
    description:
      "Subcontracted to HPE, a Fortune 500 company. Built and managed infrastructure as code with Terraform and Ansible while migrating systems to a new platform.",
  },
  {
    date: "2021 — 2022",
    title: "APM Consultant",
    company: "Perform IT",
    description:
      "Consultant for Cisco AppDynamics, working with customers around the world such as Pepsi and First Abu Dhabi Bank on application performance monitoring.",
  },
  {
    date: "2020 — 2021",
    title: "DevOps Engineer",
    company: "Kolektor Sisteh",
    description:
      "Automated the build process and deployed the company's IoT solution to Azure.",
  },
  {
    date: "2019 — 2020",
    title: "QA Automation Engineer",
    company: "VIAR",
    description:
      "My first role at a startup, automating testing and building proof-of-concept projects while finishing my bachelor's degree.",
  },
];

export const CERTIFICATIONS = [
  {
    code: "Kubestronaut",
    name: "CNCF Kubestronaut",
    url: "https://www.credly.com/badges/db191b0e-70ca-438d-ba24-f92244cf4146",
    featured: true,
  },
  {
    code: "CKA",
    name: "Certified Kubernetes Administrator",
    url: "https://www.credly.com/badges/5a603400-0279-40fa-8902-e0292fc03ae8",
  },
  {
    code: "CKAD",
    name: "Certified Kubernetes Application Developer",
    url: "https://www.credly.com/badges/a9ad449a-cf49-4a69-bc88-cd423fc89977",
  },
  {
    code: "CKS",
    name: "Certified Kubernetes Security Specialist",
    url: "https://www.credly.com/badges/06109cc0-5a4b-4482-925b-34f7ddb2a895",
  },
  {
    code: "KCNA",
    name: "Kubernetes and Cloud Native Associate",
    url: "https://www.credly.com/badges/ff0256b4-b77b-49f2-a5c5-f6aade12e3a1",
  },
  {
    code: "KCSA",
    name: "Kubernetes and Cloud Native Security Associate",
    url: "https://www.credly.com/badges/01955a69-73cc-421d-9f68-1a928f3bb791",
  },
];

export const SERVICES = [
  {
    label: "Kubernetes",
    title: "Platforms that stay up",
    description:
      "Designing, securing and operating Kubernetes clusters, from day-one setup to day-two upgrades and incident response.",
  },
  {
    label: "Cloud & IaC",
    title: "Infrastructure as code",
    description:
      "AWS and Azure environments described in Terraform and Ansible, so every change is reviewable and repeatable.",
  },
  {
    label: "Observability",
    title: "See issues before users do",
    description:
      "Monitoring, logging and alerting with Prometheus, Grafana and the Elastic stack, backed by years of APM consulting.",
  },
  {
    label: "Security",
    title: "Secure by default",
    description:
      "CKS and KCSA certified. Hardening, least-privilege access and policy enforcement built in rather than bolted on.",
  },
];

export const STACK = [
  { group: "Orchestration", tools: ["kubernetes", "docker"] },
  { group: "Cloud", tools: ["AWS", "cloudflare"] },
  { group: "Infrastructure as code", tools: ["terraform", "ansible"] },
  { group: "Observability", tools: ["prometheus", "grafana", "kibana"] },
  { group: "Delivery", tools: ["gitlab", "github", "git"] },
  { group: "Systems & data", tools: ["linux", "python", "node", "pgsql", "mysql"] },
];

export const STATS = [
  { value: "7+", label: "Years in DevOps" },
  { value: "6", label: "CNCF certifications" },
  { value: "9th", label: "Kubestronaut in Slovenia" },
];
