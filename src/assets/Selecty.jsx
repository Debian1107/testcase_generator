import React from "react";
import * as Select from "@radix-ui/react-select";
// import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

// let valtyp = "integer";
const funk1 = (e) => {
  console.log(e);
  // valtyp = e;
};

export const Selecty = () => (
  <Select.Root onValueChange={funk1} size="5" defaultValue="integer">
    <Select.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder="Type" />
      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          <Select.Group>
            <Select.Label className="px-[30px] text-2xl leading-[25px] text-mauve11"></Select.Label>
            <SelectItem value="integer">integer</SelectItem>
            <SelectItem value="character">character</SelectItem>
            <SelectItem value="Floating">Floating</SelectItem>
            <SelectItem value="Double">Double</SelectItem>
            <SelectItem value="string">string</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = "SelectItem";
// export default SelectDemo;
