import clsx from 'clsx';

const pageNumberStyle = {
    current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600",
    default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
}

const defaultPageNumberStyle = 
    "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"

const Btn = ({ pageIndex, onClick, currentPage }) => {
    return (
        <button onClick={() => onClick(pageIndex)} className={clsx(pageIndex == currentPage ? pageNumberStyle.current : pageNumberStyle.default, defaultPageNumberStyle)}>{pageIndex}</button>
    )
}

export const Pagination = ({ pagesTotal, isExpanded, currentPage, onClickPage }) => {
    if (isExpanded) {
        return (
            <>
                {
                    [...Array(pagesTotal)].map((page, index) => {
                        return (
                            <Btn key={index} pageIndex={index + 1} currentPage={currentPage} onClick={onClickPage} />
                        )
                    })
                }
            </>
        )
    } else {
        return (
            <>
                <Btn key="1" pageIndex={1} currentPage={currentPage} onClick={onClickPage}>1</Btn>
                {currentPage > 2 && <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>}
                {
                    [...Array(currentPage - 1, currentPage, currentPage + 1)].filter(i => ![...Array(0,1,pagesTotal)].includes(i)).map((page, index) => {
                        return (
                            <Btn  key={page} pageIndex={page} currentPage={currentPage} onClick={onClickPage} />
                        )
                    })
                }
                {(pagesTotal - currentPage) > 2 && <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>}
                <Btn key={pagesTotal} pageIndex={pagesTotal} currentPage={currentPage} onClick={onClickPage} />
            </>
        )
    }
}