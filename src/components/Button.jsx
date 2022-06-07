const Button = ({ color, label, code, onClick }) => (
    <button
        className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md `}
        onClick={onClick}
    >
        <p className="text-base">{label}</p>
        <p className="text-xs">{code}</p>
    </button>
);

export default Button;
