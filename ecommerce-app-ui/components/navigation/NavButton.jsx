import Link from 'next/link';

export const NavButton = ({ url, children}) => {
    return (
        <Link href={url}>
            <a className="flex text-gray-600 hover:bg-slate-200 cursor-pointer transition-colors duration-300 m-1 p-5 rounded-lg">
                {children}
            </a>
        </Link>
    )
}