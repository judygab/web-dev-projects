import FiltersIcon from "../../assets/icons/filters.svg";
import { Accordion } from "../elements/Accordion";
import { CheckBox } from "../elements/CheckBox";

export const FiltersBar = () => {
    return (
        <div className="m-4 border-r px-3 border-slate-300">
            <div className="flex pb-2 justify-between border-b border-slate-300">
                <div className="flex items-center">
                    <FiltersIcon />
                    <span className="px-2">Filters</span>
                </div>
                <button className="mx-2">Clear All</button>
            </div>
            <div className="flex pb-2 justify-between border-b border-slate-300">
                <Accordion label="Categories">
                    <p></p>
                </Accordion>
            </div>
        </div>
    )
}