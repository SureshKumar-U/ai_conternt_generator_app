import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-surface-container-lowest font-body-sm text-body-sm w-full py-lg mt-auto border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-md">
            <div className="font-label-md text-label-md font-black text-on-surface">
                AIGen.io
            </div>
            <div className="text-tertiary">
                © 2026 AIGen.io Inc. Built for Power Users.
            </div>
            <div className="flex gap-md">
                <Link className="text-on-surface-variant hover:text-tertiary transition-colors" to="#">Privacy Policy</Link>
                <Link className="text-on-surface-variant hover:text-tertiary transition-colors" to="#">Terms of Service</Link>
                <Link className="text-on-surface-variant hover:text-tertiary transition-colors" to="#">API Documentation</Link>
            </div>
        </footer>
    )
}

