// import { ArrowUpRight } from "lucide-react";

export function Experience() {
    const experiences = [
        {
            role: "Data Engineer",
            company: "OmniMD",
            period: "May 2023 - Dec 2023",
            descriptions: [
                "Architected high-throughput ETL kernels using PySpark to normalize and cleanse 1M+ clinical records, enabling sub-second analytical querying.",
                "Engineered scalable feature-engineering pipelines, streamlining the hand-off between raw data lake layers and production ML model training environments.",
                "Optimized containerized data workloads via Docker, achieving a 20% reduction in inference latency through efficient resource scheduling and image thinning.",
                "Developed schema-rigid data transformation workflows that improved downstream data reliability and integrity for healthcare-focused BI dashboards."
            ],
        },
        {
            role: "Big Data Engineer - II",
            company: "Rysun Labs",
            period: "Jan 2019 - Dec 2022",
            descriptions: [
                "Orchestrated distributed Spark compute clusters for massive-scale identity resolution, reducing data fragmentation by 90% across multi-million record environments.",
                "Designed and deployed a low-latency Customer Data Platform (CDP) on Apache Ignite and Accumulo, serving high-concurrency requests with sub-second response times.",
                "Built resilient ingestion frameworks for 600+ heterogeneous web sources, implementing complex rate-limiting and rotating proxy logic to sustain 40% growth in searchable data indices.",
                "Implemented enterprise-grade orchestration via Apache Airflow, crafting custom operators and sensor patterns to maintain 99.9% pipeline uptime with automated self-healing.",
                "Engineered real-time stream processing architectures using Spark Structured Streaming and Kafka, slashing data-to-insight latency by 15%.",
                "Advanced infrastructure ROI by deep-tuning Spark JVM parameters and partition strategies, significantly lowering cloud compute overhead."
            ],
        },
    ];

    return (
        <section className="relative z-10 w-full min-h-screen bg-[#121212]/30 py-32 px-8 flex items-center border-t border-white/5">
            <div className="max-w-7xl mx-auto w-full">
                <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-16 text-center shadow-sm">
                    Experience
                </h3>

                {/* Side-by-side grid layout for OmniMD (Left) and Rysun Labs (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                        >
                            <div className="mb-8 border-b border-white/10 pb-8">
                                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mb-3">{exp.period}</p>
                                <h4 className="text-3xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors drop-shadow-md">{exp.role}</h4>
                                <p className="text-xl text-gray-400 font-light">{exp.company}</p>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-5">
                                    {exp.descriptions.map((desc, dIdx) => (
                                        <li key={dIdx} className="text-gray-300 leading-relaxed font-light flex items-start gap-4">
                                            <span className="text-white/40 mt-1.5 text-xs inline-block">◆</span>
                                            <span className="flex-1 drop-shadow-sm">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
