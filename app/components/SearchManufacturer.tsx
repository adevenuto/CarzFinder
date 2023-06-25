import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { manufacturers } from "@/constants";

export default function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
    const [query, setQuery] = useState("")
    const filteredManufacturers = (query==="") ? manufacturers : manufacturers.filter(item => (
        item.toLowerCase().trim().includes(query.toLowerCase().trim())
    ))
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image 
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Car Logo"
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opcacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                            {(filteredManufacturers.length === 0 && query !== "") ? (
                                <Combobox.Option
                                    value={query}
                                    className="search-manufacturer__option"
                                >
                                    No results
                                </Combobox.Option>
                            ) : (
                                filteredManufacturers.map(item => (
                                    <Combobox.Option
                                        key={item}
                                        value={item}
                                        className={({active}) => `
                                            relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                                        `}
                                    >
                                        { item }
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
