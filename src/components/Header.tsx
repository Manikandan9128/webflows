export default function Header() {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Plans", href: "#", active: true },
    { label: "Services", href: "#" },
    { label: "Learn", href: "#" },
    { label: "Community", href: "#" },
  ];
  return (
    <header className="border-b border-neutral-100">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 font-bold text-purple-700">
            S
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-purple-700">Saksham</div>
            <div className="font-semibold text-purple-700">Senior</div>
          </div>
        </div>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm ${
                l.active
                  ? "font-medium text-purple-700"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              {l.label}
              {l.label === "Learn" && <span className="ml-1">▾</span>}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="rounded-full border border-purple-600 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
