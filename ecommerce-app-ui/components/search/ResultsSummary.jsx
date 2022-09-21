import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router'
import ChevronLeft from "../../assets/icons/chevron-left.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import clsx from 'clsx';
import { Pagination } from './Pagination';
import FiltersIcon from "../../assets/icons/filters.svg";
import { Dialog, Transition } from '@headlessui/react';
import { FiltersBar } from './FiltersBar';

export const ResultsSummary = ({ count, currPage, resultsPerPage, onPageUpdate }) => {
    const router = useRouter();
    const { categories, color } = router.query;
    const totalPages = Math.ceil(count / resultsPerPage);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false)  

    useEffect(() => {
        if (totalPages < 8) {
            setIsExpanded(true)
        }
    }, [totalPages])

    const closeModal = () => {
        setIsOpen(false)
    }
    
    const openModal = () => {
        setIsOpen(true)
    }

    const pageNumberStyle = {
        current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600",
        default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
    }

    const defaultPageNumberStyle = 
        "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"

    return (
        <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between my-2'>
            <div>
                <p className="text-slate-600 text-center">{`Showing ${count} product results`}</p>
            </div>
            <div className='flex justify-between'>
                <div className='sm:hidden block flex-1'>
                    <button onClick={openModal} className='bg-black flex mx-auto justify-center items-center rounded-full h-10 w-10 text-white'>
                        <FiltersIcon />
                    </button>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2">
                                       <FiltersBar />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center  border border-black bg-white px-4 py-2 text-sm font-medium text-black hover:bg-slate-100 focus:outline-none"
                                            onClick={closeModal}
                                            >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black-600 focus:outline-none"
                                            onClick={closeModal}
                                            >
                                            Apply
                                        </button>
                                    </div>
                                     </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                            </Dialog>
                        </Transition>
                </div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button className={clsx(pageNumberStyle.default, defaultPageNumberStyle)} onClick={() => onPageUpdate(currPage - 1)} disabled={currPage == 1}>
                        <span className="sr-only">Previous</span>
                        <ChevronLeft width={24}/>
                    </button> 
                    <Pagination
                        pagesTotal={totalPages}
                        onClickPage={onPageUpdate}
                        currentPage={currPage}
                        isExpanded={false}
                        />
                     <button className={clsx(pageNumberStyle.default, defaultPageNumberStyle)} onClick={() => onPageUpdate(currPage + 1)} disabled={currPage == totalPages}>
                        <span className="sr-only">Next</span>
                        <ChevronRight width={24} />
                     </button>
                </nav>
            </div>
        </div>
    )
}