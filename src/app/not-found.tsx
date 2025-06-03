import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#242B7A] overflow-hidden">
      {/* Soft gradient light effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4E333]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#CFABFA]/40 rounded-full blur-3xl" />
      </div>
      <div className="text-center relative z-10">
        <h1 className="text-7xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-[#CFABFA] to-[#D4E333] bg-clip-text text-transparent drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-6 font-semibold">
          This page wandered off into history.
          <br />
          Let’s get you back on track!
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4E333] to-[#CFABFA] text-[#242B7A] font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
