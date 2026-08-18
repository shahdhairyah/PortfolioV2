export const projects = [
  {
    id: 1,
    slug: "centralized-dashboard",
    title: "Centralized Dashboard",
    category: "Web Application",
    year: "2026",
    role: "Full-Stack Developer",
    status: "Live",
    image: "/images/projects/project1.png",
    tagline:
      "A unified operations platform for a multi-department institution, aggregating attendance, performance, and administrative data into one real-time, role-aware dashboard. Replaced scattered spreadsheets with a single live source of truth for leadership and HODs.",
    stack: ["PHP", "MySQL", "Bootstrap", "jQuery", "Ajax"],
    githubUrl: "",
    demoUrl: "https://tm00030.zya.me",
    featured: true,
    stats: [
      { value: "5+", label: "Departments" },
      { value: "Real-time", label: "Analytics" },
      { value: "1", label: "Central Dashboard" },
      { value: "100%", label: "Centralized Data" },
    ],
    problemTitle: "Scattered Spreadsheets & Reporting Blindspots",
    problem:
      "Institution heads juggled data spread across spreadsheets and manual reports. Tracking sub-department performance and administrative metrics in real time was nearly impossible — leadership only saw the full picture weeks after the fact.",
    solutionTitle: "Unified Web Platform with Role-Based Access",
    solutionIntro:
      "Built a centralized platform where every department reports into one secure dashboard, with role-based views for admins and HODs, real-time analytics, and automated reporting.",
    solutionPoints: [
      "Role-based access control — admins, HODs, and staff each see only what they need",
      "Real-time analytics and interactive charts across all departments",
      "Centralized user, department, and permission management",
      "Automated report generation for quick decision-making",
      "Responsive interface optimized for daily office workflows",
    ],
    capabilities: [
      "Role-Based Dashboards",
      "Real-Time Analytics",
      "User & Permission Management",
      "Report Generation",
      "Department Oversight",
      "Centralized Records",
    ],
    challenges: [
      {
        title: "Normalizing Multi-Department Data",
        detail:
          "Designed a normalized MySQL schema that safely links departments, users, and records while keeping queries fast even as data grows.",
      },
      {
        title: "Secure Role-Based Access",
        detail:
          "Implemented PHP sessions with role middleware and REST-style endpoints so each role only ever reaches its own slice of the data.",
      },
      {
        title: "Adoption by Non-Technical Staff",
        detail:
          "Iterated the interface with department leads during UAT, trimming friction so daily reporting takes seconds instead of minutes.",
      },
    ],
  },
  {
    id: 2,
    slug: "ai-fruit-ninja",
    title: "AI Fruit Ninja",
    category: "AI / Computer Vision",
    year: "2026",
    role: "Developer & Researcher",
    status: "Live",
    image: "/images/projects/project2.png",
    tagline:
      "A computer-vision arcade experience where your hand becomes the controller. Using a webcam and 21-point hand tracking, players slice virtual fruit in real time — with zero extra hardware.",
    stack: ["Python", "OpenCV", "MediaPipe", "PyGame"],
    githubUrl: "https://github.com/shahdhairya12/fruit_ninja_python_game/",
    demoUrl: "",
    featured: true,
    stats: [
      { value: "30fps", label: "Tracking" },
      { value: "21", label: "Hand points" },
      { value: "0", label: "Extra hardware" },
      { value: "100%", label: "Webcam driven" },
    ],
    problemTitle: "Gesture Games Need Expensive Controllers",
    problem:
      "Traditional gesture-based games require dedicated sensors or costly controllers. Building a responsive, gesture-controlled game using only a standard webcam — fast enough to feel natural — was the real engineering challenge.",
    solutionTitle: "MediaPipe Tracking + Custom Slicing Engine",
    solutionIntro:
      "Combined MediaPipe hand landmarks with a custom slicing engine in Python, rendering the game in real time with PyGame at roughly 30fps.",
    solutionPoints: [
      "21-point hand landmark detection for precise gesture mapping",
      "Real-time slicing detection with combo scoring",
      "Runs entirely on the webcam feed — no controllers needed",
      "Optimized render loop tuned to hold ~30fps on modest hardware",
    ],
    capabilities: [
      "Gesture Controls",
      "Real-Time Tracking",
      "Combo Scoring",
      "No Hardware Required",
      "Webcam Powered",
      "Python Pipeline",
    ],
    challenges: [
      {
        title: "Latency Between Detection and Gameplay",
        detail:
          "Mapped wrist-to-fingertip motion into game-space slicing logic and tuned the MediaPipe-to-PyGame pipeline to minimize perception delay.",
      },
      {
        title: "Accurate Slice Hit Detection",
        detail:
          "Iterated on hit-detection algorithms and scoring during live playtesting until slicing felt precise and fair.",
      },
      {
        title: "Performance on Low-End Devices",
        detail:
          "Reduced per-frame image processing and capped resolutions so the game stays smooth on ordinary webcams and laptops.",
      },
    ],
  },
  {
    id: 3,
    slug: "otp-verification-system",
    title: "OTP Verification System",
    category: "Security / Web",
    year: "2026",
    role: "Backend Developer",
    status: "Live",
    image: "/images/projects/project3.png",
    tagline:
      "A production-style authentication module with email OTP verification and a complete password-reset flow — designed to be dropped into any PHP application without third-party services.",
    stack: ["PHP", "MySQL", "PHPMailer", "Bootstrap"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
    stats: [
      { value: "6-digit", label: "OTP" },
      { value: "3-step", label: "Verify flow" },
      { value: "Encrypted", label: "Storage" },
      { value: "0", label: "Third-party" },
    ],
    problemTitle: "Weak Authentication & Manual Password Flows",
    problem:
      "Basic authentication and manual password flows left accounts exposed. The goal was a self-contained, reusable auth system with verified email sign-ups and safe password recovery — with no external services.",
    solutionTitle: "Self-Hosted PHP Auth Module",
    solutionIntro:
      "Engineered a complete PHP auth flow — OTP generation, expiry, verification, and reset tokens — with secure hashing, session management, and abuse protection.",
    solutionPoints: [
      "6-digit email OTP with expiry and resend safeguards",
      "Secure password hashing and session management",
      "Forgot-password flow with one-time reset tokens",
      "Rate limiting to stop replay and brute-force attempts",
      "Responsive Bootstrap UI for a smooth user journey",
    ],
    capabilities: [
      "Email OTP Verification",
      "Password Reset",
      "Session Management",
      "Rate Limiting",
      "Secure Hashing",
      "Reusable Module",
    ],
    challenges: [
      {
        title: "Token Lifecycle & Expiry",
        detail:
          "Modeled OTP and reset-token tables with strict expiry windows so codes can never be reused after their lifetime ends.",
      },
      {
        title: "Email Delivery Without External Services",
        detail:
          "Integrated PHPMailer for transactional email while keeping the module fully self-hosted and free to run.",
      },
      {
        title: "Hardening Against Abuse",
        detail:
          "Added rate limiting and validation on every endpoint to defend against replay, brute-force, and token leakage.",
      },
    ],
  },
  {
    id: 4,
    slug: "smart-home-system",
    title: "Smart Home System",
    category: "IoT / Hardware",
    year: "2026",
    role: "Hardware & Software",
    status: "Live",
    image: "/images/projects/project4.png",
    tagline:
      "A low-cost IoT home automation system. An ESP8266 WiFi module connects household appliances to a simple web interface for instant remote control — affordable, safe, and expandable.",
    stack: ["Arduino", "C++", "ESP8266", "IoT"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
    stats: [
      { value: "WiFi", label: "Connected" },
      { value: "4+", label: "Appliances" },
      { value: "100%", label: "Expandable" },
      { value: "Low", label: "Cost build" },
    ],
    problemTitle: "Expensive, Locked-Down Smart-Home Kits",
    problem:
      "Commercial smart-home kits are expensive and locked to proprietary ecosystems. The need was a low-budget, DIY solution for controlling household appliances remotely without recurring subscriptions.",
    solutionTitle: "ESP8266 Relay Module Web Control",
    solutionIntro:
      "Wired relay modules to an ESP8266 and wrote lightweight C++ firmware that serves a control page, letting users toggle appliances from any device on the network.",
    solutionPoints: [
      "WiFi-based remote control with instant on/off",
      "Affordable ESP8266 hardware — no cloud lock-in",
      "Relay-based switching with safety margins for household loads",
      "Expandable architecture for more appliances and sensors",
    ],
    capabilities: [
      "Remote Appliance Control",
      "WiFi Enabled",
      "Relay Switching",
      "Expandable Build",
      "Web Interface",
      "Low-Cost Setup",
    ],
    challenges: [
      {
        title: "Reliable Appliance Switching",
        detail:
          "Wired relay modules and tested multiple household loads, adding safety margins and heat management for continuous use.",
      },
      {
        title: "Lightweight Firmware & UI",
        detail:
          "Wrote minimal C++ firmware that serves a responsive control page without bloating the ESP8266's limited memory.",
      },
      {
        title: "Expandability for Real Homes",
        detail:
          "Designed the module map so new appliances and sensors join the network without rewiring the core logic.",
      },
    ],
  },
  {
    id: 5,
    slug: "weather-application",
    title: "Weather Application",
    category: "Web Application",
    year: "2026",
    role: "Frontend Developer",
    status: "Live",
    image: "/images/projects/project5.png",
    tagline:
      "A real-time weather application that turns live API data into a clean, glanceable forecast — current conditions plus a multi-day outlook in a refined, responsive interface.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
    stats: [
      { value: "5-day", label: "Forecast" },
      { value: "Real-time", label: "Data" },
      { value: "100%", label: "Responsive" },
      { value: "1", label: "Tap search" },
    ],
    problemTitle: "Weather Data, Poorly Presented",
    problem:
      "Weather data is everywhere but rarely presented cleanly. The goal was a fast, beautiful interface that shows exactly what matters — the conditions now and in the coming days — without clutter.",
    solutionTitle: "Lightweight Fetch Layer + Mobile-First UI",
    solutionIntro:
      "Architected a small fetch layer with caching and designed a mobile-first UI around readability, weather icons, and graceful error states.",
    solutionPoints: [
      "Live current conditions with location-aware search",
      "5-day forecast presented at a glance",
      "Responsive, mobile-first interface",
      "Graceful offline and error handling",
    ],
    capabilities: [
      "Live Conditions",
      "5-Day Forecast",
      "Location Search",
      "Mobile-First UI",
      "Cached Fetching",
      "Error Resilience",
    ],
    challenges: [
      {
        title: "Fast, Cached Data Fetching",
        detail:
          "Built a small fetch layer with caching so repeat visits load instantly and API calls stay minimal.",
      },
      {
        title: "Readability Over Noise",
        detail:
          "Designed the interface around weather icons and key metrics, stripping clutter so conditions are understood in one glance.",
      },
      {
        title: "Responsive Across Devices",
        detail:
          "Tested across screen sizes and network conditions, ensuring graceful fallbacks when data can't load.",
      },
    ],
  },
];

export const projectCategories = ["All", ...new Set(projects.map((p) => p.category))];
