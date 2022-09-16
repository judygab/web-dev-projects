export const CheckBox = ({ checked, label, onChange }) => {
    return (
        <div className="flex items-center">
            <input checked={checked} id="checked-checkbox" onChange={onChange} type="checkbox" value="" className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"/>
            <label className="ml-2 text-sm font-medium text-gray-900">{label}</label>
        </div>
    )
}