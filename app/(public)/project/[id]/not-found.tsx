"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="container mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="text-6xl md:text-8xl font-black text-zinc-800">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Project Not Found</h1>
          <p className="text-zinc-400 text-lg max-w-md mx-auto">
            The project you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
