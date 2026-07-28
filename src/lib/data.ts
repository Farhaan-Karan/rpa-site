/* ============================================================
   RPA — SAMPLE DATA LAYER
   In production these are served from Supabase. Shapes match
   the intended DB tables so the swap is a one-liner per query.
   ============================================================ */

export type Stat = { label: string; value: number; suffix?: string };

export const liveStats: Stat[] = [
  { label: "Players", value: 800, suffix: "+" },
  { label: "Clubs", value: 100, suffix: "+" },
  { label: "Districts", value: 6 },
  { label: "Cities", value: 9 },
];

export type City = {
  slug: string;
  name: string;
  players: number;
  clubs: number;
  courts: number;
  blurb: string;
  // normalized 0–100 position on the stylised Rajasthan map
  x: number;
  y: number;
};

export const cities: City[] = [
  { slug: "jaipur", name: "Jaipur", players: 87, clubs: 87, courts: 87, x: 58, y: 50, blurb: "The Pink City is RPA's beating heart — 87 venues and counting, the largest pickleball community in the state." },
  { slug: "udaipur", name: "Udaipur", players: 5, clubs: 5, courts: 5, x: 36, y: 78, blurb: "The Lake City's scene is surging — 5 venues including PWR-sanctioned Sports Fusion." },
  { slug: "jodhpur", name: "Jodhpur", players: 4, clubs: 4, courts: 4, x: 28, y: 56, blurb: "The Blue City is building a strong desert circuit with 4 dedicated venues." },
  { slug: "kota", name: "Kota", players: 4, clubs: 4, courts: 4, x: 60, y: 70, blurb: "The education capital is turning into a pickleball hotspot, 4 venues and rising." },
  { slug: "bhilwara", name: "Bhilwara", players: 3, clubs: 3, courts: 3, x: 50, y: 66, blurb: "The textile city has joined the movement with 3 fresh venues." },
  { slug: "ajmer", name: "Ajmer", players: 2, clubs: 2, courts: 2, x: 48, y: 58, blurb: "Heritage town, brand-new courts — 2 venues anchoring central Rajasthan." },
];

export type Tournament = {
  slug: string;
  name: string;
  city: string;
  venue: string;
  start: string;
  end: string;
  tier: "Gold" | "Silver" | "Open" | "Junior";
  status: "upcoming" | "live" | "past";
  prize: string;
  draw: number;
  champion?: string;
  banner: string;
};

export const tournaments: Tournament[] = [
  { slug: "jaipur-gold-series-2026", name: "Jaipur Gold Series", city: "Jaipur", venue: "RPA State Academy", start: "2026-07-18", end: "2026-07-20", tier: "Gold", status: "upcoming", prize: "₹5,00,000", draw: 256, banner: "/images/arena.jpg" },
  { slug: "lake-city-open-2026", name: "Lake City Open", city: "Udaipur", venue: "Fateh Sagar Sports Hub", start: "2026-08-02", end: "2026-08-04", tier: "Open", status: "upcoming", prize: "₹2,50,000", draw: 192, banner: "/images/community.jpg" },
  { slug: "marwar-junior-cup-2026", name: "Marwar Junior Cup", city: "Jodhpur", venue: "Umaid Stadium Courts", start: "2026-07-05", end: "2026-07-06", tier: "Junior", status: "live", prize: "₹1,00,000", draw: 128, banner: "/images/junior.jpg" },
  { slug: "desert-silver-classic-2026", name: "Desert Silver Classic", city: "Bikaner", venue: "North Zone Centre", start: "2026-09-12", end: "2026-09-13", tier: "Silver", status: "upcoming", prize: "₹1,50,000", draw: 96, banner: "/images/action.jpg" },
  { slug: "pink-city-championship-2026", name: "Pink City Championship", city: "Jaipur", venue: "RPA State Academy", start: "2026-03-21", end: "2026-03-23", tier: "Gold", status: "past", prize: "₹5,00,000", draw: 256, champion: "Aarav Mehta", banner: "/images/arena.jpg" },
  { slug: "kota-open-2026", name: "Kota Open", city: "Kota", venue: "Chambal Sports Arena", start: "2026-02-14", end: "2026-02-15", tier: "Open", status: "past", prize: "₹2,00,000", draw: 160, champion: "Diya Sharma", banner: "/images/community.jpg" },
];

export type Player = {
  slug: string;
  name: string;
  city: string;
  rank: number;
  category: "Men" | "Women" | "Junior";
  points: number;
  titles: number;
  winRate: number;
  age: number;
  handed: "Right" | "Left";
  photo: string;
  bio: string;
  achievements: string[];
};

export const players: Player[] = [
  { slug: "aarav-mehta", name: "Aarav Mehta", city: "Jaipur", rank: 1, category: "Men", points: 8420, titles: 11, winRate: 84, age: 24, handed: "Right", photo: "/images/player-1.jpg", bio: "The state's number one and most decorated singles player, known for a relentless baseline game and a devastating third-shot drop.", achievements: ["Pink City Championship 2026", "National Top-16", "3× Gold Series Winner"] },
  { slug: "diya-sharma", name: "Diya Sharma", city: "Kota", rank: 1, category: "Women", points: 8110, titles: 9, winRate: 81, age: 22, handed: "Left", photo: "/images/player-2.jpg", bio: "A complete shotmaker with elite hands at the kitchen line. Rajasthan's flagbearer on the national women's circuit.", achievements: ["Kota Open 2026", "National Quarterfinalist", "2× Open Champion"] },
  { slug: "kabir-singh", name: "Kabir Singh", city: "Jodhpur", rank: 3, category: "Junior", points: 6240, titles: 6, winRate: 78, age: 17, handed: "Right", photo: "/images/player-3.jpg", bio: "The brightest junior prospect in the west — a fearless attacker already pushing the senior field.", achievements: ["Marwar Junior Cup Finalist", "U-18 State Champion", "Rising Star Award"] },
  { slug: "ananya-rathore", name: "Ananya Rathore", city: "Udaipur", rank: 2, category: "Women", points: 7640, titles: 7, winRate: 79, age: 25, handed: "Right", photo: "/images/player-2.jpg", bio: "Lake City's finest — a tactician whose doubles partnerships have dominated the southern circuit.", achievements: ["Lake City Open Champion", "State Doubles No.1", "Fair Play Award"] },
  { slug: "vivaan-joshi", name: "Vivaan Joshi", city: "Jaipur", rank: 2, category: "Men", points: 7980, titles: 8, winRate: 80, age: 27, handed: "Right", photo: "/images/player-1.jpg", bio: "A power-baseline specialist and the perennial challenger to the top spot.", achievements: ["Gold Series Finalist ×2", "National Top-32", "Speed of the Year"] },
  { slug: "myra-agarwal", name: "Myra Agarwal", city: "Ajmer", rank: 4, category: "Junior", points: 5210, titles: 4, winRate: 74, age: 16, handed: "Left", photo: "/images/player-2.jpg", bio: "A composed junior beyond her years, anchoring the central zone development squad.", achievements: ["U-16 State Champion", "Marwar Junior Semifinalist", "Academy MVP"] },
  { slug: "reyansh-gupta", name: "Reyansh Gupta", city: "Bikaner", rank: 4, category: "Men", points: 6890, titles: 5, winRate: 76, age: 29, handed: "Right", photo: "/images/player-3.jpg", bio: "The desert's strongest, leading the North Zone's competitive rise.", achievements: ["Desert Classic Champion", "Veteran State No.1", "North Zone Captain"] },
  { slug: "saanvi-bhati", name: "Saanvi Bhati", city: "Jodhpur", rank: 3, category: "Women", points: 6720, titles: 5, winRate: 75, age: 23, handed: "Right", photo: "/images/player-2.jpg", bio: "An all-court athlete with elite movement and a rapidly climbing ranking.", achievements: ["Marwar Open Champion", "State Doubles Finalist", "Most Improved"] },
];

export type RankingRow = { rank: number; name: string; city: string; points: number; change: number };

export const rankings: Record<"Men" | "Women" | "Junior" | "Doubles", RankingRow[]> = {
  Men: [
    { rank: 1, name: "Aarav Mehta", city: "Jaipur", points: 8420, change: 0 },
    { rank: 2, name: "Vivaan Joshi", city: "Jaipur", points: 7980, change: 1 },
    { rank: 3, name: "Reyansh Gupta", city: "Bikaner", points: 6890, change: -1 },
    { rank: 4, name: "Arjun Pareek", city: "Kota", points: 6540, change: 2 },
    { rank: 5, name: "Ishaan Vyas", city: "Udaipur", points: 6210, change: 0 },
    { rank: 6, name: "Dhruv Saxena", city: "Ajmer", points: 5980, change: -1 },
    { rank: 7, name: "Krish Mathur", city: "Jaipur", points: 5740, change: 3 },
    { rank: 8, name: "Yuvraj Shekhawat", city: "Jodhpur", points: 5510, change: 0 },
  ],
  Women: [
    { rank: 1, name: "Diya Sharma", city: "Kota", points: 8110, change: 0 },
    { rank: 2, name: "Ananya Rathore", city: "Udaipur", points: 7640, change: 0 },
    { rank: 3, name: "Saanvi Bhati", city: "Jodhpur", points: 6720, change: 1 },
    { rank: 4, name: "Kiara Jain", city: "Jaipur", points: 6480, change: -1 },
    { rank: 5, name: "Navya Chouhan", city: "Ajmer", points: 6120, change: 2 },
    { rank: 6, name: "Aadhya Soni", city: "Bikaner", points: 5870, change: 0 },
    { rank: 7, name: "Pari Khandelwal", city: "Jaipur", points: 5640, change: -2 },
    { rank: 8, name: "Riya Lodha", city: "Udaipur", points: 5390, change: 1 },
  ],
  Junior: [
    { rank: 1, name: "Kabir Singh", city: "Jodhpur", points: 6240, change: 1 },
    { rank: 2, name: "Ayaan Khan", city: "Jaipur", points: 5980, change: -1 },
    { rank: 3, name: "Myra Agarwal", city: "Ajmer", points: 5210, change: 2 },
    { rank: 4, name: "Vihaan Bohra", city: "Kota", points: 4980, change: 0 },
    { rank: 5, name: "Anaya Tiwari", city: "Udaipur", points: 4760, change: 1 },
    { rank: 6, name: "Shaurya Meena", city: "Bikaner", points: 4520, change: -2 },
    { rank: 7, name: "Ira Choudhary", city: "Jaipur", points: 4310, change: 0 },
    { rank: 8, name: "Aarush Nagar", city: "Jodhpur", points: 4180, change: 3 },
  ],
  Doubles: [
    { rank: 1, name: "Mehta / Joshi", city: "Jaipur", points: 9120, change: 0 },
    { rank: 2, name: "Sharma / Rathore", city: "Kota · Udaipur", points: 8740, change: 1 },
    { rank: 3, name: "Gupta / Shekhawat", city: "Bikaner · Jodhpur", points: 7990, change: -1 },
    { rank: 4, name: "Bhati / Soni", city: "Jodhpur · Bikaner", points: 7460, change: 0 },
    { rank: 5, name: "Pareek / Vyas", city: "Kota · Udaipur", points: 7120, change: 2 },
    { rank: 6, name: "Jain / Khandelwal", city: "Jaipur", points: 6880, change: -1 },
    { rank: 7, name: "Singh / Khan", city: "Jodhpur · Jaipur", points: 6540, change: 0 },
    { rank: 8, name: "Chouhan / Saxena", city: "Ajmer", points: 6210, change: 1 },
  ],
};

export type Leader = {
  name: string;
  role: string;
  /** empty string renders the initials fallback until a photo is supplied */
  photo: string;
  note: string;
  instagram?: string;
};

export const leadership: Leader[] = [
  { name: "Bhavya Bishnoi", role: "President", photo: "/images/leader-bhavya.jpg", instagram: "https://www.instagram.com/bbhavyabishnoi/", note: "Leading RPA's mission to grow pickleball in every district of Rajasthan and build a clear pathway from grassroots to the national stage." },
  { name: "Kanika Choudhary", role: "Vice President", photo: "/images/leader-kanika.jpg", instagram: "https://www.instagram.com/kanikachoudhary/", note: "Driving RPA's community, competition and development programmes across the state." },
  // photo pending — supply public/images/leader-chaitanya.jpg and set it here;
  // an empty string renders the initials card rather than a broken image.
  { name: "Chaitanya Raj Singh", role: "Vice President", photo: "", instagram: "https://www.instagram.com/crsjaisalmer/", note: "Championing the growth of pickleball across Rajasthan's heritage cities and desert districts." },
  { name: "Akshay Singhi", role: "General Secretary", photo: "/images/leader-akshay.jpg", instagram: "https://www.instagram.com/akshay.singhi/", note: "Overseeing operations, club affiliations and the association's day-to-day governance." },
];

export type Club = {
  name: string;
  type: "Club" | "Academy";
  city: string;
  courts: number;
  members: number;
  coaching: boolean;
};

export const clubs: Club[] = [
  { name: "Pink City Pickleball Club", type: "Club", city: "Jaipur", courts: 6, members: 420, coaching: true },
  { name: "RPA State Academy", type: "Academy", city: "Jaipur", courts: 8, members: 310, coaching: true },
  { name: "Marwar Racquet Academy", type: "Academy", city: "Jodhpur", courts: 4, members: 180, coaching: true },
  { name: "Lake City Pickle Hub", type: "Club", city: "Udaipur", courts: 5, members: 240, coaching: true },
  { name: "Chambal Sports Arena", type: "Club", city: "Kota", courts: 4, members: 160, coaching: false },
  { name: "Ajmer Central Courts", type: "Club", city: "Ajmer", courts: 3, members: 120, coaching: true },
  { name: "North Zone Pickleball Centre", type: "Academy", city: "Bikaner", courts: 4, members: 140, coaching: true },
  { name: "Amber Heights Club", type: "Club", city: "Jaipur", courts: 3, members: 95, coaching: false },
];

export type Court = {
  name: string;
  city: string;
  area: string;
  surface: "Acrylic" | "Concrete" | "Cushioned";
  indoor: boolean;
  courts: number;
  lighting: boolean;
};

export const courts: Court[] = [
  { name: "RPA State Academy", city: "Jaipur", area: "Malviya Nagar", surface: "Cushioned", indoor: true, courts: 8, lighting: true },
  { name: "Central Park Courts", city: "Jaipur", area: "C-Scheme", surface: "Acrylic", indoor: false, courts: 4, lighting: true },
  { name: "Umaid Stadium Courts", city: "Jodhpur", area: "Ratanada", surface: "Acrylic", indoor: false, courts: 6, lighting: true },
  { name: "Fateh Sagar Sports Hub", city: "Udaipur", area: "Fateh Sagar", surface: "Cushioned", indoor: true, courts: 5, lighting: true },
  { name: "Chambal Sports Arena", city: "Kota", area: "Vigyan Nagar", surface: "Concrete", indoor: false, courts: 4, lighting: true },
  { name: "Ajmer Central Courts", city: "Ajmer", area: "Vaishali Nagar", surface: "Acrylic", indoor: false, courts: 3, lighting: false },
  { name: "North Zone Centre", city: "Bikaner", area: "Rani Bazar", surface: "Cushioned", indoor: true, courts: 4, lighting: true },
  { name: "Mansagar Lakefront Courts", city: "Jaipur", area: "Jal Mahal", surface: "Acrylic", indoor: false, courts: 5, lighting: true },
];

export type NewsItem = {
  slug: string;
  title: string;
  category: "News" | "Feature" | "Development" | "Tournament";
  source: string;
  url: string;
  excerpt: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    slug: "bhavya-bishnoi-pickleball-capital",
    title: "Medals Alone Mean Nothing: Bhavya Bishnoi's Bold Vision to Make Rajasthan India's Pickleball Capital",
    category: "Feature",
    source: "Times Now · Exclusive",
    url: "https://www.timesnownews.com/sports/pickleball/medals-alone-mean-nothing-bhavya-bishnois-bold-vision-to-make-rajasthan-indias-pickleball-capital-exclusive-article-155155821",
    excerpt: "An exclusive with the RPA President on why medals alone mean nothing — and his plan to make Rajasthan India's pickleball capital.",
    image: "/images/news-medals.jpg",
  },
  {
    slug: "world-cup-2026-squads",
    title: "Indian Senior Squads Announced for the Pickleball World Cup 2026",
    category: "News",
    source: "Times Now",
    url: "https://www.timesnownews.com/sports/pickleball/indian-senior-squads-announced-for-pickleball-world-cup-2026-article-155147998",
    excerpt: "India names its senior squads for the Pickleball World Cup 2026 as the national programme steps up.",
    image: "/images/news-worldcup.jpg",
  },
  {
    slug: "bhavya-bishnoi-desert-state",
    title: "Bhavya Bishnoi Is Driving Pickleball's Growth in the Desert State",
    category: "Feature",
    source: "Times Now",
    url: "https://www.timesnownews.com/sports/pickleball/leader-in-haryana-rajasthan-at-heart-bhavya-bishnoi-is-driving-pickleballs-growth-in-the-desert-state-article-153137207",
    excerpt: "A leader in Haryana with Rajasthan at heart — how RPA President Bhavya Bishnoi is powering the sport's rise.",
    image: "/images/news-desertstate.jpg",
  },
  {
    slug: "ipl-rajasthan-moment",
    title: "Indian Pickleball League: Rajasthan's Pickleball Moment Has Arrived",
    category: "News",
    source: "Times Now",
    url: "https://www.timesnownews.com/sports/pickleball/indian-pickleball-league-where-culture-meets-competition-rajasthans-pickleball-moment-steered-by-bhavya-bishnoi-has-arrived-article-153327559",
    excerpt: "Where culture meets competition — Rajasthan's pickleball moment, steered by Bhavya Bishnoi, has arrived.",
    image: "/images/news-ipl.jpg",
  },
];

export type Sponsor = { name: string; tier: "Title" | "Official" | "Partner" };

export const sponsors: Sponsor[] = [
  { name: "MARUDHARA BANK", tier: "Title" },
  { name: "RAJWADA MOTORS", tier: "Official" },
  { name: "ARAVALI SPORTS", tier: "Official" },
  { name: "THAR ENERGY", tier: "Partner" },
  { name: "PINK CITY REALTY", tier: "Partner" },
  { name: "DESERT WATER", tier: "Partner" },
  { name: "HERITAGE HOTELS", tier: "Partner" },
  { name: "VAULT FITNESS", tier: "Partner" },
];

export type MembershipPlan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  featured?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  { name: "Player", price: "₹999", period: "/year", tagline: "For competitors and enthusiasts", features: ["Official RPA player ID", "State ranking eligibility", "Tournament entry access", "Member-rate court bookings", "Quarterly newsletter"] },
  { name: "Coach", price: "₹2,499", period: "/year", tagline: "For certified & aspiring coaches", featured: true, features: ["Everything in Player", "RPA coach certification track", "Listing in coach directory", "Coaching workshops & CPD", "Academy partnership access"] },
  { name: "Academy", price: "₹9,999", period: "/year", tagline: "For academies & training centres", features: ["Official academy affiliation", "Featured directory placement", "Host sanctioned events", "Bulk player onboarding", "Dedicated RPA liaison"] },
  { name: "Club", price: "₹14,999", period: "/year", tagline: "For clubs & venues", features: ["Court network listing", "Event sanctioning rights", "Co-branded tournaments", "Priority calendar slots", "Marketing support"] },
];

export const galleryImages = [
  "/images/action.jpg",
  "/images/arena.jpg",
  "/images/community.jpg",
  "/images/junior.jpg",
  "/images/player-1.jpg",
  "/images/player-2.jpg",
  "/images/player-3.jpg",
  "/images/paddle.jpg",
];

/* ── Sanctioned tournaments (PWR / IPA, 2026) ── */
export type SanctionedEvent = {
  name: string;
  tier: string;
  dates: string;
  venue: string;
  city: string;
  prize: string;
  organiser: string;
  status: "Sanctioned" | "Upcoming";
};

export const sanctionedTournaments: SanctionedEvent[] = [
  { name: "Pickle Up 4.0", tier: "PWR 100", dates: "15–17 May 2026", venue: "Sports Fusion", city: "Udaipur", prize: "₹1,00,000", organiser: "Shail Pandya", status: "Sanctioned" },
];

/** Pickleball World Rankings tiers — what each level means. */
export const pwrTiers: { tier: string; points: string; note: string }[] = [
  { tier: "PWR 100", points: "100 pts", note: "State-level sanctioned events with national ranking points." },
  { tier: "PWR 250", points: "250 pts", note: "Premier regional draws with bigger fields and prize pools." },
  { tier: "PWR 500", points: "500 pts", note: "Marquee national-tier stops on the Indian circuit." },
];

/* ── FAQs (Learn) ── */
export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  { q: "What is pickleball?", a: "Pickleball is a paddle sport that blends tennis, badminton and table tennis. It's played on a badminton-sized court with a perforated plastic ball and solid paddles — easy to learn, hard to put down, and great for all ages." },
  { q: "How do I start playing in Rajasthan?", a: "Browse the 100+ venues mapped on our Clubs page, register as an RPA member, and just show up — most clubs run beginner sessions and open play where paddles and balls are provided." },
  { q: "Do I need experience or my own equipment?", a: "Not at all. Most venues lend paddles and balls for your first few sessions. Comfortable shoes and water are all you really need to begin." },
  { q: "How do I become an RPA member?", a: "Register through the official IPA portal or our membership form on the Join Us page. Membership gives you a player ID, tournament eligibility and ranking points." },
  { q: "How are tournaments sanctioned?", a: "RPA-affiliated events are sanctioned under the Pickleball World Rankings (PWR) system through the Indian Pickleball Association, so your results count towards national rankings." },
  { q: "Can my club or academy get affiliated?", a: "Yes. Any venue running pickleball in Rajasthan can apply for affiliation via the Club/Academy registration form on the Join Us page to join our network of 100+ venues." },
  { q: "Is pickleball good for kids and seniors?", a: "Absolutely — it's one of the most age-inclusive sports there is. The smaller court and slower ball make it gentle on the body while still being genuinely competitive." },
  { q: "What are the basic rules?", a: "Serve underhand crosscourt, let the ball bounce once on each side before volleying (the 'double-bounce rule'), stay out of the 7-foot 'kitchen' when volleying, and play first to 11, win by 2. Full rulebook is linked above." },
];
