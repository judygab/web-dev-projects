import React, { useState } from "react";
import DownArrowIcon from "../../assets/icons/down-arrow.svg";
import UpArrowIcon from "../../assets/icons/up-arrow.svg";

export const Accordion = ({ label, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
        <div>
            <div className="flex justify-between my-2">
                <p>{label}</p>
                <button className="px-3" onClick={toggleAccordion}>
                    {
                        isOpen ? <UpArrowIcon height="10" width="10" /> : <DownArrowIcon height="10" width="10" />
                    }
                </button>
            </div>
            {
                isOpen && <div className="accordion-content">{children}</div>
            }
        </div>
    )
}