
# test for Frontend Developers

## Stack

- Next.js + TypeScript
- Tailwind CSS
- Ant Design (Design System)

## Atomic Design Pattern

- **page.tsx**
  - Contains `Container`
- **Container**
  - Contains `Template`
  - Handles all props
  - Manages business logic
- **Template**
  - Contains `Modules`
  - Sets layout
- **Module**
  - Contains `Components` and `Atoms`
- **Component**
- **Atom**
  - Basic component declared in Figma

## Starter Pages

- `/empty`: To understand the design pattern
- `/home`: Default page

## Your Mission

- [Figma Link - Work to Do](https://www.figma.com/design/iQMgMv4V6m3QUGqGtyN27p/frontend-dev-test-design?node-id=0-1&node-type=canvas&t=tfAT7dhMBl2JSSWg-0)
- No questions are allowed before your mission is done.
  - This is part of our process.
  - You can ask questions after your mission is completed.
- **ESLint is required.**
  
### Steps

1. **Request Github Access**
   - Request your Github account to be invited to the project.
2. **Analyze the Design**
   - Review the provided design and understand its structure and functionality.
3. **Create Folders**
   - If needed, create a folder for new pages (e.g., `/signup`).
   - Make your own branch from `dev`.
     ```bash
     git checkout dev
     git checkout -b NS_David
     git push origin NS_David
     ```
4. **Pull Requests**
   - Create one Pull Request (PR) for each completed module.
   - Use the following branch naming convention:
     - `NS_david_testPage1`

### Coding Convention

- Follow the company's [coding convention](https://coal-blouse-907.notion.site/Namulabs-Coding-Convention-783f33a9ec5748d494c0841bf8226c67).

---

### Objective:

This test for newly onboarded Level 1 developers assesses your ability to recreate a given design and collaborate on a shared project. You'll build individual components and pages while following company development guidelines.

### Project Overview:

- **Design**: Recreate the **Fanquest design** or another provided design.
- **Tasks**: You will be assigned specific pages to build on your own branch within the repository, ensuring modular and independent contributions.

### Schedule and Timeline:

- **Test Start Date**: Wedneseday, **16th October**.
- **Final Reviews**: By **21st October**, wrap up your work and prepare for reviews.
- **Test End Date**: Concludes on **25th October**.

### First 3 Days (16th - 19th October):

- Focus on building **atoms**—small, reusable components. These components will be used in the final page builds.

