export const PROFILE = {
  name: "Yunan Zhang",
  nativeName: "张宇楠",
  shortBio: "Ph.D. Student @ Purdue University",
  profileImage: {
    src: "/photo/yunan.jpg",
    alt: "Portrait photo",
  },
  intro: [
    "Hi! This is Yunan, a Ph.D. student in Computer Science at Purdue University, advised by <a href=\"https://www.cs.purdue.edu/homes/csjgwang/\" target=\"_blank\" rel=\"noopener noreferrer\">Professor Jianguo Wang</a>. I came to Purdue University in 2021 as an M.S. student in Computer Science and transferred to the Ph.D. program in 2023. Previously, I received an M.S. in Computer Engineering from the <a href=\"https://www.iit.edu\" target=\"_blank\" rel=\"noopener noreferrer\">Illinois Institute of Technology</a> and a bachelor’s degree from <a href=\"https://en.szu.edu.cn\" target=\"_blank\" rel=\"noopener noreferrer\">Shenzhen University</a>.",
    "I have worked as a Research Intern at <a href=\"https://www.microsoft.com/en-us/research/\" target=\"_blank\" rel=\"noopener noreferrer\"><span aria-label=\"Microsoft Research\"><img src=\"/microsoft.svg\" alt=\"\" aria-hidden=\"true\" style=\"display:inline-block;width:0.95em;height:0.95em;vertical-align:-0.08em;margin-right:0.25em;\" />Microsoft Research</span></a> in the <a href=\"https://www.microsoft.com/en-us/research/project/project-akupara-approximate-nearest-neighbor-search-for-large-scale-semantic-search/\" target=\"_blank\" rel=\"noopener noreferrer\">DiskANN team</a>.",
    "Please feel free to reach out if you're interested in discussing any research ideas, academic collaborations, or industry opportunities!"
  ],
  newsItems: [
            {
      date: "Nov. 2025",
      text: "The paper \"Efficient Vector Index Merging in Vector Databases\" has been accepted in SIGMOD 2026.",
      tags: ["publication"],
    },
        {
      date: "Oct. 2025",
      text: "The paper \"Fast Vector Search in PostgreSQL: A Decoupled Approach\" has been accepted in CIDR 2026.",
      tags: ["publication"],
    },
        {
      date: "June 2025",
      text: "Excited to be joining <a href=\"https://www.microsoft.com/en-us/research/\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft Research</a> as a Research Scientist Intern on the Azure DiskANN team. I'll be working with <a class=\"person-link\" href=\"https://harsha-simhadri.org\" target=\"_blank\" rel=\"noopener noreferrer\">Harsha Vardhan Simhadri</a> on filtered vector search algorithms. Grateful for the opportunity!",
      tags: ["internship"],
    },
        {
      date: "June 2024",
      text: "The paper \"SingleStore-V: An Integrated Vector Database System in SingleStore\" has been accepted in VLDB 2024 industrial track.",
      tags: ["publication"],
    },
    {
      date: "April 2024",
      text: "The paper \"Are There Fundamental Limitations in Supporting Vector Data Management in Relational Databases? A Case Study of PostgreSQL\" has been accepted in ICDE 2024.",
      tags: ["publication", "milestone"],
    },
        {
      date: "May 2023",
      text: "Started to work with Professor Jianguo Wang in vector search. Big thanks to this opportunity!",
      tags: ["milestone"],
    },
  ],
  researchSummary:
    "My research focuses on building efficient, high-performance <strong>vector search indexes and systems</strong> across diverse storage devices and real-world workloads. My research covers the following main areas:",
  researchThemes: [
    {
      title: "Vector Search on Databases",
      description:
        "Building and optimizing vector search integrated with databases, with a focus on implementation and performance analysis in PostgreSQL and other DBMSs across real-world workloads. <a href=\"https://www.cs.purdue.edu/homes/csjgwang/pubs/ICDE24_VecDB.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">ICDE'24</a>, <a href=\"https://cs.purdue.edu/homes/csjgwang/SingleStoreVec.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">VLDB'24</a>, <a href=\"https://cs.purdue.edu/homes/csjgwang/pubs/CIDR26_PostgreSQLVector.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">CIDR'26</a>.",
    },
        {
      title: "Disk-Based Vector Search",
      description:
        "Designing and optimizing disk-based vector indexes for commodity storage (HDDs, SSDs, and cloud block storage), including segment-aware optimizations for LSM-style multi-segment systems.",
    },

    {
      title: "Filtered Vector Search",
      description:
        "Developing adaptive search strategies for graph-based vector indexes under diverse filtering conditions and query patterns (e.g., single vs. multiple filters and mixed filter types).",
    },

    {
      title: "Related Vector Search Algorithms",
      description:
        "Exploring related techniques for vector search, including merge strategies for graph-based indexes and applications in retrieval-augmented generation (RAG) for LLMs. <span class=\"research-linkish\">SIGMOD'26</span>",
    },
  ],
  socialLinks: {
    github: "https://github.com/YunanZzz",
    linkedin: "https://www.linkedin.com/in/yunan-zhang-641351183/",
    email: "mailto:zhan4404@purdue.edu",
    scholar: "https://scholar.google.com/citations?user=jJVv2YwAAAAJ&hl=en",
  },
} as const;
