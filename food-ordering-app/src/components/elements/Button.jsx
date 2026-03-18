import clsx from "clsx";

function getClassName({ className}) {
    return clsx(
        'text-white text-lg font-bold rounded-2xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-opacity-50',
        'active:scale-95 shadow-lg flex justify-center items-center',
        className
    )
}

const sizes = {
    small: 'px-5 py-2.5 text-sm',
    medium: 'px-8 py-3.5 text-lg',
    large: 'w-full px-6 py-4 text-xl',
  };
  
const variants = {
primary: 'bg-gradient-to-r from-marigold to-orange-500 hover:from-orange-500 hover:to-marigold focus:ring-orange-400 shadow-[0_4px_15px_rgba(255,190,11,0.5)] hover:shadow-[0_6px_25px_rgba(255,190,11,0.7)]',
secondary: 'bg-gradient-to-r from-tomato to-rose-600 hover:from-rose-600 hover:to-tomato focus:ring-rose-400 shadow-[0_4px_15px_rgba(229,9,20,0.5)] hover:shadow-[0_6px_25px_rgba(229,9,20,0.7)]',
dark: 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 focus:ring-white/50 text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.1)]',
};

const Button = ({ 
    children,
    className,
    size = 'small',
    variant = 'primary',
    ...rest
 }) => {
    return (
        <button className={clsx(
            sizes[size],
            variants[variant],
            getClassName({ className })
        )}
        {...rest}
        >
            {children}
        </button>
    )
}

export default Button;