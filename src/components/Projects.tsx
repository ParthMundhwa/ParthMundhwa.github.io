import { Github } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "Streaming Event Analytics",
            description: "A real-time e-commerce pipeline leveraging PyFlink to transform raw interactions into semantic vectors, syncing downstream to Qdrant for immediate vector search.",
            tags: ["PyFlink", "Kafka", "Qdrant", "Vector DB"],
            github: "https://github.com/ParthMundhwa/streaming-pipeline",
        },
        {
            title: "Modern Data Warehouse",
            description: "Production-grade batch pipeline following Medallion Architecture. Orchestrates Olist e-commerce data through BigQuery using dbt for governance and business logic.",
            tags: ["dbt", "BigQuery", "SQL", "ELT"],
            github: "https://github.com/ParthMundhwa/Modern-Data-Warehouse-DBT",
        },
        {
            title: "Identity Resolution Kernel",
            description: "High-performance Scala/Spark template for customer deduplication. Implements Jaro-Winkler and Soundex fuzzy matching for golden record creation.",
            tags: ["Apache Spark", "Scala", "Fuzzy Matching", "ETL"],
            github: "https://github.com/ParthMundhwa/CustomerDeduplication",
        },
        {
            title: "AI Distribution Governance",
            description: "Automated CI/CD agent using LLMs (GPT-3.5) to conduct autonomous code reviews on GitHub Pull Requests, ensuring style and logic consistency.",
            tags: ["Python", "OpenAI", "CI/CD", "GitHub Actions"],
            github: "https://github.com/ParthMundhwa/AutoCodeReview",
        },
        {
            title: "Market Intelligence Engine",
            description: "End-to-end analytics platform ingesting Jikan API data. Features a Power BI dashboard visualizing global anime industry trends and studio performance.",
            tags: ["Power BI", "API Ingestion", "Market Analysis"],
            github: "https://github.com/ParthMundhwa/Anime-Insights-Analysis",
        },
    ];

    return (
        <section className="relative z-10 w-full min-h-screen bg-[#121212]/30 py-32 px-8 flex items-center border-t border-white/5">
            <div className="max-w-7xl mx-auto w-full">
                <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-16 text-center shadow-sm">
                    Selected Works
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                        >
                            <div className="mb-8 border-b border-white/10 pb-8">
                                <h4 className="text-3xl font-semibold text-white mb-4 group-hover:text-gray-300 transition-colors drop-shadow-md">{project.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                                <p className="text-gray-400 leading-relaxed font-light mb-8">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-6 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        GitHub <Github size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
