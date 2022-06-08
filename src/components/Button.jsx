import { forwardRef } from 'react';

const Button = forwardRef(({ color, label, code, onClick }, ref) => (
    <button
        className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md `}
        onClick={onClick}
        ref={ref}
    >
        <p className="text-base">{label}</p>
        <p className="text-xs">{code}</p>
    </button>
));

export default Button;
