import Link from 'next/link';
import clsx from 'clsx';

export const NavLink = ({ url, label, isActive }) => {
    const borderStyle = "border-b border-slate-900";

    return (
        <li className={clsx(isActive && borderStyle, "mr-1")}>
            <Link href={url}>
                <a className="flex text-gray-600 hover:bg-slate-200 cursor-pointer transition-colors duration-300 m-2 p-5 rounded-lg">
                    {label}
                </a>
            </Link>
        </li>
    )
}