export const personal = {
  name: "Siim Samuel Sepp",
  shortName: "Siim Sepp",
  title: "PhD Candidate in Plant Breeding & Genetics",
  institution: "Cornell University",
  department: "School of Integrative Plant Science",
  location: "Ithaca, NY",
  email: "sss322@cornell.edu",
  tagline:
    "Bridging genomics, phenomics, and computational approaches to develop resilient cereal crops for sustainable agriculture and a changing climate.",
  bio: [
    "I am a PhD candidate in Plant Breeding and Genetics at Cornell University. My research focuses on developing genomic and phenomic tools to accelerate barley breeding for malting quality and abiotic stress resistance. I manage the Cornell winter malting barley breeding program, managing everything from field phenotyping to genomic prediction pipelines.",
    "My interdisciplinary approach combines traditional plant breeding with modern computational methods — genome-wide association studies (GWAS), genomic selection, and UAV-based high-throughput phenotyping. Prior to Cornell, I worked as a Senior Research Agronomist at the Estonian Crop Research Institute, running HTP canopy phenotyping experiments for climate resilience across European projects.",
  ],
  social: {
    googleScholar: "https://scholar.google.com/citations?user=1yHjWyEAAAAJ&hl=en",
    github: "https://github.com/sss9010",
    linkedin: "https://www.linkedin.com/in/sssepp/",
    email: "sss322@cornell.edu",
    orcid: "",
  },
  cvPath: "/cv_sepp.pdf",
};

export const researchInterests = [
  "Genomic Prediction",
  "GWAS",
  "Malting Barley Breeding",
  "High-Throughput Phenotyping",
  "Climate Resilience",
  "Abiotic Stress Resistance",
  "Disease Resistance",
  "UAV Remote Sensing",
  "Bioinformatics",
  "Geospatial Analysis",
  "Plant Intellectual Property",
];

export const skills = [
  "Python",
  "R",
  "QGIS",
  "GitHub",
  "ClaudeCode",
  "Genomic Selection",
  "GWAS",
  "Statistical Modelling",
  "UAV Piloting",
  "Field Phenotyping",
];

export const researchProjects = [
  {
    title: "GWAS for Scald Resistance in Multiparent Barley",
    description:
      "Genome-wide association analysis of resistance to scald (Rhynchosporium commune) in an adapted multiparent winter malting barley population.",
    methods: ["GWAS", "Plant Pathology", "Disease Phenotyping"],
    links: [{ label: "bioRxiv", href: "https://doi.org/10.1101/2026.03.12.711358" }],
    status: "preprint",
  },
  {
    title: "Sclerotinia Resistance & Microbiome in Canola",
    description:
      "M.Sc Project about identifiying new genomic loci for sclerotinia stem rot resistance and chlorophyll stability in Brassica napus by integrating GWAS, revealing genotype–microbiome interactions.",
    methods: ["GWAS", "Microbiome Analysis", "Plant Pathology", "Multi-omics Integration"],
    links: [{ label: "doi:10.1002/pei3.70092", href: "https://doi.org/10.1002/pei3.70092" }],
    status: "published",
  },
  {
    title: "Barley for Climate Resilience",
    description:
      "M.Sc project about novel high-throughput phenotyping platforms to characterise barley responses to climate-induced water regime changes.",
    links: [{ label: "doi", href: "https://dspace.emu.ee/bitstream/10492/7044/4/2021_2_sepp.pdf" }],
    status: "published",
  },
];


export const education = [
  {
    degree: "PhD in Plant Breeding and Genetics",
    institution: "Cornell University",
    location: "Ithaca, NY",
    period: "2022 – Aug 2026",
    concentration: "Plant Breeding and Computational Genetics; minor in Geospatial Applications",
    thesis:
      "Genomic and Phenomic Approaches for Barley Breeding for Malting Quality and Abiotic Stress Resistance",
  },
  {
    degree: "M.Sc. in Plant Biology",
    institution: "Swedish University of Agricultural Sciences",
    location: "Uppsala, Sweden",
    period: "2019-2022",
    concentration: "",
    thesis:
      "Identification of New Loci and Candidate Genes for Resistance to Sclerotinia Stem Rot in B. napus with GWAS",
  },
  {
    degree: "M.Sc. in Agriculture",
    institution: "Estonian University of Life Sciences",
    location: "Tartu, Estonia",
    period: "2019-2021",
    concentration: "",
    thesis:
      "Adaption of Estonian Grown Barley Varieties to Climate Change Induced Water Regime Changes",
  },
  {
    degree: "B.Sc. in Agriculture",
    institution: "Estonian University of Life Sciences",
    location: "Tartu, Estonia",
    period: "2016-2019",
    concentration: "",
    thesis:
      "Wheat Flag Leaf Wheat in Organic and Conventional Systems and the Effect on Yield and Quality",
    advisor: "",
  },
];


export const awards = [
  "Kristjan Jaak Scholarship for Exchange Studies",
  "Organic Farming Research Centre Scholarship",
  "Veski Mati Scholarship",
  "Rotalia Foundation Scholarship",
  "ERASMUS for Young Entrepreneurs Scholarship (Bioinnovation Hackathon)",
];

export const publications = [
  {
    id: 4,
    authors: "Kolkman J. M., Sepp S. S., Kunze K. H., Bergstrom G. C., Sorrells M. E.",
    year: 2026,
    title:
      "Genome-wide association analysis of resistance to scald in an adapted multiparent winter malting barley population.",
    journal: "bioRxiv",
    volume: "",
    doi: "10.1101/2026.03.12.711358",
    type: "preprint",
  },
  {
    id: 3,
    authors: "Sepp S. S., Kunze K. H., Bergstrom G. C., Kolkman J. M., Hayes P., Sorrells M. E.",
    year: 2025,
    title: "Winter malting barley LakeEffect.",
    journal: "Journal of Plant Registration",
    volume: "",
    doi: "",
    type: "in-review",
  },
  {
    id: 2,
    authors:
      "Chawade A., Thuraga V., Sepp S. S., Ghosh S., Ghadamgahi F., Odilbekov F., Muthusamy S., Vetukuri R. R., Abreha K. B.",
    year: 2025,
    title:
      "Genomic loci for sclerotinia stem rot resistance and chlorophyll stability in Brassica napus: integrating GWAS with microbiome insights.",
    journal: "Journal of Plant-Environment Interactions",
    volume: "",
    doi: "10.1002/pei3.70092",
    type: "journal",
  },
  {
    id: 1,
    authors: "Sepp S. S., Tamm Ü., Loit E.",
    year: 2021,
    title: "Is Estonian Barley Ready to Tackle Climate Change Induced Water Regimes?",
    journal: "Agraarteadus (Journal of Agricultural Science)",
    volume: "",
    doi: "10.15159/jas.21.29",
    type: "journal",
  },
];

