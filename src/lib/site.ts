export const site = {
  name: "Ahmed Benhmida",
  role: "DevOps & Cloud Infrastructure Engineer",
  subtitle: "Technical Lead",
  location: "Tunis, Tunisia",
  availability: "Open to remote roles and relocation",
  email: "ahmedbenhamida290@gmail.com",
  phone: "+216 42 515 150",
  linkedin: "https://www.linkedin.com/in/ahmed-benhmida",
  linkedinLabel: "linkedin.com/in/ahmed-benhmida",
  cv: "/Ahmed-Benhmida-DevOps-Cloud-Engineer-CV.pdf",
  photo: "/ahmed-benhmida.jpg",
  url: "https://ahmedbenhmida.com",
  summary:
    "I design, automate and operate reliable cloud infrastructure, and help engineering teams ship production-ready platforms.",
} as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export type Metric = { value: string; label: string; detail: string };

export const metrics: Metric[] = [
  { value: "4", label: "years in DevOps", detail: "Cloud, containers and Linux since 2022" },
  { value: "2", label: "platforms led", detail: "Technical lead on DeepSocial and Agent4All" },
  { value: "100+", label: "client sites supported", detail: "Hosting, DNS, SSL and mail in production" },
  { value: "5+", label: "production servers", detail: "Operated, migrated and monitored" },
];

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  work: string[];
  outcome: string;
  stack: string[];
  diagram: "gke" | "delivery" | "industrial";
  kind: string;
};

export const projects: Project[] = [
  {
    slug: "deepsocial",
    name: "DeepSocial",
    role: "Tech Lead · Cloud Infrastructure",
    period: "2025 — present",
    summary:
      "The cloud foundation for a social intelligence platform on Google Cloud — from an empty project to a reproducible GKE environment with a governed release path.",
    problem:
      "Engineers needed an environment they could deploy to many times a day, without hand-edited infrastructure, leaked secrets, or clusters nobody could rebuild.",
    work: [
      "Modelled the whole footprint in Terraform — VPC, subnets, IAM, GKE node pools, remote state — so every environment is created the same way.",
      "Ran workloads on GKE with rolling updates, health checks, resource limits and readiness gates in front of each release.",
      "Moved secrets into HashiCorp Vault with Kubernetes auth, so pods request credentials at runtime instead of carrying them in manifests.",
      "Built GitLab CI/CD pipelines that lint, build, push and deploy, with Kaniko building images inside the cluster.",
      "Containerised data and ML services alongside the teams that own them, tuning images for size and start-up time.",
    ],
    outcome:
      "Deploying became a pipeline run rather than a manual operation, and the environment can be rebuilt from code.",
    stack: ["GCP", "GKE", "Kubernetes", "Terraform", "Vault", "Docker", "GitLab CI/CD", "Kaniko"],
    diagram: "gke",
    kind: "Cloud platform",
  },
  {
    slug: "agent4all",
    name: "Agent4All",
    role: "Technical Lead",
    period: "2025",
    summary:
      "Led the technical team delivering the Agent4All platform: scoping the work, making the infrastructure calls, and owning the path to production.",
    problem:
      "A small team had to deliver a working platform on a fixed timeline while deployment, environments and release decisions were all still open.",
    work: [
      "Split delivery into tracks the team could work in parallel, keeping the interfaces between them explicit.",
      "Chose the deployment model and environment layout, and wrote the decisions down so they survived people joining mid-project.",
      "Set up containerised deployments and the release process the team ships with.",
      "Reviewed infrastructure and deployment changes, and unblocked the team on production issues.",
    ],
    outcome:
      "The platform reached production with a repeatable release process the team runs without me in the loop.",
    stack: ["Docker", "Kubernetes", "CI/CD", "Cloud infrastructure", "Technical leadership"],
    diagram: "delivery",
    kind: "Team leadership",
  },
  {
    slug: "enerco",
    name: "ENERCO",
    role: "DevOps Engineer",
    period: "2024 — 2025",
    summary:
      "An industrial monitoring platform streaming telemetry from field devices, containerised into one reproducible stack with deployment and monitoring around it.",
    problem:
      "A multi-service stack — event streaming, API, dashboard, database — had to run reliably on constrained hardware and be reproducible across sites.",
    work: [
      "Containerised the Node.js services, React dashboard, Kafka, Zookeeper and MongoDB into a single Docker Compose stack.",
      "Built GitLab CI/CD workflows to publish images and support deployments.",
      "Wrote monitoring scripts for Raspberry Pi edge services so failures surfaced before users reported them.",
      "Debugged production issues across the stream, the broker and the database.",
    ],
    outcome: "The stack ships as one reproducible unit, and its edge services report their own health.",
    stack: ["Docker Compose", "Node.js", "React", "Kafka", "MongoDB", "GitLab CI/CD", "Linux"],
    diagram: "industrial",
    kind: "Industrial IoT",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  years: string;
  location: string;
  lead: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Euklydia",
    title: "DevOps Engineer",
    period: "Oct 2025 — present",
    years: "2025",
    location: "Tunis, Tunisia",
    lead: "Building and operating the Google Cloud platform behind production workloads.",
    points: [
      "Provision VPC, IAM and GKE across environments with Terraform and remote state.",
      "Operate Kubernetes releases with rolling updates, health checks and deployment validation.",
      "Run secrets through HashiCorp Vault with Kubernetes auth instead of static credentials.",
      "Standardise build, test and deploy in GitLab CI/CD.",
      "Containerise data and ML services with the teams that own them.",
    ],
    tags: ["GCP", "Terraform", "GKE", "Vault", "GitLab CI/CD"],
  },
  {
    company: "Electrosoft / HyperMedia",
    title: "DevOps & Linux Infrastructure Engineer",
    period: "Apr 2024 — Nov 2025",
    years: "2024",
    location: "Sfax, Tunisia",
    lead: "Kept 100+ client sites and 5+ production servers online, and modernised how they ship.",
    points: [
      "Operated production servers across WHM/cPanel, Plesk and VPS/SSH environments.",
      "Ran site and mail migrations end to end: DNS, SSL, mailboxes, MX, SPF, DKIM, DMARC and reverse DNS.",
      "Monitored availability, backups and security posture to cut production risk.",
      "Responded to incidents on hosting, DNS, SSL and mail — restoring service first, fixing causes after.",
      "Containerised the ENERCO platform and added CI/CD and monitoring around it.",
    ],
    tags: ["Linux", "WHM/cPanel", "Plesk", "DNS & mail", "Docker"],
  },
  {
    company: "Ridcha Data",
    title: "DevOps Engineer",
    period: "Dec 2022 — Dec 2023",
    years: "2022",
    location: "Tunis, Tunisia",
    lead: "Automated cloud infrastructure and moved on-premises workloads into the cloud.",
    points: [
      "Wrote Terraform modules with remote tfstate in GCP, and reusable GitLab CI/CD templates.",
      "Ran Kubernetes runners and Kaniko so images build inside the cluster.",
      "Deployed with Argo CD and Helm, and added Prometheus and Grafana for visibility.",
      "Migrated on-premises websites to cloud environments.",
      "Managed secrets in Vault and analysed GCP spend to cut waste.",
    ],
    tags: ["Terraform", "Kubernetes", "Argo CD", "Helm", "Prometheus"],
  },
];

export type StackItem = { name: string; icon: string };
export type StackGroup = { id: string; label: string; note: string; items: StackItem[] };

export const stack: StackGroup[] = [
  {
    id: "cloud",
    label: "Cloud",
    note: "Google Cloud as the primary platform, described entirely in code.",
    items: [
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "GKE", icon: "googlecloud" },
      { name: "Terraform", icon: "terraform" },
      { name: "VPC", icon: "network" },
      { name: "IAM", icon: "shield" },
      { name: "OpenStack", icon: "openstack" },
    ],
  },
  {
    id: "containers",
    label: "Containers",
    note: "Packaging workloads and running them on Kubernetes.",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Helm", icon: "helm" },
      { name: "Argo CD", icon: "argo" },
      { name: "Kaniko", icon: "box" },
      { name: "Compose", icon: "docker" },
    ],
  },
  {
    id: "delivery",
    label: "CI/CD",
    note: "Pipelines that build, test and deploy without manual steps.",
    items: [
      { name: "GitLab CI/CD", icon: "gitlab" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "Git", icon: "git" },
      { name: "Ansible", icon: "ansible" },
      { name: "Shell", icon: "gnubash" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    id: "security",
    label: "Security",
    note: "Credentials pods request at runtime, and never carry.",
    items: [
      { name: "HashiCorp Vault", icon: "vault" },
      { name: "Kubernetes auth", icon: "kubernetes" },
      { name: "Secrets workflows", icon: "key" },
      { name: "Linux hardening", icon: "linux" },
      { name: "SSL/TLS", icon: "lock" },
    ],
  },
  {
    id: "observability",
    label: "Monitoring",
    note: "Knowing a release is healthy before anyone reports otherwise.",
    items: [
      { name: "Prometheus", icon: "prometheus" },
      { name: "Grafana", icon: "grafana" },
      { name: "Health checks", icon: "pulse" },
      { name: "Incident response", icon: "alert" },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    note: "The hosting layer, operated hands-on in production.",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "SSH", icon: "terminal" },
      { name: "DNS", icon: "network" },
      { name: "WHM/cPanel", icon: "cpanel" },
      { name: "Plesk", icon: "plesk" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
];

export const certifications = [
  {
    name: "Professional Cloud Architect",
    issuer: "Google Cloud",
    detail: "Designing cloud architecture, and the trade-offs between reliability, security and cost.",
    code: "PCA",
    topics: ["architecture design", "networking & iam", "reliability", "cost control"],
  },
  {
    name: "Professional Cloud DevOps Engineer",
    issuer: "Google Cloud",
    detail: "Building delivery pipelines and operating services with SRE practices on Google Cloud.",
    code: "PCDE",
    topics: ["ci/cd pipelines", "sre practices", "monitoring", "incident response"],
  },
] as const;

export const education = [
  {
    school: "ESPRIT — Private Higher School of Engineering and Technology",
    award: "National Software Engineering Diploma",
    year: "2023",
  },
  {
    school: "Higher Institute of Computer Science of Mahdia",
    award: "Licence, System and Network Administration",
    year: "2020",
  },
] as const;

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Advanced" },
  { name: "English", level: "Professional" },
] as const;
