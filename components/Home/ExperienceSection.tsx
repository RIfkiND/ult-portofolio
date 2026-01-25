

"use client"
import { workExperiences, education } from "@/components/data/WorkData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const tabItems = [
    { label: "Experience", value: "experience" },
    { label: "Education", value: "education" },
];

export default function ExperienceSection({ id }: { id: string }) {
    return (
        <section
            id={id}
            className="w-full pt-24 sm:pt-32 px-2 sm:px-4 relative z-0 min-h-[500px]"
        >
            {/* Top right gradient */}
            <div
                className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at top right, rgba(16, 50, 40, 0.5) 0%, transparent 60%)",
                    transform: "scaleX(1)",
                }}
            />
            {/* Bottom left gradient (fixed: only at bottom left) */}
            <div
                className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at bottom left, rgba(16, 50, 40, 0.5) 0%, transparent 60%)",
                }}
            />

            {/* Tabs UI */}
            <div className="relative z-10 flex flex-col items-center">
                <Tabs defaultValue="experience" className="w-full max-w-2xl mx-auto">
                    <TabsList className="mx-auto mb-8 flex justify-center w-full">
                        {tabItems.map((tab) => (
                            <TabsTrigger key={tab.value} value={tab.value} className="px-6 py-2 text-lg">
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Scrollable content area */}
                    <div className="max-h-[420px] min-h-[320px] overflow-y-auto w-full pr-2">
                        <TabsContent value="experience">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.4, type: "spring" }}
                                    className="space-y-8"
                                >
                                    {workExperiences.map((exp, i) => (
                                        <motion.div
                                            key={exp.company}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ delay: i * 0.08, duration: 0.5, type: "spring" }}
                                            className="flex gap-4 items-start bg-white/80 dark:bg-black/40 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800"
                                        >
                                            <div className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold text-white ${exp.bgColor}`}>
                                                {exp.logo}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                                                </div>
                                                <div className="text-base font-medium text-gray-700 dark:text-gray-300">{exp.company}</div>
                                                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                                    {exp.achievements.map((ach, idx) => (
                                                        <li key={idx}>{ach}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </TabsContent>

                        <TabsContent value="education">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.4, type: "spring" }}
                                    className="space-y-8"
                                >
                                    {education.map((edu, i) => (
                                        <motion.div
                                            key={edu.institution + edu.degree}
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ delay: i * 0.08, duration: 0.5, type: "spring" }}
                                            className="flex gap-4 items-start bg-white/80 dark:bg-black/40 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800"
                                        >
                                            <div className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold text-white ${edu.bgColor}`}>
                                                {edu.logo}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                                                </div>
                                                <div className="text-base font-medium text-gray-700 dark:text-gray-300">{edu.institution}</div>
                                                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                                                    {edu.details.map((detail, idx) => (
                                                        <li key={idx}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}
