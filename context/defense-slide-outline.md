# Final Defense Slide Outline

Source files: `ordinance-manuscript.md` (content, with `images/`), `final-defense-guide.md` (required sequence and defense details), and the portal codebase (source of truth for features and roles).
Project: **A Web-Based AI-Assisted Ordinance Information System for Cabanatuan City** (Cabanatuan City Ordinance Portal).
Deck is built with bolt-slides (React + Vite, each slide is a component).

## Instructions for the slide agent

- Follow the slide order below. It matches Parts A and B of the Final Defense Guide (items 1 to 13).
- Highlights only. No walls of text, and do not paste manuscript tables onto slides.
- The recorded demo walkthrough (guide items 15 to 30) is a separate video. Slide 10 only leads into it.
- The combined presentation and demo must stay within 10 to 15 minutes, so keep each slide to one idea.
- Every presenter needs a caption under their name (guide Section III). Photos are supplied by the group.
- Numbers come from the manuscript. Do not invent or round them.
- Where this outline and the codebase disagree about features or roles, **the codebase wins**. Flag the difference in your final report.
- The public GitHub copy (`jsoul-dev/cabanatuan-city-ordinance-portal-v2`) is older than the manuscript and the local version. Use the local codebase if you have it. See "Known differences" near the end of this file.
- Panelists are intentionally not part of the deck.

## Defense details (for Slide 1 and 2)

- Group No.: **1**
- Faculty-in-Charge (FIC): **Alexander S. Cochanco**
- Capstone Adviser: **Cris Norman P. Olipas, Ed.D.**
- Research Editor (per the defense schedule sheet): **Cris Norman P. Olipas, Ed.D.**
- Presenters (schedule-sheet order): Agulto, Manny N.; Calara, Reyven B.; Lacanilao, Chris Karl M.; Lemence, John Carlo DG.
- Photos: `public/team/agulto.jpg`, `calara.jpg`, `lacanilao.jpg`, `lemence.jpg` (use an initials avatar if a file is missing)
- Captions: default to "Presenter"; keep the caption text in one data array so the group can edit it.

---

## PART A. Brief Overview of the Project (guide items 1 to 8)

### Slide 1. Cover (item 1)
- Title: **A Web-Based AI-Assisted Ordinance Information System for Cabanatuan City**
- Capstone and Research Project, BSIT, Web Systems Technology
- Nueva Ecija University of Science and Technology, College of Information and Communications Technology
- Group 1 · Final Defense · October 2026
- Effect: hero 3D scene (see Effects Plan, E1).

### Slide 2. The Team (item 1)
- Four presenter photos with name and caption beneath each.
- Capstone Adviser: Cris Norman P. Olipas, Ed.D.
- FIC: Alexander S. Cochanco
- Effect: photos fade and tilt in one by one (`Team` component or `TiltCard`).

### Slide 3. Purpose of the System (item 2)
- A centralized web platform to modernize how barangay and city-wide ordinances are managed, found, and understood.
- Barangays upload and manage their own ordinances; the LGU reviews and publishes.
- An AI chatbot answers ordinance questions in plain language (Tagalog, English, Taglish).
- Residents can report community concerns online.
- Speaker note: the main focus is ordinance management, retrieval, dissemination, and AI-assisted inquiry. Reporting is supplementary.

### Slide 4. Problem and Needs Assessment (item 3)
- Paper files get damaged, misfiled, or lost.
- Finding one ordinance means manual searching through binders or boxes.
- Residents must visit the barangay hall or City Hall during office hours to read one.
- Limited access leads to limited awareness and only moderate compliance (Batacandolo et al., 2024).
- Concerns are reported verbally or by walk-in, with no tracking or photo evidence.
- Effect: a messy paper stack on the left that dissolves into the digital portal on a click (`Build`).

### Slide 5. Intended Users and Beneficiaries (item 4)
- Residents of Cabanatuan City
- Barangay officials and staff
- LGU personnel and the City Government of Cabanatuan
- Future researchers and IT students

### Slide 6. Major System Functions (item 5)
Six core modules (use `Bento`):
1. Public Ordinance Explorer and Viewer
2. Civic AI Assistant (RAG chatbot, bilingual)
3. Multimodal OCR Ordinance Parser (about 85% less manual entry time)
4. Citizen Incident and Concern Reporting (tracking code, anonymous option)
5. Barangay Administration Portal
6. City LGU Administrator Governance Portal
- Show real screenshots from Appendix C inside `BrowserFrame` (see asset index in the agent prompt).

### Slide 7. User Roles (item 6)
- **Resident / Citizen** (public, no login required)
- **Barangay Official / Barangay Admin** (scoped to one barangay)
- **LGU Administrator** (city-wide)
- External actor: Google Gemini API (AI service)
- Database role values (data dictionary): `CITIZEN`, `BARANGAY_ADMIN`, `LGU_ADMIN`. Use these three on the slides. The manuscript text also mentions Super Admin and Staff permissions, and the GitHub README calls the barangay role "Captain"; check the local code before using either name.
- Visual: Use Case Diagram (Figure 14), redrawn cleanly if it is not readable.

### Slide 8. Role Responsibilities and Access Levels (item 7)
| Role | Responsibility | Access level |
|---|---|---|
| Resident / Citizen | Read ordinances, ask the chatbot, submit and track reports | Public pages only; no account needed |
| Barangay Admin | Draft and submit ordinances for review, handle reports from their barangay | Authenticated; only their own barangay's data |
| LGU Admin | Review and approve ordinances, publish city-wide ordinances, oversee all reports, publish news, manage accounts and analytics | Authenticated; city-wide |

### Slide 9. Role Matrix (item 8)
Your professor asked for a feature-by-role matrix like earlier groups used. Style reference: dark column header for the most privileged role, rows with a thin divider, green check circles.

| Feature | Resident | Barangay Admin | LGU Admin |
|---|:-:|:-:|:-:|
| Browse, search, filter ordinances | ✓ | ✓ | ✓ |
| View ordinance text and official PDF | ✓ | ✓ | ✓ |
| Ask the AI Legal Assistant | ✓ | ✓ | ✓ |
| View civic news and advisories | ✓ | ✓ | ✓ |
| Submit a community report (photo, anonymous option) | ✓ | | |
| Track a report by reference code | ✓ | | |
| Secure sign-in | | ✓ | ✓ |
| Draft and upload barangay ordinances, submit for review | | ✓ | |
| AI PDF extraction and auto-structuring | | ✓ | ✓ |
| Triage reports and update their status | | ✓ (own barangay) | ✓ (city-wide) |
| Barangay-level analytics | | ✓ | ✓ |
| Manage city ordinances and publish | | | ✓ |
| Approve or reject barangay submissions, with remarks | | | ✓ |
| Publish city news and advisories | | | ✓ |
| Manage user and barangay accounts (role-based access) | | | ✓ |
| City-wide analytics and PDF report export | | | ✓ |

This matrix is built from the manuscript's use case descriptions, Appendix C, and the GitHub data dictionary. Check every cell against the local codebase before finalizing. Rows most likely to need changes: reference-code tracking, news publishing by barangays, and PDF report export.
- Effect: rows reveal one at a time with `Build`; the LGU Admin column glows once all rows are in.

### Slide 10. Transition to System Demo
- One line: "Next: a walkthrough of the working system (Administrator flow, then End-User flow)."
- Optionally a short looping preview of the portal inside `BrowserFrame`.

---

## PART B. Research Results and Recommendations (guide items 9 to 14)

### Slide 11. Research Problems (item 9)
1. How can the system be developed through the Agile phases (Planning and Requirements, Design and Prototyping, Development and Implementation, Testing and Deployment)?
2. How do IT experts evaluate it using ISO/IEC 25010:2023 (nine quality characteristics)?
3. How do end-users evaluate its usability using the System Usability Scale (SUS)?
4. How do IT experts and end-users evaluate its accessibility using the four WCAG principles (Perceivable, Operable, Understandable, Robust)?

### Slide 12. Method and Respondents
- Developmental-quantitative design; Agile Development Model.
- 110 respondents: 10 IT experts + 100 end-users.
- End-users: 72 residents, 18 barangay officials or staff (9 of 89 barangays), 10 LGU officials.
- Purposive sampling.
- Effect: `CountUp` on 110, then split into 10 and 100.

### Slide 13. Key Findings, Research Problem 1: Development (item 10)
- Four Agile phases completed (`Steps` or `Timeline`).
- Design outputs: use case, DFDs, ERD, wireframes.
- Stack: Next.js 16, React 19, TypeScript, SQLite (WAL), Google Gemini with RAG.
- Testing: unit, integration, user acceptance.
- Deployment cost: PHP 436.58 to 976.59 per month (baseline); PHP 1,614.98 to 1,867.27 per month (city-scale Railway Pro). The group is revising the cost table, so use the latest figures from the manuscript file you were given and flag any mismatch.

### Slide 14. Key Findings, Research Problem 2: Technical Quality (item 10)
- Overall mean **4.28** (Strongly Agree).
- Highest: Compatibility 4.55, Functional Suitability 4.50, Performance Efficiency 4.40.
- Lowest indicators: Recoverability 3.20, Audit Logging 3.60, Diagnostics 3.70.
- Effect: bars grow in sequence.

### Slide 15. Key Findings, Research Problem 3: Usability (item 10)
- SUS score **80.22 / 100**, Good (Acceptable). Benchmark is 68.00, so 12.22 points above.
- Highest items: willingness to use frequently (4.30), integrated features (4.27), ease of learning (4.23).
- Effect: animated gauge with `CountUp`.

### Slide 16. Key Findings, Research Problem 4: Accessibility (item 10)
- IT experts: overall **4.19** (Accessible).
- End-users: overall **4.26** (Highly Accessible).
- Weak points in both groups: screen reader compatibility, ARIA labels, dynamic update announcements.
- Effect: side-by-side grouped bars for the four principles.

### Slide 17. Summary of Findings (item 11)
- Built through four Agile phases; affordable to run.
- Technical quality 4.28; usability 80.22; accessibility 4.19 (experts) and 4.26 (end-users).
- Consistent weakness: backend resilience and assistive technology support.

### Slide 18. Conclusions (item 12)
- Agile was a practical framework for a multi-module system.
- The platform is technically sound, usable, and accessible for its respondent groups.
- Combining OCR digitization, a RAG chatbot, and a role-based workflow is feasible and acceptable to users.
- Running costs are modest, which addresses the financial barrier reported for Philippine LGUs.
- Limits: purposive samples, controlled evaluation, not yet in live operation, so results may not generalize beyond Cabanatuan City.

### Slide 19. Recommendations (item 13)
- **System:** automated backups and recovery; audit logging and diagnostics dashboard; screen reader testing (NVDA, JAWS, VoiceOver); ARIA live regions; chart text alternatives; Docker packaging; more language options.
- **City and barangays:** pilot in 2 to 3 barangays first; train officials; assign content administrators; public information campaign.
- **Future researchers:** live longitudinal study; other LGUs; test with assistive technology users; evaluate chatbot accuracy across languages.
- Effect: `Timeline` showing pilot, rollout, and study.

### Slide 20. Closing / Q&A
- Thank you, with presenter photos and names.
- Keep the backup slides ready.

---

## BACKUP SLIDES (item 14 and Q&A preparation)

Keep these out of the main flow; reachable from the grid view (`G`).

- **B1. Data collection evidence:** instruments (ISO 25010 form, SUS, WCAG checklist), respondent selection criteria, sampling stages. Add photos or documentation of data gathering if the group has them.
- **B2. Full ISO 25010 table** (manuscript Chapter 3, Section 2).
- **B3. SUS item-level results** (Chapter 3, Section 4).
- **B4. WCAG tables** for IT experts and end-users (Chapter 3, Sections 3 and 5).
- **B5. System architecture:** Level 0 and Level 1 DFD, ERD (Figures 15, 16, 25).
- **B6. Chatbot scope and limits:** answers only from uploaded ordinances; no legal advice; no national law; redirects to officials when unsure.
- **B7. Limitations:** web only (no native app), Cabanatuan City only, purposive sampling, no live deployment.

## Known differences: GitHub v2 copy vs manuscript

Found by reading the public repo's README and `DATA_DICTIONARY.md`. The local version may already fix these. Check them in the code and show only what the running system actually does.

| Topic | Manuscript / outline says | GitHub v2 copy says |
|---|---|---|
| Barangay role name | `BARANGAY_ADMIN` (data dictionary) | README says `CAPTAIN`; data dictionary says `BARANGAY_ADMIN` |
| Extra roles | Super Admin, Staff mentioned in portal text | Only `CITIZEN`, `BARANGAY_ADMIN`, `LGU_ADMIN` |
| Report statuses | Pending, Under Review, In Progress, Resolved, Dismissed | `NEW`, `IN_PROGRESS`, `RESOLVED`, `DISMISSED` |
| Report tracking code (REP-2026-XXXX) and tracking page | Described | No such field in the reports table |
| GPS or landmark on reports | Described | No such fields |
| Audit log and diagnostics | Rated in the ISO evaluation | No audit table in the data dictionary |
| Barangay posts local news | Described in the barangay portal | README lists news management under the LGU dashboard only |
| PDF report export (Figure C-25) | Appendix C screenshot | Not mentioned |
| Ordinance workflow | Submit for LGU review | Confirmed: `DRAFT`, `PENDING`, `APPROVED`, `REJECTED`, with reviewer and rejection reason |
| AI | Gemini 3.5 Flash Lite, RAG, multimodal OCR | Confirmed |
| Stack | Next.js 16, Prisma 7, SQLite WAL, Zustand, Recharts | Confirmed |

Do not put the seeded test logins from the README on any slide.

## Data for charts (all from the manuscript)

| Chart | Values |
|---|---|
| ISO/IEC 25010:2023 (IT experts), overall 4.28 | Compatibility 4.55, Functional Suitability 4.50, Performance Efficiency 4.40, Maintainability 4.30, Interaction Capability 4.24, Security 4.17, Safety 4.17, Reliability 4.10, Flexibility 4.07 |
| WCAG, IT experts, overall 4.19 | Understandable 4.34, Operable 4.27, Perceivable 4.13, Robust 4.03 |
| WCAG, end-users, overall 4.26 | Perceivable 4.45, Operable 4.43, Understandable 4.32, Robust 3.85 |
| SUS | 80.22 out of 100; benchmark 68.00 |
| Respondents | 10 IT experts; 72 residents; 18 barangay officials or staff; 10 LGU officials; total 110 |

## Effects Plan (flashy but tasteful)

- **E1. Cover hero (Slide 1):** lightweight 3D scene of floating translucent ordinance cards drifting into a connected network (barangay nodes), with gentle mouse parallax. Avoid a single large mesh or monolith object.
- **E2. Problem to solution (Slide 4):** paper stack to digital transition on click.
- **E3. Modules (Slide 6):** `Bento` with `SpotlightCard` or `TiltCard` hover, real screenshots in `BrowserFrame`.
- **E4. Role matrix (Slide 9):** row-by-row check reveal, then highlight glow on the LGU Admin column.
- **E5. AI assistant moment (inside Slide 6 or as an extra Slide 6b):** `Chat` component replaying a short, real-looking Tagalog or English question with an ordinance citation; use a real example from the codebase or screenshot C-6.
- **E6. Numbers (Slides 12, 14 to 16):** `CountUp`, growing bars, SUS gauge.
- **E7. Locale (optional, Slide 3 or 12):** `Globe` focused on Cabanatuan City, Nueva Ecija.
- **E8. Recommendations (Slide 19):** animated `Timeline`.

Rules for every effect:
- Motion must support the point and never hide information; keep transitions under about 500 ms.
- At most one heavy WebGL scene on screen at a time; dispose it when the slide is not active.
- Respect `prefers-reduced-motion`.
- Must run smoothly on a low-end laptop and offline (bundle fonts and assets locally).

## Questions the panel is likely to ask

- How do you prevent the chatbot from giving wrong or legal advice?
- Why were Recoverability and screen reader support rated lowest, and what is the plan to fix them?
- Why purposive sampling, and can the results be generalized?
- How does the system stay accurate when ordinances are amended or repealed?
- What does it cost to run, and who maintains it after the project?
