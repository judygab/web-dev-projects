import clsx from 'clsx';

export const Button = ({ children, onClick, variant="primary", className }) => {

    const defaultStyle = "h-10 px-5 rounded-lg";

    const btnStyle = {
        primary: "text-white bg-slate-800 hover:bg-slate-900",
        secondary: "text-black bg-white hover:bg-slate-50"
    }

    return (
        <button className={clsx(defaultStyle, btnStyle[variant], className && className)} onClick={onClick}>{children}</button>
    )
}