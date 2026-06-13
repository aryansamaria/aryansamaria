# Portfolio Website Build Instructions & Prompt

## Overview

This document provides comprehensive instructions and a complete prompt for building a modern, cinematic portfolio website from a resume (PDF/text) and LaTeX source file. The portfolio features a system architecture-inspired design with dark/light theme support, smooth animations, and immersive user experience.

---

## Project Structure

```
Portfolio/
├── index.html          # Home/Hero page
├── experience.html     # Work experience page
├── projects.html       # Projects showcase page
├── skills.html         # Skills & tools page
├── education.html      # Education & achievements page
├── contact.html        # Contact information page
├── styles/
│   └── main.css        # Main stylesheet with theme system
├── scripts/
│   └── main.js         # JavaScript for interactions & theme toggle
├── assets/             # Images, icons, etc.
└── latex.tex           # LaTeX resume source (reference)
```

---

## Features & Design Elements

### 1. **System Architecture Theme**
- **Concept**: Portfolio designed as a layered system architecture
- **Visual Language**: Each section represents a different "layer" (Entry, Data, Intelligence, Product)
- **Numbering System**: Sections numbered (01, 02, 03, etc.) like system layers
- **Flow Indicators**: Visual flow nodes on the left side showing current section

### 2. **Dark & Light Theme Support**
- **Default Theme**: Dark theme with cyan accent colors (#00d4ff)
- **Light Theme**: White backgrounds with dark text and blue accents (#0066cc)
- **Theme Toggle**: Circular button in navigation with sun/moon icons
- **Persistence**: Theme preference saved in localStorage
- **Smooth Transitions**: All theme changes animated smoothly

### 3. **Navigation System**
- **Fixed Navigation Bar**: Stays at top while scrolling
- **Active Link Highlighting**: Current page/section highlighted
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Anchor links scroll smoothly to sections
- **Logo**: Monogram (initials) linking to home

### 4. **Hero Section (Home Page)**
- **Large Typography**: Cinematic, bold hero title
- **System Description**: Multi-line description with system terminology
- **Meta Information**: Status and location displayed prominently
- **Social Links**: GitHub, LinkedIn, Email with icons
- **Flow Arrow**: Animated indicator at bottom

### 5. **Experience Page**
- **Layer Header**: Numbered section with layer label
- **Experience Nodes**: Card-based layout for each position
- **Metadata Display**: Company, location, period
- **Detail Grid**: Structured information (Project, Approach, System, Outcome)
- **Clean Typography**: Monospace for labels, readable sans-serif for content

### 6. **Projects Page**
- **Immersive Project Cards**: Large, expandable project sections
- **Grid Layout**: 2-column grid (responsive to 1 column on mobile)
- **Expandable Details**: Click to expand full project information
- **Project Structure**: Number, Title, Type, Description, Details (Problem/Approach/Outcome), Tech Tags
- **Hover Effects**: Subtle animations and border highlights
- **Scroll Animations**: Projects fade in as you scroll

### 7. **Skills Page**
- **Modular Layout**: Skills organized in modules/categories
- **Skill Tags**: Individual skill items with hover effects
- **Categories**: Programming Languages, Databases, Frameworks, ML/NLP, Data Engineering, Concepts
- **Grid System**: Responsive grid layout for skill modules

### 8. **Education Page**
- **Similar to Experience**: Uses same node structure
- **Degree Information**: Institution, location, period
- **Achievements**: Additional sections for awards, competitions, co-curriculars
- **Structured Details**: Label-value pairs for information

### 9. **Contact Page**
- **Centered Layout**: Clean, focused contact information
- **Contact Links**: Email, Phone, GitHub, LinkedIn with icons
- **System Links Style**: Consistent with hero section links

### 10. **Interactive Features**
- **Scroll-Driven Animations**: Elements animate based on scroll position
- **Intersection Observer**: Elements fade in when entering viewport
- **System Flow Updates**: Flow nodes highlight based on current section
- **Project Expansion**: Click projects to expand/collapse details
- **Theme Switching**: Instant theme changes with smooth transitions
- **Navbar Scroll Effects**: Border color changes on scroll

### 11. **Typography & Design**
- **Primary Font**: Inter (Google Fonts) - clean, modern sans-serif
- **Monospace Font**: JetBrains Mono - for labels, code, technical terms
- **Font Weights**: 300-900 range for hierarchy
- **Letter Spacing**: Tight for large titles, normal for body
- **Line Height**: Generous (1.6-1.8) for readability

### 12. **Color System**
- **Dark Theme Colors**:
  - Background: #0a0a0a (near black)
  - Elevated: #111111 (slightly lighter)
  - Text: #ffffff (white)
  - Muted Text: #a0a0a0 (gray)
  - Accent: #00d4ff (cyan)
  - System Lines: rgba(255, 255, 255, 0.1)

- **Light Theme Colors**:
  - Background: #ffffff (white)
  - Elevated: #f5f5f5 (light gray)
  - Text: #0a0a0a (near black)
  - Muted Text: #4a4a4a (dark gray)
  - Accent: #0066cc (blue)
  - System Lines: rgba(0, 0, 0, 0.1)

### 13. **Spacing System**
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 2rem (32px)
- **LG**: 4rem (64px)
- **XL**: 8rem (128px)
- **XXL**: 12rem (192px)

### 14. **Responsive Design**
- **Mobile Breakpoint**: 768px
- **Tablet Breakpoint**: 968px
- **Mobile Menu**: Hamburger menu with slide-in navigation
- **Grid Adjustments**: Projects grid becomes single column on mobile
- **Typography Scaling**: Fluid typography using clamp()
- **Hidden Elements**: System flow indicator hidden on mobile

### 15. **Accessibility**
- **ARIA Labels**: All interactive elements properly labeled
- **Semantic HTML**: Proper use of nav, section, footer tags
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Reduced Motion**: Respects prefers-reduced-motion media query

---

## Data Extraction from Resume/LaTeX

### Information to Extract:

1. **Personal Information**
   - Full Name
   - Email
   - Phone
   - Location
   - GitHub URL
   - LinkedIn URL
   - Current Status (e.g., "Building Datamonk")

2. **Experience**
   - Company Name
   - Job Title/Role
   - Location
   - Period (Start - End or Present)
   - Key Projects/Responsibilities
   - Technologies Used
   - Achievements/Outcomes

3. **Projects**
   - Project Name
   - Project Type/Category
   - Description
   - Problem Statement
   - Approach/Solution
   - System Architecture (if applicable)
   - Outcome/Results
   - Technologies/Tools Used

4. **Skills**
   - Programming Languages
   - Databases & Query Engines
   - Frameworks & Libraries
   - Machine Learning & NLP Tools
   - Data Engineering Tools
   - Concepts & Methodologies
   - Other Tools

5. **Education**
   - Institution Name
   - Degree
   - Field of Study
   - Location
   - Graduation Date/Period
   - GPA/Grades (if applicable)r
   - Achievements/Awards
   - Co-curricular Activities

6. **Additional Information**
   - Certifications
   - Publications
   - Awards
   - Competitions
   - Other Achievements

---

## Complete Build Prompt

Copy and use this prompt with your resume and LaTeX file:

---

**PROMPT START:**

I need you to build a modern, cinematic portfolio website from my resume and LaTeX source file. Here are the complete requirements:

## Design System

Create a portfolio website with a **System Architecture** theme where each section represents a different layer of a technical system. The design should be:

1. **Visual Style**:
   - Dark-first design with cyan accent colors (#00d4ff)
   - System architecture metaphor (layers, nodes, flow indicators)
   - Cinematic, immersive feel with generous spacing
   - Modern typography using Inter (sans-serif) and JetBrains Mono (monospace)

2. **Theme System**:
   - Implement both dark and light themes
   - Dark theme: Near-black backgrounds (#0a0a0a), white text, cyan accents
   - Light theme: White backgrounds, dark text, blue accents (#0066cc)
   - Add a circular theme toggle button in navigation with sun/moon icons
   - Save theme preference in localStorage
   - Smooth transitions between themes

3. **Color Palette**:
   - Dark Theme: bg: #0a0a0a, elevated: #111111, text: #ffffff, muted: #a0a0a0, accent: #00d4ff
   - Light Theme: bg: #ffffff, elevated: #f5f5f5, text: #0a0a0a, muted: #4a4a4a, accent: #0066cc
   - Use CSS variables for all colors

## Page Structure

Create 6 HTML pages:

### 1. index.html (Home/Hero)
- Large hero section with name as main title
- System-style greeting (e.g., "Hola Amigos!")
- Multi-line description about professional focus
- Meta information: STATUS and LOCATION
- Social links: GitHub, LinkedIn, Email (with SVG icons)
- Animated flow arrow at bottom
- System flow indicator on left side (vertical line with nodes)

### 2. experience.html
- Layer header: "02" + "DATA LAYER" + "Experience" or company name
- Experience nodes (cards) for each position:
  - Company name (accent color)
  - Location
  - Period
  - Detail grid with labels: PROJECT, APPROACH, ORCHESTRATION, INTERFACE, etc.
  - Use monospace font for labels, readable font for values

### 3. projects.html
- Layer header: "03" + "INTELLIGENCE LAYER" + "Projects"
- 2-column responsive grid of project cards
- Each project card:
  - Project number (01, 02, etc.)
  - Large project title
  - Project type/category
  - Description paragraph
  - Expandable details section (click to expand):
    - Problem
    - Approach
    - System (if applicable)
    - Outcome
  - Tech tags at bottom
- Cards should be immersive, large, with hover effects
- Opacity changes on hover/expand

### 4. skills.html
- Layer header: "04" + "PRODUCT LAYER" + "Skills & Tools"
- Modular grid layout of skill categories
- Each module:
  - Category title (monospace, accent color)
  - Skill items as tags (hover effects)
- Categories: Programming Languages, Databases, Frameworks, ML/NLP, Data Engineering, Concepts

### 5. education.html
- Layer header: "05" + "EDUCATION & ACHIEVEMENTS" + "Background"
- Similar structure to experience page
- Institution name, location, period
- Degree information
- GPA/Grades
- Achievements, awards, co-curriculars

### 6. contact.html
- Layer header: "Get In Touch" title
- Centered layout
- Description paragraph
- Contact links: Email, Phone, GitHub, LinkedIn (with icons)
- Use system-link style

## Navigation

- Fixed navigation bar at top
- Logo: Monogram (initials) linking to home
- Navigation links: Home, Experience, Projects, Skills, Education, Contact
- Theme toggle button (circular, with sun/moon icons)
- Mobile hamburger menu (3 lines)
- Active link highlighting
- Smooth scroll for anchor links
- Navbar border color changes on scroll

## Typography

- Primary font: Inter (weights: 300-900)
- Monospace font: JetBrains Mono (weights: 400-700)
- Hero title: clamp(3rem, 8vw, 8rem), weight 900
- Section titles: clamp(2rem, 5vw, 4rem), weight 800
- Body text: 1rem-1.25rem, line-height 1.6-1.8
- Labels: 0.75rem, uppercase, letter-spacing 0.1-0.2em
- Use clamp() for responsive typography

## Spacing System

- XS: 0.5rem, SM: 1rem, MD: 2rem, LG: 4rem, XL: 8rem, XXL: 12rem
- Generous spacing for cinematic feel
- Consistent spacing throughout

## Interactive Features

1. **Scroll Animations**:
   - Elements fade in as they enter viewport
   - Use Intersection Observer API
   - Smooth opacity and transform transitions

2. **System Flow Indicator**:
   - Vertical line on left side with nodes
   - Nodes highlight based on current section
   - Update on scroll

3. **Project Cards**:
   - Click to expand/collapse details
   - Hover effects (opacity, border color)
   - Smooth height transitions

4. **Theme Toggle**:
   - Click to switch themes
   - Save preference to localStorage
   - Update all colors instantly
   - Smooth icon transitions (sun/moon)

5. **Navbar Effects**:
   - Border color changes on scroll
   - Backdrop blur effect
   - Smooth transitions

## Responsive Design

- Mobile breakpoint: 768px
- Tablet breakpoint: 968px
- Mobile menu: Slide-in from left
- Projects grid: 2 columns → 1 column on mobile
- Hide system flow indicator on mobile
- Adjust spacing and typography for mobile
- Touch-friendly button sizes

## CSS Architecture

- Use CSS variables for all colors
- Separate dark/light theme variables
- Use `[data-theme="light"]` selector for light theme
- Smooth transitions: 0.2s-0.8s with cubic-bezier easing
- Consistent border-radius: 4px-8px
- Box shadows for depth (subtle)

## JavaScript Functionality

1. **Theme Management**:
   - Load saved theme on page load
   - Toggle theme on button click
   - Update localStorage
   - Update navbar border colors

2. **Navigation**:
   - Mobile menu toggle
   - Active link highlighting
   - Smooth scrolling
   - Close menu on link click

3. **Scroll Effects**:
   - Intersection Observer for animations
   - System flow node updates
   - Navbar border color updates
   - Active section detection

4. **Project Interactions**:
   - Expand/collapse on click
   - Scroll to center when expanded

5. **Utilities**:
   - Current year in footer
   - Console message (optional)

## File Structure

```
Portfolio/
├── index.html
├── experience.html
├── projects.html
├── skills.html
├── education.html
├── contact.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── assets/ (if needed)
```

## Data Source

I will provide:
1. My resume (PDF or text format)
2. My LaTeX resume source file (latex.tex)

Please extract all information from these files and populate the portfolio accordingly. Structure the content professionally while maintaining the system architecture theme and terminology.

## Additional Requirements

- All pages should have consistent navigation
- Footer on all pages with copyright and current year
- Proper meta tags for SEO
- Semantic HTML5
- Accessible (ARIA labels, keyboard navigation)
- Respect prefers-reduced-motion
- No external dependencies except Google Fonts
- Clean, maintainable code
- Comments in code where helpful

## Output

Please generate:
1. All 6 HTML files with complete content
2. Complete CSS file with theme system
3. Complete JavaScript file with all interactions
4. Ensure all files are properly linked and functional

Extract information from my resume and LaTeX file to populate the portfolio. Use the system architecture metaphor throughout - refer to sections as "layers", use technical terminology where appropriate, and maintain the cinematic, immersive design aesthetic.

**PROMPT END**

---

## Usage Instructions

1. **Prepare Your Files**:
   - Have your resume ready (PDF or text)
   - Have your LaTeX resume source file (latex.tex)

2. **Provide the Prompt**:
   - Copy the complete prompt above
   - Attach or paste your resume content
   - Attach or paste your LaTeX file content
   - Submit to an AI assistant (ChatGPT, Claude, etc.)

3. **Review Generated Files**:
   - Check all 6 HTML pages
   - Verify CSS includes both themes
   - Ensure JavaScript has all functionality
   - Test theme toggle
   - Test responsive design

4. **Customize** (if needed):
   - Adjust colors in CSS variables
   - Modify spacing values
   - Update fonts if desired
   - Add/remove sections
   - Customize animations

5. **Deploy**:
   - Upload all files to web hosting
   - Test on different devices
   - Verify theme persistence works
   - Check all links and navigation

---

## Key Features Summary

✅ System Architecture Theme
✅ Dark & Light Theme Support
✅ Theme Toggle with Persistence
✅ Smooth Scroll Animations
✅ Responsive Design
✅ Interactive Project Cards
✅ System Flow Indicators
✅ Modern Typography
✅ Accessible Navigation
✅ Mobile-Friendly
✅ Professional Layout
✅ Immersive User Experience

---

## Notes

- The portfolio uses a "system architecture" metaphor where each section is a "layer"
- Dark theme is the default, but light theme is fully supported
- All animations are smooth and intentional
- The design prioritizes readability and user experience
- Code is clean, maintainable, and well-commented
- No build process required - pure HTML/CSS/JS

---

**Last Updated**: 2024
**Version**: 1.0

