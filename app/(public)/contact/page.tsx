import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full pt-40 pb-20 px-6 md:px-10 lg:px-20 overflow-hidden relative bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start justify-center gap-20">
        
        {/* Content Area */}
        <div className="w-full max-w-4xl z-10 mt-10">
          <h1 className="font-serif text-[3.5rem] sm:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] text-[#111111] tracking-tight mb-16">
            Ready to<br />
            integrate APIs<br />
            & AI?
          </h1>

          <div className="h-px w-full max-w-xl bg-black/10 mb-12" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 sm:gap-20">
            {/* First Action */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <p className="text-xl sm:text-2xl text-black/70 max-w-[200px] font-sans leading-tight">
                Let's take 30 minutes to talk about your challenges!
              </p>
              <AnimatedButton 
                width="140px" 
                height="48px" 
                text="" 
                iconSize="40px" 
                defaultBg="#8ddd8d"
                hoverBg="#171717"
                iconDefaultBg="#1a1a1a"
                iconHoverBg="#8ddd8d"
                iconDefaultColor="#8ddd8d"
                iconHoverColor="#1a1a1a"
              />
            </div>

            {/* Second Action */}
            <div className="flex items-center gap-6 group cursor-pointer">
              <p className="text-xl sm:text-2xl text-black/70 max-w-[140px] font-sans leading-tight">
                No time?<br />
                Write to us.
              </p>
              <AnimatedButton 
                width="140px" 
                height="48px" 
                text="" 
                iconSize="40px" 
                defaultBg="#8ddd8d"
                hoverBg="#171717"
                iconDefaultBg="#1a1a1a"
                iconHoverBg="#8ddd8d"
                iconDefaultColor="#8ddd8d"
                iconHoverColor="#1a1a1a"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
