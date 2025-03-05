import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

const Dropdown = () => {
  const [selected, setSelected] = useState("Select option");

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="w-full flex items-center justify-between px-4 py-2 text-sm bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="block truncate">{selected}</span>
          <CaretDownIcon className="w-4 h-4" aria-hidden />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10"
          sideOffset={5}
        >
          <DropdownMenu.Label>Options</DropdownMenu.Label>
          <DropdownMenu.Separator className="h-[1px] bg-zinc-400 -mx-1" />
          {options.map((option, index) => (
            <DropdownMenu.Item
              key={index}
              onSelect={() => setSelected(option)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer focus:outline-none"
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
