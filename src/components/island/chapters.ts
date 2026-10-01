// One chapter per numbered section. Each chapter has a place on the island,
// a full-screen opener, and a camera keyframe (see layout.ts).

export type ChapterId = "projects" | "research" | "experience" | "story" | "contact";
export type SpyId = ChapterId | "hero";

export type Chapter = {
  id: ChapterId;
  num: string;
  title: string;
  place: string;
  // Background of the section above the opener (null = transparent hero) and below it,
  // so the opener's wavy edges blend into both.
  prevColor: string | null;
  nextColor: string;
};

export const CHAPTERS: Chapter[] = [
  { id: "projects", num: "01", title: "Selected Work", place: "The Castle", prevColor: null, nextColor: "var(--coinly-cream)" },
  { id: "research", num: "02", title: "Research", place: "The Observatory", prevColor: "var(--coinly-deep-blue)", nextColor: "var(--coinly-cream)" },
  { id: "experience", num: "03", title: "Career", place: "The Windmill Workshop", prevColor: "var(--coinly-cream)", nextColor: "var(--coinly-sky)" },
  { id: "story", num: "04", title: "Origin", place: "The Pitch", prevColor: "var(--coinly-sky)", nextColor: "var(--coinly-orange)" },
  { id: "contact", num: "05", title: "Connect", place: "The Market Square", prevColor: "var(--coinly-orange)", nextColor: "var(--coinly-yellow)" },
];

export const scrollToChapter = (id: ChapterId) => {
  document.getElementById(`chapter-${id}`)?.scrollIntoView({ behavior: "smooth" });
};
