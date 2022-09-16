import React, { useState } from "react";
import DownArrowIcon from "../../assets/icons/down-arrow.svg";
import UpArrowIcon from "../../assets/icons/up-arrow.svg";

export const Accordion = ({ label, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
        <>
            <div className="flex flex-1 justify-between my-2">
                <div><p>{label}</p></div>
                <button className="px-3" onClick={toggleAccordion}>
                    {
                        isOpen ? <UpArrowIcon hßeight="10" width="10" /> : <DownArrowIcon height="10" width="10" />
                    }
                </button>
            </div>
            {
                isOpen && <div className="accordion-content">{children}</div>
            }
        </>
    )
}