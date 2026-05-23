import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Lock, LockOpen } from "lucide-react";
import { encryptedProjects } from "@/data/projects.encrypted";
import { Sparkle, Cloud, Squiggle, Star } from "@/components/portfolio/CoinlyDecorations";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  accent: "orange" | "purple" | "sky" | "green" | "yellow";
  live?: { label?: string; url: string };
  primary?: { label: string; url: string };
  secondary?: { label: string; url: string };
};

const SESSION_KEY = "portfolio_projects_unlocked";

const base64ToBytes = (b64: string) => {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
};

const decrypt = async (password: string): Promise<Project[]> => {
  const salt = base64ToBytes(encryptedProjects.salt);
  const iv = base64ToBytes(encryptedProjects.iv);
  const ct = base64ToBytes(encryptedProjects.ciphertext);
  const enc = new TextEncoder();
  const baseKey = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  const key = await window.crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 200000, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
  const pt = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
  return JSON.parse(new TextDecoder().decode(pt));
};

const accentMap: Record<Project["accent"], { bg: string; text: string }> = {
  orange: { bg: "var(--coinly-orange)", text: "#fff" },
  purple: { bg: "var(--coinly-purple)", text: "#fff" },
  sky: { bg: "var(--coinly-sky)", text: "#fff" },
  green: { bg: "var(--coinly-green)", text: "var(--coinly-deep-blue)" },
  yellow: { bg: "var(--coinly-yellow)", text: "var(--coinly-deep-blue)" },
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const accent = accentMap[project.accent] ?? accentMap.orange;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="card-coinly bg-white flex flex-col"
      style={{ background: "#fff", color: "var(--coinly-deep-blue)" }}
    >
      <div
        className="inline-flex items-center self-start chip mb-3"
        style={{ background: accent.bg, color: accent.text, borderColor: "var(--coinly-deep-blue)" }}
      >
        {project.tagline}
      </div>
      <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
        {project.name}
      </h3>
      <p className="text-sm md:text-base font-medium leading-relaxed opacity-80 mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
            style={{
              background: "var(--coinly-cream)",
              color: "var(--coinly-deep-blue)",
              border: "1.5px solid var(--coinly-deep-blue)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.live && (
          <a
            href={project.live.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coinly !py-2 !px-4 !text-xs"
            style={{
              background: "var(--coinly-green)",
              color: "var(--coinly-deep-blue)",
            }}
          >
            <span className="relative flex items-center justify-center w-2 h-2 mr-0.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-600" />
            </span>
            {project.live.label || "Live"}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
        {project.primary && (
          <a
            href={project.primary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coinly !py-2 !px-4 !text-xs"
          >
            {project.primary.label}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
        {project.secondary && (
          <a
            href={project.secondary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coinly-outline !py-2 !px-4 !text-xs"
          >
            {project.secondary.label}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

const LockScreen = ({ onUnlock }: { onUnlock: (projects: Project[]) => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || busy) return;
    setBusy(true);
    setError(null);
    try {
      const projects = await decrypt(password);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(projects));
      onUnlock(projects);
    } catch {
      setError("Wrong password.");
      setBusy(false);
      inputRef.current?.select();
    }
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="card-coinly max-w-md w-full mx-auto text-center bg-white relative z-10"
      style={{ background: "#fff" }}
    >
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 mx-auto"
        style={{
          background: "var(--coinly-orange)",
          color: "#fff",
          border: "2.5px solid var(--coinly-deep-blue)",
        }}
      >
        <Lock className="w-6 h-6" />
      </div>
      <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2" style={{ color: "var(--coinly-deep-blue)" }}>
        Private Projects
      </h1>
      <p className="text-sm font-medium opacity-70 mb-6" style={{ color: "var(--coinly-deep-blue)" }}>
        Enter the access code to view Sanjavan's private project list.
      </p>

      <motion.div
        animate={error ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <input
          ref={inputRef}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="access code"
          autoComplete="off"
          className="w-full px-4 py-3 rounded-2xl text-base font-bold text-center outline-none transition-all"
          style={{
            border: "2.5px solid var(--coinly-deep-blue)",
            background: "var(--coinly-cream)",
            color: "var(--coinly-deep-blue)",
            boxShadow: error
              ? "4px 4px 0 #C94A22"
              : "4px 4px 0 var(--coinly-deep-blue)",
          }}
        />
      </motion.div>

      {error && (
        <p className="mt-3 text-xs font-bold uppercase tracking-wider" style={{ color: "#C94A22" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="btn-coinly w-full mt-5 justify-center disabled:opacity-60"
      >
        {busy ? "Unlocking…" : "Unlock"}
      </button>

      <a
        href="/"
        className="inline-flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity"
        style={{ color: "var(--coinly-deep-blue)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to portfolio
      </a>
    </motion.form>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[] | null>(() => {
    if (typeof window === "undefined") return null;
    const cached = sessionStorage.getItem(SESSION_KEY);
    if (!cached) return null;
    try {
      return JSON.parse(cached);
    } catch {
      return null;
    }
  });

  const lock = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setProjects(null);
  };

  if (!projects) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
        style={{ background: "var(--coinly-cream)" }}
      >
        <Sparkle className="absolute top-[10%] left-[8%] animate-wobble" color="var(--coinly-orange)" size={36} />
        <Sparkle className="absolute bottom-[15%] right-[10%] animate-wobble" color="var(--coinly-purple)" size={32} />
        <Cloud className="absolute top-[20%] right-[15%] animate-float-slow" color="var(--coinly-yellow)" size={70} />
        <Cloud className="absolute bottom-[20%] left-[12%]" color="var(--coinly-green)" size={60} />
        <Star className="absolute top-[40%] right-[5%] animate-wobble" color="var(--coinly-sky)" size={28} />
        <Squiggle className="absolute bottom-[35%] left-[5%]" color="var(--coinly-deep-blue)" size={90} />
        <LockScreen onUnlock={setProjects} />
      </main>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: "var(--coinly-cream)" }}>
      <Sparkle className="absolute top-[5%] right-[8%] animate-wobble" color="var(--coinly-orange)" size={40} />
      <Sparkle className="absolute top-[28%] left-[4%]" color="var(--coinly-purple)" size={28} />
      <Cloud className="absolute top-[8%] left-[35%] animate-float-slow" color="#fff" size={70} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-24 relative z-10">
        <header className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: "var(--coinly-deep-blue)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </a>
          <button
            onClick={lock}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: "var(--coinly-deep-blue)" }}
          >
            <LockOpen className="w-3.5 h-3.5" />
            Lock again
          </button>
        </header>

        <div className="text-center mb-12">
          <p className="section-label justify-center flex mb-4">
            <Sparkle size={12} color="var(--coinly-orange)" />
            Private Vault
            <Sparkle size={12} color="var(--coinly-orange)" />
          </p>
          <h1
            className="text-[clamp(2.25rem,5vw,4rem)] font-black tracking-tight leading-[1.05]"
            style={{ color: "var(--coinly-deep-blue)" }}
          >
            Sanjavan's <span className="highlight-orange">private</span> project hub.
          </h1>
          <p
            className="mt-4 text-base md:text-lg font-medium opacity-70 max-w-2xl mx-auto"
            style={{ color: "var(--coinly-deep-blue)" }}
          >
            {projects.length} projects · live demos, repos, and case studies in one place.
          </p>
        </div>

        <AnimatePresence>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Projects;
