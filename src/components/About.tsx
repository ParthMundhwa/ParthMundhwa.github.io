import { Database, Server, Cloud } from "lucide-react";

export function About() {
    return (
        <section className="relative z-10 w-full min-h-screen bg-transparent py-32 px-8 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
                            Data Philosophy
                        </h3>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
                            Bridging the gap between <span className="text-gray-400 italic">scale</span> and <span className="text-gray-400 italic">insights.</span>
                        </h2>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                            I specialize in creating scalable batch and real-time data pipelines. By blending advanced big data technologies like Spark, Kafka, and dbt with robust cloud architectures, I build data infrastructure that empowers business intelligence and machine learning.
                        </p>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Every data point matters. Every pipeline must serve a purpose. My goal is to structure high-volume data streams that leave a lasting impact while maintaining flawless data quality and performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <Database className="w-8 h-8 text-white mb-6" />
                            <h4 className="text-xl font-semibold text-white mb-2">Data Engineering</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Scalable batch and real-time pipelines processing millions of records.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md translate-y-0 sm:translate-y-8">
                            <Server className="w-8 h-8 text-white mb-6" />
                            <h4 className="text-xl font-semibold text-white mb-2">Big Data Architechture</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Distributed systems using Spark, Hadoop, and Kafka for massive scale.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <Cloud className="w-8 h-8 text-white mb-6" />
                            <h4 className="text-xl font-semibold text-white mb-2">Analytics Engineering</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Modern data warehouse solutions using Snowflake and dbt styling.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
