"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

export default function Home() {
    const [surprise, setSurprise] = useState("");

    const facts = [
        "💻 I’m Parakh Choudhary, a creative frontend developer with 2.5+ years of experience!",
        "🚀 Experience in React.js, WordPress, GSAP, and Three.js.",
        "⚙️ Currently learning Next.js.",
        "🎨 I love crafting visually engaging websites with smooth animations.",
        "📚 Always exploring new technologies and pushing creative boundaries!",
        "🌐 Check out my projects on GitHub or connect with me on LinkedIn!",
    ];

    const handleSurprise = () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        setSurprise(randomFact);
    };

    useEffect(() => {
        gsap.from(".title", { opacity: 0, y: -40, duration: 1, ease: "power2.out" });
        gsap.from(".subtitle", { opacity: 0, y: 40, duration: 1, delay: 0.5 });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
            <motion.h1
                className="title text-4xl font-bold text-blue-700"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                👋 Hey, I'm Parakh Choudhary!
            </motion.h1>

            <p className="subtitle text-xl text-gray-600 mt-4">
                A passionate frontend developer turning ideas into engaging digital experiences.
            </p>

            <motion.button
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 active:scale-95 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSurprise}
            >
                🎁 Surprise Me!
            </motion.button>

            {surprise && (
                <motion.p
                    className="mt-6 text-lg text-gray-700 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {surprise}
                </motion.p>
            )}

            <footer className="mt-12 text-sm text-gray-500">
                🚀 Made with ❤️ by Parakh Choudhary
            </footer>
        </div>
    );
}
