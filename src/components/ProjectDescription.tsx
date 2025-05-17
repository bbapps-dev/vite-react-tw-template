export const ProjectDescription = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 text-lg leading-relaxed text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">⚙️ Starter Project</h1>
      <p className="mb-4">
        This is a minimal React 19 project scaffolded with:
      </p>
      <ul className="list-disc list-inside mt-2 flex flex-col gap-3 text-start">
        <li>
          <span className="font-semibold">⚛️ React 19</span> – Latest React with
          concurrent rendering and hooks
        </li>
        <li>
          <span className="font-semibold">⚡ Vite</span> – Lightning-fast build
          tool and dev server
        </li>
        <li>
          <span className="font-semibold">🎨 Tailwind CSS v4</span> –
          Utility-first CSS with Just-in-Time engine
        </li>
        <li>
          <span className="font-semibold">🧹 Prettier</span> – Code formatter
          for consistent style
        </li>
        <li>
          <span className="font-semibold">🧪 ESLint</span> – Linter with React,
          hooks, and Prettier integration
        </li>
        <li>
          <span className="font-semibold">✨ TypeScript</span> – Type-safe,
          scalable JavaScript
        </li>
      </ul>
      <p className="mt-6">
        Ideal foundation for building modern web applications with a clean,
        scalable codebase.
      </p>
    </div>
  );
};

export default ProjectDescription;
