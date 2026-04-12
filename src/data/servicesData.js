export const servicesData = [
  {
    "id": "srv_web",
    "title": "Web Development",
    "overview": "We architect scalable, high-performance web applications that serve as the operational backbone for modern enterprises. Moving beyond static brochures, we build composable, API-first ecosystems that integrate seamlessly with your existing infrastructure, prioritizing edge-rendering for instant load times and strict type safety for zero-defect deployments.",
    "keyOfferings": [
      { "title": "Composable Architecture", "description": "Decoupling frontend presentation from backend logic using Headless CMS and serverless microservices." },
      { "title": "Progressive Web Apps (PWAs)", "description": "App-like experiences with offline capabilities, push notifications, and hardware acceleration." },
      { "title": "Performance Optimization", "description": "Rigorous adherence to Core Web Vitals, utilizing edge caching and intelligent asset hydration." }
    ],
    "techStack": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Astro"]
  },
  {
    "id": "srv_data",
    "title": "Data Science",
    "overview": "Transform your raw enterprise telemetry into a strategic asset. Our data science pipelines ingest massive, unstructured datasets and apply advanced statistical modeling to uncover hidden patterns. We specialize in complex time-series forecasting and predictive analytics to drive proactive, rather than reactive, business decisions.",
    "keyOfferings": [
      { "title": "Predictive Modeling", "description": "Deploying hybrid neural network architectures for highly accurate forecasting." },
      { "title": "Data Engineering", "description": "Building robust, low-latency ETL pipelines using distributed processing frameworks." },
      { "title": "Interactive Dashboards", "description": "Real-time data visualization platforms translating complex metrics into executive insights." }
    ],
    "techStack": ["Python", "TensorFlow", "Pandas", "TCN-LSTM", "Apache Kafka", "PostgreSQL"]
  },
  {
    "id": "srv_ai",
    "title": "AI / ML Integration",
    "overview": "Deploy intelligent automation securely within your corporate firewall. We build custom artificial intelligence solutions, focusing on agentic workflows and parameter-efficient fine-tuning (PEFT) of foundational models. Our integrations allow LLMs to securely query your proprietary data without exposing it to public networks.",
    "keyOfferings": [
      { "title": "Retrieval-Augmented Generation (RAG)", "description": "Grounding large language models in your specific corporate documents and databases." },
      { "title": "Agentic Workflows", "description": "Developing autonomous AI agents capable of multi-step reasoning and API execution." },
      { "title": "Computer Vision", "description": "Implementing real-time image and video analysis for quality control and spatial computing." }
    ],
    "techStack": ["PyTorch", "LangChain", "Vercel AI SDK", "Pinecone", "Hugging Face"]
  },
  {
    "id": "srv_cloud",
    "title": "Cloud Computing",
    "overview": "Achieve high-availability and elastic scaling through immutable infrastructure. We design and migrate monolithic systems to cloud-native, containerized topologies. Our focus on infrastructure-as-code ensures that your environments are reproducible, self-healing, and optimized for minimal operational expenditure.",
    "keyOfferings": [
      { "title": "Container Orchestration", "description": "Deploying and managing microservices using Kubernetes and advanced service meshes." },
      { "title": "CI/CD Automation", "description": "Building zero-downtime deployment pipelines with automated testing and rollback protocols." },
      { "title": "Serverless Architectures", "description": "Event-driven compute solutions that scale automatically and eliminate server provisioning." }
    ],
    "techStack": ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions"]
  },
  {
    "id": "srv_cyber",
    "title": "Cybersecurity",
    "overview": "Protect your digital attack surface with proactive, intelligence-driven defense. We move beyond perimeter security, implementing zero-trust architectures and automated heuristic analysis. Our team conducts rigorous vulnerability assessments and deploys continuous monitoring to detect anomalies before they escalate into breaches.",
    "keyOfferings": [
      { "title": "Proactive Threat Hunting", "description": "Integrating advanced SIEM platforms with AI to identify persistent threats and zero-day vulnerabilities." },
      { "title": "Zero-Trust Architecture", "description": "Implementing identity-aware proxies, micro-segmentation, and strict access controls." },
      { "title": "Red Team Simulations", "description": "Conducting controlled penetration testing to validate defenses and harden infrastructure." }
    ],
    "techStack": ["Splunk", "Wazuh", "Kali Linux", "CrowdStrike", "Suricata"]
  }
];
