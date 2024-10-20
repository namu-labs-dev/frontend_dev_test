import clsx from "clsx";
import { KeyCount } from "../KeyCount/KeyCount";
import { Text } from "../Text/Text";
import { errorMap } from "~/utils/common";

type CharCount = {
  current: number;
  total: number;
};

export type ErrorStates = "hint" | "warning";

type Error = {
  state: ErrorStates;
  text: string;
};

type Props = {
  foo: string;
  error?: Error;
  charCount?: CharCount;
} & JSX.IntrinsicElements["input"];

export function TextInput(props: Props) {
  const placeholder = props.disabled
    ? "Disabled (cannot be modified)"
    : props.placeholder;

  return (
    <div>
      <input
        type='text'
        disabled={props.disabled}
        placeholder={placeholder}
        className={clsx(
          "w-full rounded-[10px] border-2 border-black px-[14px] py-[15px] font-medium leading-6 outline-none",
          props.disabled && "border-transparent bg-[#F0F0F0]",
          props.error && `border-[${errorMap[props.error.state]}]`
        )}
      />
      <div className='mt-1 flex items-center justify-between'>
        {props.error && (
          <Text
            className={clsx(`text-[${errorMap[props.error.state]}]`, "text-sm")}
          >
            {props.error.text}
          </Text>
        )}

        {props.charCount && (
          <KeyCount
            className='ml-auto'
            current={props.charCount.current}
            total={props.charCount.total}
          />
        )}
      </div>
    </div>
  );
}
