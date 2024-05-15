import BiaLogo from "../assets/logo-bia.png";

export function Footer() {
    return (
        <footer className="footer">
        <div className="container p-12 flex justify-between">
        <img src={BiaLogo} alt="Bia Logo" width={40} height={40}/>
            <p className="text-slate-600">© 2024 Ana Beatriz Miranda Oliveira, Todos os direitos reservados.</p>
        </div>
        </footer>
    )
}