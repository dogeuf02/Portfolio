import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-softBlue">
      {/* Aquí se dibuja la página activa */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm opacity-70 bg-softCream text-softBrown">
        © {new Date().getFullYear()} David Muñoz
      </footer>
    </div>
  );
}
