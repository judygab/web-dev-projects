export const Radio = ({ checked, label }) => {
    return (
        <div className="flex items-center">
            <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
        </div>
    )
}