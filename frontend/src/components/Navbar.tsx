
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-surface/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 font-semibold text-foreground"
                >
                    <span className="font-headline-lg text-headline-lg font-bold text-primary">AIGen.io</span>

                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 md:flex">
                    <Link
                        to="/"
                        className="
              rounded-md px-3 py-2
              text-sm font-medium
              text-foreground
              transition-colors
              hover:bg-surface-container
            "
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/generate"
                        className="
              rounded-md px-3 py-2
              text-sm font-medium
              text-primary
              bg-primary/10
            "
                    >
                        Generate
                    </Link>

                    <Link
                        to="/projects"
                        className="
              rounded-md px-3 py-2
              text-sm font-medium
              text-on-surface-variant
              transition-colors
              hover:bg-surface-container
              hover:text-foreground
            "
                    >
                        Projects
                    </Link>

                    <Link
                        to="/pricing"
                        className="
              rounded-md px-3 py-2
              text-sm font-medium
              text-on-surface-variant
              transition-colors
              hover:bg-surface-container
              hover:text-foreground
            "
                    >
                        Pricing
                    </Link>
                </nav>


            </div>
        </header>
    );
}
