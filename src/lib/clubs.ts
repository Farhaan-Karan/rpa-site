// Affiliated pickleball clubs & academies across Rajasthan — real venue data.
// 105 venues across 6 districts (Oct 2025 listing).

export type Venue = {
  id: number;
  name: string;
  city: string;
  address: string;
  phone?: string;
};

export const venues: Venue[] = [
  // ── AJMER (2) ──
  { id: 1, name: "ASCOM", city: "Ajmer", address: "Behind Krishna Greens Garden, near Dhobi Ghat, Vinay Nagar, Pal Bhichala, Ajmer – 305007", phone: "+91 88520 09756" },
  { id: 2, name: "Parayan Pickleball Court", city: "Ajmer", address: "200 Feet, Pushkar Bypass Rd, near Medical College, Kayad, Ajmer – 305023" },

  // ── BHILWARA (3) ──
  { id: 3, name: "Pickle Ball Court Bhilwara", city: "Bhilwara", address: "Sewa Sadan, Khel Maidan, 150/8, New Housing Board, Kawa Kheda, Shastri Nagar, Bhilwara – 311001" },
  { id: 4, name: "Pickle Park (Neon)", city: "Bhilwara", address: "Near Meera Circle, near Swift College, Transport Nagar, Patel Nagar, Bhilwara – 311001", phone: "+91 95090 55598" },
  { id: 5, name: "Pickle Pulse", city: "Bhilwara", address: "Near Ashika Resort, Chandrashekar Azad Nagar, Atoon, Bhilwara – 311001" },

  // ── JAIPUR (87) ──
  { id: 6, name: "ARV Pickleball", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 7, name: "CE Courts", city: "Jaipur", address: "5th Floor, Chandni Emporio, C-8, Vaishali Marg, Vaishali Nagar, Jaipur – 302021" },
  { id: 8, name: "CentreCourt | Jaipur", city: "Jaipur", address: "KG Estate, SL Marg, Lal Bahadur Nagar, Adinath Nagar, Jaipur – 302017" },
  { id: 9, name: "CentreCourt | Mansarovar", city: "Jaipur", address: "Mansarovar, Jaipur – 302020" },
  { id: 10, name: "Court & Co.", city: "Jaipur", address: "D-44, Sanjeevani Marg, D-Block, Vaishali Nagar, Jaipur – 302021", phone: "+91 80032 92227" },
  { id: 11, name: "Court Botanica", city: "Jaipur", address: "Behind Genpact, B7, JLN Marg, Malviya Nagar, Jaipur – 302017", phone: "+91 95870 01915" },
  { id: 12, name: "Courista | Jagatpura", city: "Jaipur", address: "Jagatpura, Jaipur – 302017" },
  { id: 13, name: "Courtside – The Pickleball Club", city: "Jaipur", address: "1, A-105, Tonk Rd, Jai Jawan Colony, Jaipur – 302018", phone: "+91 91661 29000" },
  { id: 14, name: "Cross Courts", city: "Jaipur", address: "Ajmer Road, Jaipur – 302006" },
  { id: 15, name: "DSA Pickleball | Dhabriya Sports Arena", city: "Jaipur", address: "B11, D1, near AU Small Finance Bank, RIICO, Malviya Nagar Industrial Area, Jaipur – 302017", phone: "+91 81122 11869" },
  { id: 16, name: "DOJO – Pickleball n More", city: "Jaipur", address: "H-9, Chitaranjan Marg, C Scheme, Ashok Nagar, Jaipur – 302001", phone: "+91 98282 41373" },
  { id: 17, name: "Fun Kingdom | Jaipur", city: "Jaipur", address: "Jaipur, Rajasthan", phone: "+91 78499 02914" },
  { id: 18, name: "House of Pickleball", city: "Jaipur", address: "29, New Sanganer Rd, behind Shyam Nagar, Saket Nagar, Shyam Nagar, Jaipur – 302019", phone: "+91 97840 03522" },
  { id: 19, name: "Jaipur Pickleball by 8teen10", city: "Jaipur", address: "128, Bhawani Singh Lane, Sahakar Marg, Lalkothi, Jaipur – 302001", phone: "+91 95495 23748" },
  { id: 20, name: "Jaipur Pickleball | Tilak Nagar", city: "Jaipur", address: "A4, Vijay Path, Tilak Nagar, Raja Park, Jaipur – 302004", phone: "+91 98290 66669" },
  { id: 21, name: "Jaipur Pickleball by Pay & Play Parks", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 22, name: "JJ Pickleball", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 23, name: "Jaipur Pickleball Club | Narayan Vihar", city: "Jaipur", address: "Narayan Vihar, Jaipur" },
  { id: 24, name: "Khelcity | Jaipur", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 25, name: "Let's Pickl", city: "Jaipur", address: "Malviya Nagar, Jaipur – 302017" },
  { id: 26, name: "Mahapragya Sports Academy", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 27, name: "Miracle Pickleball", city: "Jaipur", address: "Shanti Path, near Water Tank, Tilak Nagar, Jaipur" },
  { id: 28, name: "NM Pickleball", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 29, name: "Next Round Sports", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 30, name: "ODD | Orange Dink Day", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 31, name: "Paddle Brew", city: "Jaipur", address: "Mansarovar, Jaipur – 302020" },
  { id: 32, name: "Paddle X | The Pickleball Club", city: "Jaipur", address: "A-40 & A-49, Engineers Colony, Mansarovar, Jaipur – 302020" },
  { id: 33, name: "Palecha Sports Arena", city: "Jaipur", address: "Plot 364, H Block Rd, Siddharth Nagar, Jagatpura, Jaipur – 302017" },
  { id: 34, name: "Pick'a Ball", city: "Jaipur", address: "C-21 Shree, Bhagawan Marg, opp. Hotel Akshyam, Goverdhan Colony, Jaipur – 302019" },
  { id: 35, name: "Pickadily", city: "Jaipur", address: "Terrace Floor, Evershine Tower, F-1, Amrapali Circle, Jaipur – 302001", phone: "+91 88244 82669" },
  { id: 36, name: "Pickleball 101", city: "Jaipur", address: "6-KHA-5, Surya Dev Mandur Marg, Sector 6, Jawahar Nagar, Jaipur – 302004", phone: "+91 76910 14101" },
  { id: 37, name: "Pickleball Infinia | Rajapark", city: "Jaipur", address: "Rajapark, Jaipur" },
  { id: 38, name: "Pickleball Meadows | FunKingdom", city: "Jaipur", address: "B2 Bypass Rd, Shipra Path, RIICO Industrial Area, Mansarovar, Jaipur – 302020", phone: "+91 78499 02914" },
  { id: 39, name: "Pickleball Reserve", city: "Jaipur", address: "Plot 8-9, JLN Marg, Chandrakala Colony, Durgapura, Jaipur – 302017", phone: "+91 85295 22219" },
  { id: 40, name: "Pickleball Socials | Gandhi Path West", city: "Jaipur", address: "Gandhi Path West, Jaipur" },
  { id: 41, name: "Pickleball Socials | Jagatpura", city: "Jaipur", address: "Jagatpura, Jaipur" },
  { id: 42, name: "Pickleball Socials | Sikar Road", city: "Jaipur", address: "Sikar Road, Jaipur" },
  { id: 43, name: "Pickleball Socials × Quyu's", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 44, name: "Pickle at KK Royal Hotel", city: "Jaipur", address: "KK Royal Hotel & Convention Centre, Jaipur" },
  { id: 45, name: "Pickle Pavillion Sports Centre", city: "Jaipur", address: "C Block, Jai Jawan Marg, opp. Town Coffee Café, Lal Bahadur Nagar, Jaipur – 302018" },
  { id: 46, name: "PickleBolt Club", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 47, name: "Pickle Tickle | Jaipur", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 48, name: "Pickle Pro Club", city: "Jaipur", address: "C-16, Tonk Rd, opp. Kamal & Co., Dev Nagar, Tonk Phatak, Jaipur – 302018" },
  { id: 49, name: "The Pickle Lounge | Rajapark", city: "Jaipur", address: "Rajapark, Jaipur" },
  { id: 50, name: "The Pickle House | Mansarovar", city: "Jaipur", address: "Mansarovar, Jaipur" },
  { id: 51, name: "Pickle Park | Jaipur (Gopalpura)", city: "Jaipur", address: "Gopalpura Bypass Rd, Brijlalpura, Jaipur" },
  { id: 52, name: "Play Padel | Pickleball | Clarks Amer", city: "Jaipur", address: "Inside Clarks Amer Hotel, JLN Marg, Durgapura, Jaipur – 302018", phone: "+91 82731 82144" },
  { id: 53, name: "Play Social | Jaipur", city: "Jaipur", address: "Plot 932, Shanti Nagar Rd, Nalanda Vihar, Durgapura, Jaipur – 302018", phone: "+91 77422 29050" },
  { id: 54, name: "PlayAll Orbit Mall", city: "Jaipur", address: "Metro Station, Orbit Mall, Ajmer Rd, Madrampur, Civil Lines, Jaipur – 302006" },
  { id: 55, name: "Playard Pickleball Club", city: "Jaipur", address: "S-15, JLN Marg, opp. World Trade Park, Adinath Nagar, Jaipur – 302017", phone: "+91 98280 63636" },
  { id: 56, name: "Playground Pickleball Club", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 57, name: "Queen's Court", city: "Jaipur", address: "Guru Jhambeshwar Nagar A, Vaishali Nagar, Jaipur – 302021", phone: "+91 98888 91020" },
  { id: 58, name: "RD's Pickleball Academy | Pratap Nagar", city: "Jaipur", address: "Pratap Nagar, Jaipur" },
  { id: 59, name: "RPM | Rally Play More", city: "Jaipur", address: "6, Tonk Rd, Jai Jawan Colony, Milap Nagar, Jaipur – 302019" },
  { id: 60, name: "RallyGully | Gandhi Path", city: "Jaipur", address: "Gandhi Path, Jaipur" },
  { id: 61, name: "ROBOtec Pickleball Club", city: "Jaipur", address: "146 Hira Nagar, NH-8, Ajmer Rd, near DCM, Marudhar Nagar, Jaipur – 302021" },
  { id: 62, name: "Sai Courts", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 63, name: "Servee | Jaipur", city: "Jaipur", address: "SM-65, behind HPCL Petrol Pump, New Aatish Market, Mansarovar, Jaipur – 302020" },
  { id: 64, name: "Skydeck | Jaipur", city: "Jaipur", address: "14E, IC-6, behind Sunny Trade Centre, New Aatish Market, Mansarovar, Jaipur – 302020", phone: "+91 78518 78536" },
  { id: 65, name: "Skyline Smash | Jaipur", city: "Jaipur", address: "Malviya Nagar, Jaipur" },
  { id: 66, name: "Skypod Pickleball Café", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 67, name: "SmashCity | Jaipur", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 68, name: "Smasho Indoor Pickleball", city: "Jaipur", address: "Kanakpura, Jaipur" },
  { id: 69, name: "Sportex Pickleball Club", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 70, name: "Sujangarh Sports Academy", city: "Jaipur", address: "Gopal Pura Mode, Jaipur" },
  { id: 71, name: "Sundowner Sports & Café | Malviya Nagar", city: "Jaipur", address: "Malviya Nagar, Jaipur – 302017" },
  { id: 72, name: "Terra | Indoor Courts & Café", city: "Jaipur", address: "Civil Lines, Jaipur" },
  { id: 73, name: "The Court | Jaipur", city: "Jaipur", address: "98, Rathore Nagar, Queens Rd, Vaishali Nagar, Jaipur – 302021", phone: "+91 92566 53947" },
  { id: 74, name: "The Court Club", city: "Jaipur", address: "60-61, SMS Colony, Shipra Path, Mansarovar, Jaipur – 302020" },
  { id: 75, name: "The Kitchen Court", city: "Jaipur", address: "Milap Nagar, Jaipur" },
  { id: 76, name: "The South PickleBall Arena", city: "Jaipur", address: "The South Water Park, Goner Rd, opp. Chokhi Dhani, Sitapura, Jaipur – 302022", phone: "+91 96363 15450" },
  { id: 77, name: "The Pickle Club Vatika", city: "Jaipur", address: "Vatika, Jaipur" },
  { id: 78, name: "The Pickleball Arena", city: "Jaipur", address: "C1/1, JLN Road Service Lane, Adinath Nagar, Jaipur – 302018", phone: "+91 89555 64355" },
  { id: 79, name: "The Pickleball Yard", city: "Jaipur", address: "Manyawas, Mohru Nagar, Mansarovar, Jaipur – 302020", phone: "+91 86900 66684" },
  { id: 80, name: "The Playing Nest", city: "Jaipur", address: "Adarsh Vidhya Mandir, Ambabari Circle, Vidyadhar Nagar, Jaipur – 302039" },
  { id: 81, name: "The Rally Retreat | Pickleball & Stay", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 82, name: "VKTRY Courts", city: "Jaipur", address: "Plot 8-9, Vaishali Marg, Ganga Sagar-B, Nemi Nagar Ext., Vaishali Nagar, Jaipur – 302021", phone: "+91 90575 41168" },
  { id: 83, name: "Vktry Courts (Indoor)", city: "Jaipur", address: "Vaishali Nagar, Jaipur – 302021", phone: "+91 90575 41168" },
  { id: 84, name: "Zen Pickleball", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 85, name: "Pickleball 101 | Jawahar Nagar", city: "Jaipur", address: "6-KHA-5, Jawahar Nagar, Jaipur – 302004", phone: "+91 76910 14101" },
  { id: 86, name: "Pickle Pavillion (Hudle)", city: "Jaipur", address: "Jai Jawan Marg, Lal Bahadur Nagar, Jaipur – 302018" },
  { id: 87, name: "Pickleball by Pay & Play Parks", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 88, name: "SmashZone", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 89, name: "ARV Pickleball | Jaipur", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 90, name: "The Pickled Arena", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 91, name: "Pickleball Socials | Quyu's", city: "Jaipur", address: "Jaipur, Rajasthan" },
  { id: 92, name: "Pickle Tickle", city: "Jaipur", address: "Jaipur, Rajasthan" },

  // ── JODHPUR (4) ──
  { id: 93, name: "Dropshot Pickleball Court", city: "Jodhpur", address: "B-56, Sector-B, Shastri Nagar, Jodhpur – 342003", phone: "+91 85049 55055" },
  { id: 94, name: "Jodhpur Pickleball Arena", city: "Jodhpur", address: "Pal Rd, behind Spicy Kitchen, Roop Nagar, Bhadu Market, Jodhpur – 342001", phone: "+91 93586 99139" },
  { id: 95, name: "Pickleball by Floor", city: "Jodhpur", address: "Third Floor, B-31, Industrial Estate, 32, New Power House Rd, Sector-H, Shastri Nagar, Jodhpur – 342001", phone: "+91 88992 88996" },
  { id: 96, name: "The Suncity Sports Academy", city: "Jodhpur", address: "E-123, Sector-E, Shastri Nagar, Jodhpur – 342003", phone: "+91 98291 58200" },

  // ── KOTA (4) ──
  { id: 97, name: "BroCo's Pickleball Playground", city: "Kota", address: "D-254, Sector-B, Shrinath Puram, Kota – 324005" },
  { id: 98, name: "Imperial Pickleball", city: "Kota", address: "Road No. 3, Indraprastha Industrial Area, Kota – 324005" },
  { id: 99, name: "PaddleX Pickleball Kota", city: "Kota", address: "5/213, near Ethos Hospital, Swami Vivekananda Nagar, Kota – 324005", phone: "+91 80039 18123" },
  { id: 100, name: "Pickleyard – Pickleball Court", city: "Kota", address: "4th Floor, KDA Plaza, opp. Multipurpose Govt School, Gumanpura, Kota – 324007", phone: "+91 96537 84859" },

  // ── UDAIPUR (5) ──
  { id: 101, name: "PickleX – Neon Pickleball Courts", city: "Udaipur", address: "Sector 3, Bedla Rd, Udaipur – 313002", phone: "+91 92511 44356" },
  { id: 102, name: "Sports Fusion | Padel | Pickleball", city: "Udaipur", address: "Pulla Bhuwana Rd, Udaipur – 313001", phone: "+91 95495 40567" },
  { id: 103, name: "Pickora – Pickleball & Café", city: "Udaipur", address: "711, Sector 11, Hiran Magri, Udaipur – 313002", phone: "+91 82330 33226" },
  { id: 104, name: "DDC Sports Club", city: "Udaipur", address: "Near Bad ka Ped, Titrdi, Sector 9, Phanda, Udaipur – 313001", phone: "+91 79761 15783" },
  { id: 105, name: "Excellere Club", city: "Udaipur", address: "Rani Rd, near Sanjay Gandhi Park, Malla Talai, Udaipur – 313001", phone: "+91 75595 75395" },
];

export type District = {
  city: string;
  count: number;
  blurb: string;
};

/** District breakdown — drives the venues map + community page. */
export const districts: District[] = [
  { city: "Jaipur", count: 87, blurb: "The capital and the beating heart of Rajasthan pickleball." },
  { city: "Udaipur", count: 5, blurb: "The Lake City's fast-rising community scene." },
  { city: "Jodhpur", count: 4, blurb: "The Blue City building a strong desert circuit." },
  { city: "Kota", count: 4, blurb: "An education hub turning into a pickleball hotspot." },
  { city: "Bhilwara", count: 3, blurb: "The textile city joining the movement." },
  { city: "Ajmer", count: 2, blurb: "Heritage town, brand-new courts." },
];

export const venueStats = {
  total: venues.length,
  districts: districts.length,
  withPhone: venues.filter((v) => v.phone).length,
};

export type DistrictBody = {
  district: string;
  head: string | null;
  phone: string | null;
  runs?: string;
};

export const districtBodies: DistrictBody[] = [
  { district: "Jaipur Rural", head: "Samridh Sharma", phone: "+91 96101 77000" },
  { district: "Jaipur Urban", head: "Sameer Khan", phone: "+91 91168 65555", runs: "Queen's Court" },
  { district: "Kota", head: "Kiran Thakar", phone: "+91 96540 06424", runs: "Court Culture" },
  { district: "Bikaner", head: "Pradeep Dharnia", phone: "+91 93642 92929" },
  { district: "Jodhpur", head: "Hitesh Jain", phone: "+91 97824 55555" },
  { district: "Jaisalmer", head: null, phone: null },
];
