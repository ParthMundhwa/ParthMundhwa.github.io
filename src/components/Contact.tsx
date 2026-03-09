import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export function Contact() {
    return (
        <footer className="relative z-10 w-full min-h-screen bg-transparent flex flex-col items-center justify-center px-8">

            {/* 
        This section relies on the zoom out background effect acting as the true visual focus.
        We keep the UI centered, extremely minimal, and let the 75-100% backward scroll sequence shine behind it.
      */}
            <div className="max-w-4xl mx-auto w-full text-center mt-32">
                <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 drop-shadow-2xl">
                    Let&apos;s talk.
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto drop-shadow-lg">
                    If you are a data enthusiast and have a intersting project in mind , I&apos;d love to hear about it.
                </p>

                <a
                    href="mailto:parth.mundhwa8@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105"
                >
                    <Mail size={20} />
                    parth.mundhwa8@gmail.com
                </a>

                <div className="mt-32 flex items-center justify-center gap-8 text-gray-400">
                    <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"><Twitter size={24} /></a>
                    <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/parth-mundhwa/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"><Linkedin size={24} /></a>
                </div>

                <p className="mt-12 text-sm text-gray-600">
                    © {new Date().getFullYear()} Parth Mundhwa. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
