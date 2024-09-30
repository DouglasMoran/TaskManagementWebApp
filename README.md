# Task Management

Task Management is an application built to efficiently manage tasks. This project uses a modern tech stack centered around React, TypeScript, Vite, and Tailwind CSS. It is optimized for agile development with tools for linting, formatting, and advanced global state management.

## Tech Stack

### 1. **React**
   - React is the primary library used to build the user interface.
   - **Version**: 18.3.1
   - It provides a modular and component-based architecture, ideal for building scalable and reusable applications.

### 2. **TypeScript**
   - TypeScript is the language used in the project, offering static typing to JavaScript.
   - **Version**: 5.5.3
   - This helps reduce runtime errors, improves code maintainability, and enhances the development experience with better tooling support.

### 3. **Vite**
   - Vite is a fast and modern build tool and development server.
   - **Version**: 5.4.1
   - It is used to build the React application with better speed and efficiency compared to traditional tools like Webpack.

### 4. **Tailwind CSS**
   - Tailwind CSS is a utility-first CSS framework used for styling components.
   - **Version**: 3.4.13
   - Combined with plugins like `tailwind-merge` and `tailwindcss-animate`, it enables the creation of modern, responsive interfaces without writing custom CSS.

### 5. **Redux Toolkit**
   - Redux Toolkit is used for global state management.
   - **Version**: 2.2.7
   - Together with `react-redux`, it provides an efficient and scalable way to manage application state.

### 6. **Husky and Linting**
   - **Husky** is used to handle Git hooks, ensuring the code is properly formatted and linted before commits.
   - **Version**: 9.1.6
   - **ESLint** and **Prettier** are configured to maintain code consistency, while `lint-staged` ensures only modified files are checked.
   - **ESLint Version**: 9.9.0
   - **Prettier Version**: 3.3.3

### 7. **Drag and Drop**
   - Drag and drop functionality is implemented using the `@dnd-kit` library, providing an interactive and smooth experience for moving elements within the UI.
   - **Core Version**: 6.1.0
   - **Modifiers Version**: 7.0.0
   - **Sortable Version**: 8.0.0

### 8. **Radix UI**
   - This project uses accessible and unstyled components from the `@radix-ui` library to build a user-friendly and accessible interface.
   - **Versions**:
     - `@radix-ui/react-icons`: 1.3.0
     - `@radix-ui/react-popover`: 1.1.1
     - `@radix-ui/react-tabs`: 1.1.0
     - `@radix-ui/react-slot`: 1.1.0

### 9. **Validations**
   - **Yup** is used to implement schema-based validations for forms and data structures.
   - **Version**: 1.4.0

### 10. **React Router**
   - Navigation within the application is handled using **react-router-dom**.
   - **Version**: 6.26.2

### 11. **UUID**
   - The **UUID** library is used to generate unique identifiers for components and data.
   - **Version**: 10.0.0

### 12. **Icons**
   - Icons are provided by **Lucide React** and **react-icons**.
   - **Lucide React Version**: 0.446.0
   - **React Icons Version**: 5.3.0

### 13. **React Error Boundary**
   - **react-error-boundary** is used to handle errors in React components gracefully.
   - **Version**: 4.0.13

### 14. **Device Detection**
   - **react-device-detect** is used to detect device characteristics and provide an optimized experience.
   - **Version**: 2.2.3

### 15. **Date Handling**
   - The **date-fns** library is used for efficient and simple date formatting and manipulation.
   - **Version**: 4.1.0

### Plugins and Other Dependencies

- **Vite Plugins**:
  - `vite-plugin-svgr` is used to import SVGs as React components.
  - `vite-tsconfig-paths` enables support for path aliasing based on the `tsconfig.json` file.

- **PostCSS**: A tool for transforming CSS with plugins, fully compatible with Tailwind CSS.

- **Commitlint**: Ensures commit messages follow a conventional format.

## Available Scripts

In the `package.json` file, several scripts are configured to aid development and code maintenance:

- `start`: Runs formatting, linting, and starts the development server.
- `dev`: Starts the Vite development server.
- `build`: Compiles the project and builds the optimized production files.
- `lint`: Checks for linting errors using ESLint.
- `lint:fix`: Automatically fixes linting issues when possible.
- `format`: Formats code using Prettier.
- `preview`: Previews the production build.
- `prepare`: Initializes
