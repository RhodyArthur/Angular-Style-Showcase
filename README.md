# Angular Style Showcase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Project Description
This Angular application is designed as a school brochure site that showcases advanced Angular and SCSS features. The application demonstrates proficiency with Angular CLI, component-based architecture, responsive design, and SCSS preprocessing techniques.

### Features
- **Header and Footer**: Consistent navigation and branding across the site.
- **Main Content Area**: Displays various sections including two child components for detailed content.
- **Responsive Layout**: Utilizes SCSS for a fully responsive design that works well on mobile devices.
- **Theming**: Supports light and dark themes for better user experience.
- **Custom Directive**: Implements host binding for dynamic styling.

## Setup and Run Instructions
1. Clone the repository:
    ```bash
    git clone <repo-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd angular-style-showcase
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## SCSS Architecture and Features
- **Variables**: Defined in `_variables.scss` for consistent styling (e.g., colors, fonts, spacing).
- **Nesting**: Used for component-specific styles to enhance readability.
- **Mixins**: Created in `_mixins.scss` for reusable style patterns (e.g., flexbox layouts, button styles).
- **Functions**: Custom function `px-to-rem` for dynamic value calculations.
- **Extend/Inheritance**: Used to share common styles across components.
- **Partials**: Styles are organized into partials (`_variables.scss`, `_mixins.scss`, etc.) for better structure.
- **Theming**: Two themes (light and dark) are implemented and can be toggled.

## Implementation Details
### Components
- **HeaderComponent**: Displays the header of the brochure site.
- **FooterComponent**: Displays the footer of the brochure site.
- **MainContentComponent**: The main content area of the site with two child components:
  - **Child1Component**: Contains introductory content.
  - **Child2Component**: Contains detailed information about the school.

### Custom Directive
- **CustomStyleDirective**: Applies dynamic styles to elements using host binding.

### Lazy Loading
- Implemented lazy loading for feature modules to optimize performance.

### Responsive Design
- Ensures the application is fully responsive and provides a good user experience across different devices.

## Code Quality
- Code is linted and follows Angular best practices.
- Unit tests are implemented to ensure functionality.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.