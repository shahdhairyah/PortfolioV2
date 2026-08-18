import { Code2, FileCode2, Database, Layers, Flame } from "lucide-react";

/* eslint-disable react/prop-types */

const DefaultIcons = [
  { icon: Code2, pos: "top-[15%] left-[8%] md:left-[12%]", speed: "4s", size: 24 },
  { icon: FileCode2, pos: "bottom-[20%] left-[10%] md:left-[16%]", speed: "5s", size: 22 },
  { icon: Layers, pos: "top-[18%] right-[8%] md:right-[14%]", speed: "4.5s", size: 24 },
  { icon: Database, pos: "bottom-[18%] right-[10%] md:right-[15%]", speed: "3.8s", size: 22 },
  { icon: Flame, pos: "top-[45%] left-[4%] md:left-[6%]", speed: "5.2s", size: 18 },
];

const PageHeader = ({ title, subtitle, titleSize }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[300px] md:min-h-[380px] bg-[#020202] overflow-hidden py-16">
      {DefaultIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className={`absolute ${item.pos} p-3 bg-white/5 backdrop-blur-md rounded-xl border border-[#bf4417]/30 text-[#bf4417] animate-bounce z-20`}
            style={{ animationDuration: item.speed }}
          >
            <IconComponent size={item.size} />
          </div>
        );
      })}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1200px] h-[300px] rounded-[50%] bg-[radial-gradient(#bf4417_0%,transparent_50%)] md:bg-[radial-gradient(#bf4417_20%,transparent_70%)] blur-[10px] opacity-20 pointer-events-none z-0" />

      <h1
        className={`relative z-10 ${
          titleSize || "text-[clamp(2.2rem,11vw,9.5rem)]"
        } font-extrabold tracking-tight text-transparent bg-clip-text bg-cover bg-center select-none leading-none text-center px-4 text-wrap uppercase`}
        style={{ backgroundImage: "url('/namebg.webp')" }}
      >
        {title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </h1>

      {subtitle && (
        <p className="relative z-10 text-white/70 text-base sm:text-xl md:text-2xl font-light tracking-wide mt-4 text-center max-w-2xl px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
