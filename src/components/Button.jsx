const Button = ({ color, label, code }) => (
    <button
        className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md `}
    >
        <p className="text-base">{label}</p>
        <p className="text-xs">{code}</p>
    </button>
);

export default Button;
