# Frontend FAQ

## 📂 Project Structure
Under the `src` folder, you'll find the entire project. Inside it, there are three key directories:
- **pages/**: Contains different views and pages.
- **components/**: Holds reusable UI components.
- **styles/**: Stores global and component-specific styles.

### ⚠️ Important
Avoid modifying root files such as `App.tsx`, `main.tsx`, and `index.html` unless absolutely necessary.

---

## ⚙️ Setting Up the React Environment
1. Ensure **npm** is installed on your system.
2. Run the following command inside the repository:
   ```sh
   npm install
   ```
3. Once all dependencies are installed, start the development server:
   ```sh
   npm run dev
   ```
4. The terminal will display a local address where the project is running with live reload enabled:
   ```sh
   VITE v6.0.11  ready in 133 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help
   ```

---

## 📦 Adding a New Dependency
1. Open `package.json`.
2. If the dependency is only for development, add it under `devDependencies`. If it is required for the app to function, add it under `dependencies`.
3. Run:
   ```sh
   npm install
   ```

---

## ✅ Good Practices
- When creating a **reusable component**, place it inside the `components` folder, under its own subfolder (e.g., `components/Header/`). Each component should have its own `.css` file.
- Avoid hardcoding colors in styles. Instead, define and use color variables in `global.css`.

---

# DATABASE 

---
## TABLES NAMES
1. Usuarios
2. Investigadores
3. Estudiantes
4. Herramientas
5. Proyectos
6. Líneas de Investigación
7. SNI
--
