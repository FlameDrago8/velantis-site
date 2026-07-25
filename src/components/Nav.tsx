// "What's Next" drops out below sm so the row fits a phone without a menu.
const links = [
  { href: "#drive", label: "Drive", mobile: true },
  { href: "#next", label: "What's Next", mobile: false },
  { href: "#about", label: "About", mobile: true },
  { href: "#contact", label: "Contact", mobile: true },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.3em] transition-colors hover:text-accent"
        >
          VELANTIS
        </a>
        <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.18em] uppercase sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${link.mobile ? "" : "hidden sm:inline "}text-muted transition-colors hover:text-ink`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
