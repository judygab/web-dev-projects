import { useState, useEffect } from "react";
import FiltersIcon from "../../assets/icons/filters.svg";
import { Accordion } from "../elements/Accordion";
import { CheckBox } from "../elements/CheckBox";
import { CATEGORIES, COLORS, GENDERS, PRICE_RANGE } from "../../data/filters";
import { useRouter } from 'next/router';
import { Radio } from "../elements/Radio";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

export const FiltersBar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGE);
    const [selectedGender, setSelectedGender] = useState([]);

    const router = useRouter()

    useEffect(() => {
        updateQueryParams()
    }, [selectedCategories, selectedColors, selectedGender, selectedPrice])

    const handleCheckboxChange = (category, value, name) => {
        switch(category) {
            case "categories": 
                let categories = updateFilter(selectedCategories, name, value);
                setSelectedCategories(categories);
                break;
            case "colors":
                let colors = updateFilter(selectedColors, name, value);
                setSelectedColors(colors);
                break;
            default:
                break;
        }
    }

    const updateFilter = (list, item, value) => {
        let updatedList = list;
        if (value == true) {
            updatedList.push(item);
        } else {
            updatedList = updatedList.filter(el => el != item);
        }
        return updatedList;
    }

    const updateQueryParams = () => {
        router.push({
            pathname: '/search',
            query: { 
                categories : JSON.stringify(selectedCategories),
                colors: JSON.stringify(selectedColors),
                gender: JSON.stringify(selectedGender),
                price: JSON.stringify(selectedPrice)
            },
            shallow: true
        });
    }

    const handleRadioSelect = (value) => {
        setSelectedGender(value);
    }

    const onSliderChange = (value) => {
        setSelectedPrice(value)
    }

    return (
        <div className="m-4 border-r px-3 border-slate-300">
            <div className="flex pb-2 justify-between border-b border-slate-300">
                <div className="flex items-center">
                    <FiltersIcon />
                    <span className="px-2">Filters</span>
                </div>
                <button className="mx-2">Clear All</button>
            </div>
            <div className="flex pb-2 flex-col justify-between border-b border-slate-300">
                <Accordion label="Categories">
                    {
                        CATEGORIES.map((category, index) => {
                            return (
                                <CheckBox key={index} label={category.name} onChange={(e) => handleCheckboxChange("categories", e.target.checked, category.name)} />
                            )
                        })
                    }
                </Accordion>
            </div>
            <div className="flex pb-2 flex-col justify-between border-b border-slate-300">
                <Accordion label="Colors">
                    {
                        COLORS.map((category, index) => {
                            return (
                                <CheckBox key={index} label={category.name} onChange={(e) => handleCheckboxChange("colors", e.target.checked, category.name)} />
                            )
                        })
                    }
                </Accordion>
            </div>
            <div className="flex pb-2 flex-col justify-between border-b border-slate-300">
                <Accordion label="Price">
                    <>
                    <Slider 
                        range
                        min={PRICE_RANGE[0]}
                        max={PRICE_RANGE[1]}
                        value={selectedPrice}
                        onChange={onSliderChange}
                        handleStyle={{
                            borderColor: "grey"
                        }}
                        trackStyle={{
                            background: "black"
                          }}
                         />
                    </>
                </Accordion>
            </div>
            <div className="flex pb-2 flex-col justify-between border-b border-slate-300">
                <Accordion label="Gender">
                    {
                        GENDERS.map((gender, index) => {
                            return (
                                <Radio key={index} label={gender.name} name="gender" onChange={(e) => handleRadioSelect(e.target.value)} />
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    )
}