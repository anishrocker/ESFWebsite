# Endless Smiles · BASIS Cedar Park

A responsive, photo-rich website for the Endless Smiles Foundation chapter at BASIS Cedar Park. Built with semantic HTML, CSS, and small vanilla JavaScript enhancements. No runtime packages, API keys, or installation required.

## Run locally

Requires Node.js 22+ for building/checks and Python 3 for the development server.

```sh
npm run dev
```

Open http://localhost:3000. Build a static deployment with `npm run build`; the output is `dist/`. Run `npm run check` to validate scripts, navigation targets, assets, content sources, and hosting configuration.

## Included

- Responsive scrapbook homepage and mobile navigation.
- Happenings noticeboard linking to the chapter Instagram and Substack.
- Accessible upcoming/past event tabs with keyboard navigation.
- November 2026 fall fundraiser, with exact date and location pending.
- Future Projects section introducing the planned ESF × HOSA monthly newsletter, with November and December awareness topics supplied by the chapter.
- Goals, foundation accomplishments, history timeline, and leadership section.
- Photo gallery with an accessible modal, previous/next controls, and keyboard support.
- Get involved dialog linking directly to the chapter's actual communication channels.
- Locally hosted photographs and fonts; no third-party scripts or tracking.

## Content and sources

Chapter name, school, Instagram, Substack, and November fundraiser were supplied by the site owner. The exact fundraiser date, location, pricing, registration, have not been supplied. Board roles were subsequently updated from the chapter’s ESF Mass Document. No such details are invented. Add confirmed details to `index.html`.

- Chapter Instagram: https://www.instagram.com/esf_basiscedarpark/
- Chapter journal: https://substack.com/@endlesssmilesfoundationbcpk
- Foundation mission and photographs: https://www.endlesssmilesfoundation.org/
- Foundation history: https://www.endlesssmilesfoundation.org/our-story
- Foundation projects and camp figures: https://www.endlesssmilesfoundation.org/projects
- Chapter listing: https://www.endlesssmilesfoundation.org/chapters

The 50 children, 15 volunteers, and $1,000 raised are the **wider foundation's STEAM camp figures**, not chapter totals. The past projects section now opens with confirmed chapter activities: nurse appreciation baskets and goodies, and cards for hospitalized children. Wider-foundation projects are labeled separately. Leadership reflects the October 22 role changes and the later website-lead note. Substack and Instagram could not be read in the build environment, so links are provided without an invented social feed.

`assets/nurseappreciation.png` and `assets/cards.png` were uploaded by the site owner and show confirmed BASIS Cedar Park chapter activities. They appear in the hero scrapbook, past activities, and photo viewer. Other images in `assets/` were published by the wider foundation. `assets/fonts/` contains Google Fonts: Bricolage Grotesque, DM Sans, and Caveat, distributed under the SIL Open Font License; license texts are included alongside the font files.

## Editing

`index.html` contains content and section structure, `styles.css` contains the responsive design system, and `app.js` contains interactions. Update the roster within `#leadership` when board roles change; add approved bios and profile photos when available. To add an event, update `#upcoming-panel` and the announcement/noticeboard together. Once the fundraiser is past, move its confirmed recap to `#past-panel` and update the upcoming tab's count.

The contact links do not submit data on visitors' behalf. Subscriptions and messages happen on the linked platforms. There is no donation checkout, registration database, or signup form.

`.openai/hosting.json` configures the private Sites deployment. `scripts/build.mjs` prepares a portable static directory that can also be hosted elsewhere.

## Chapter document update

Content was reconciled with the user-authorized ESF Mass Document in connected Google Drive. Later notes supersede older board roles and tentative fundraiser dates: Sai is co-VP, Ananya is secretary, and the fundraiser remains date/time TBA at Bluffview. Added ongoing programs, meeting guidance, newsletter and program interest forms, a $3,000 fundraising target (not funds raised), and expanded chapter recaps. Personal email addresses, attendance data, member hours spreadsheets, internal document links, and shopping assignments are not published. No medical eligibility or hospital-access requirements are invented. Newsletter sections remain planned, not published issues.
