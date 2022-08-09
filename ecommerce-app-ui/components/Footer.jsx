export const Footer = () => {
    return (
        <footer className="bg-slate-300">
            <div className="container w-8/10 mx-auto p-8">
                <div className="footer-links m-2">
                    <div className="grid grid-cols-3">
                        <div>
                            <div className="section-title my-3">Account</div>
                            <div className="footer-link py-2 text-slate-600">Log In</div>
                            <div className="footer-link py-2 text-slate-600">Sign Up</div>
                        </div>
                        <div>
                            <div className="section-title my-3">Company</div>
                            <div className="footer-link py-2 text-slate-600">About</div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-slate-600 py-2 text-center">© 2022 All Rights Reserved</div>
            </div>
        </footer>
    )
}