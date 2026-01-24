

import { useState } from "react";
import { workExperiences, education } from "@/components/data/WorkData";

const tabs = [
    { label: "Experience" },
    { label: "Education" },
];

export default function ExperienceSection({ id }: { id: string }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className="w-full pt-24 sm:pt-32 px-2 sm:px-4 relative z-0">
            {/* Background gradient, low z-index */}
    
            {/* Top right mirrored gradient */}
            <div
                className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle at top right, rgba(16, 50, 40, 0.5) 0%, transparent 60%)',
                    transform: 'scaleX(1)',
                }}
            />
            {/* Bottom left gradient (no flip, correct position) */}
            <div
                className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle at bottom left, rgba(16, 50, 40, 0.5) 0%, transparent 60%)',
                }}
            />
        
        </section>
    );
}
