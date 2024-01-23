import * as Form from "@radix-ui/react-form";
import { Selecty } from "./Selecty";
import { useDispatch } from "react-redux";
import { addVal } from "../../rdux-kit/mySlice";

export const Listbdy = () => {
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    // let t=e.target[1].value

    const finalString = {
      t: e.target[1].value,
      a: e.target[2].value,
      b: e.target[3].value,
      l2: e.target[4].value,
      l1: e.target[5].value,
    };
    console.log(finalString);
    dispatch(addVal(finalString));
  };
  return (
    <div className="bg-red-300 h-lvh flex w-fit px-10 items-center justify-center">
      <Form.Root onSubmit={handelSubmit} className=" w-[260px]">
        <h1 className="text-xl">Select val Type </h1>
        <Form.Field className="grid mb-[10px]" name="num-type">
          <div className="flex space-x-1">
            <Selecty />

            <Form.Control asChild>
              <input
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-red shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-red selection:bg-blackA6"
                placeholder="Start val"
                required
              />
            </Form.Control>
            <Form.Control asChild>
              <input
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-red shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-red selection:bg-blackA6"
                placeholder="End Val"
                required
              />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-red">
              Email
            </Form.Label>
            <Form.Message
              className="text-[13px] text-red opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your email
            </Form.Message>
            <Form.Message
              className="text-[13px] text-red opacity-[0.8]"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-red shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-red selection:bg-blackA6"
              required
            />
          </Form.Control>
        </Form.Field>

        {/* <Form.Root className=" w-[260px]"> */}
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <h1>Enter the size of the List</h1>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-red shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-red selection:bg-blackA6"
              type="number"
              placeholder="Length OF List"
              required
            />
          </Form.Control>
        </Form.Field>

        {/* <Form.Submit asChild> */}
        <button
          // type="button"
          // onClick={handelSubmit}
          className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-red px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
        >
          Post question
        </button>
        {/* </Form.Submit> */}
      </Form.Root>
    </div>
  );
};
