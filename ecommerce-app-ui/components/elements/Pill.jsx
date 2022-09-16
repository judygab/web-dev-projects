import RemoveIcon from "../../assets/icons/remove.svg";

const Pill = ({ label, onRemove }) => {
    return (
        <button onClick={onRemove} className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full">
            <span>{label}</span>
            <RemoveIcon />
        </button>
    )
};

export default Pill;