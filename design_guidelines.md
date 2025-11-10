# Design Guidelines: Visca Gyebi Afram Portfolio Website

## Design Approach
**System:** Material Design principles with custom Flutter-inspired aesthetics
**Rationale:** As a Flutter developer's portfolio, the design should reflect the clean, modern aesthetic of well-designed Flutter applications while maintaining web best practices.

## Typography System
**Primary Font:** Inter or DM Sans (Google Fonts)
**Secondary Font:** Fira Code for code snippets/tech stack

**Hierarchy:**
- H1 (Name): 3.5rem (56px) desktop, 2.5rem mobile, font-weight 700
- H2 (Section titles): 2.5rem desktop, 2rem mobile, font-weight 600
- H3 (Project titles): 1.75rem, font-weight 600
- Body: 1.125rem (18px), font-weight 400, line-height 1.7
- Small text: 0.875rem for metadata

## Spacing System
**Tailwind units:** Standardize on 4, 8, 12, 16, 20, 24, 32 (p-4, p-8, p-12, p-16, p-20, p-24, p-32)
- Section vertical padding: py-20 desktop, py-12 mobile
- Component spacing: gap-8 for cards, gap-4 for list items
- Container max-width: max-w-6xl for content sections

## Layout Structure

**Hero Section (Full viewport height - 90vh):**
- Two-column layout: 60% content (left), 40% profile image (right)
- Content: Name, tagline, 3-sentence intro, two CTA buttons side-by-side
- Profile image: Circular frame (400x400px), subtle shadow, positioned center-right
- Background: Clean white/light gradient, no distracting patterns

**About Me Section:**
- Single column, centered, max-w-4xl
- Paragraph-based layout with clear line-height
- Integrate skill highlights as inline emphasis

**Skills Section:**
- Four-column grid (lg:grid-cols-4 md:grid-cols-2 grid-cols-1)
- Skill cards with category headers (Programming, Frameworks, UI/UX, Other)
- Each skill as a pill/badge with icon from Heroicons
- Visual skill level indicators using horizontal progress bars (not percentage text)

**Projects Section:**
- Three-column card grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Card structure: Screenshot placeholder (16:9 ratio) → Title → Short description → Tech stack pills → GitHub link icon
- Hover effect: Subtle lift (shadow enhancement)
- Add "View All Projects" CTA at bottom if more than 3 projects

**Experience/Achievements:**
- Two-column layout: Timeline-style left column, details right
- Bullet points with checkmark icons from Heroicons
- Highlight key metrics in bold

**Contact Section:**
- Two-column: Contact form (left 60%), Info/social links (right 40%)
- Form: Name, Email, Message textarea, Submit button
- Social icons: LinkedIn, GitHub, Email (using Heroicons)
- Include "Expected Response Time: 24-48 hours" text

## Component Library

**Buttons:**
- Primary CTA: Solid background, medium rounded corners (rounded-lg), px-8 py-3
- Secondary CTA: Outline style with border
- Icon buttons: Square/circular for social links

**Cards:**
- Projects: Rounded-xl corners, subtle border, white background, hover shadow
- Skills: Rounded-lg, light background fill, minimal border

**Forms:**
- Input fields: Full-width, rounded-md, border with focus state
- Labels: Above inputs, font-weight 500
- Textarea: Minimum height h-32

**Badges/Pills:**
- Tech stack: Small rounded-full pills with light background
- Skill items: Inline badges with icons

## Images

**Hero Profile Image:**
- Description: Professional headshot, circular crop, clean background
- Placement: Right side of hero section, 400x400px
- Style: Subtle shadow, slight border

**Project Screenshots (3-5 needed):**
1. Admin Dashboard - Flutter app showing analytics charts and class performance
2. Leaderboard Interface - Ranking system with podium highlights
3. Analytics Screen - Charts showing quiz history and progress
4. Additional project mockups as needed

All screenshots should be 16:9 ratio, high quality, showing actual Flutter UI

## Interactive Elements

**Smooth Scrolling:**
- Implement scroll-behavior: smooth
- Anchor links from hero CTAs to sections

**Animations (Minimal):**
- Fade-in on scroll for section entries
- Card hover lift effect
- Button hover state transitions

**Charts/Progress Bars:**
- Skills section: Simple horizontal bars showing proficiency
- Use gradient fills for visual interest
- Animate on scroll into view

## Accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels associated with inputs
- Sufficient color contrast
- Focus states on all interactive elements
- Alt text for profile image and project screenshots

## Mobile Responsiveness
- Stack all multi-column layouts to single column on mobile
- Hero becomes single column with image above content
- Reduce font sizes by 20-30% on mobile
- Touch-friendly button sizes (min 44x44px)
- Hamburger menu if navigation is added