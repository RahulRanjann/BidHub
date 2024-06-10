import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { building-office } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BankInsuranceName() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left w-52">
        <div>
          <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-[#1e293b] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#1e2731] h-11">
            Vehicle
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute float-right z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg bg-[#1e293b] ring-1 ring-black ring-opacity-5 focus:outline-none text-white">
            <div className="py-1">

              <div className="flex">
                <Menu.Item>
                  {({ active }) => (
                    <img
                      src="../src/assets/bycicle (1).png"
                      className={classNames(
                        active ? "bg-[#010f1c] text-white" : "text-white",
                        "block size-24 m-2 text-sm"
                      )}
                      alt="car"
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <img
                      src="../src/assets/rickshaw (1).png"
                      className={classNames(
                        active ? "bg-[#010f1c] text-white" : "text-white",
                        "block size-24 text-sm"
                      )}
                      alt="car"
                    />
                  )}
                </Menu.Item>
              </div>


              <div className="flex">
                <Menu.Item>
                  {({ active }) => (
                    <img
                      src="../src/assets/pickup (1).png"
                      className={classNames(
                        active ? "bg-[#010f1c] text-white" : "text-white",
                        "block size-24 m-2 text-sm"
                      )}
                      alt="car"
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <img
                      src="../src/assets/lorry.png"
                      className={classNames(
                        active ? "bg-[#010f1c] text-white" : "text-white",
                        "block size-24 text-sm"
                      )}
                      alt="car"
                    />
                  )}
                </Menu.Item>
              </div>

              <div className="flex">
                <Menu.Item>
                  {({ active }) => (
                    <img
                      src="../src/assets/road.png"
                      className={classNames(
                        active ? "bg-[#010f1c] text-white" : "text-white",
                        "block size-24 m-2 text-sm"
                      )}
                      alt="car"
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <img
                      src="../src/assets/truck.png"
                      className={classNames(
                        active ? "bg-[#010f1c] text-white" : "text-white",
                        "block size-24 text-sm"
                      )}
                      alt="car"
                    />
                  )}
                </Menu.Item>
              </div>
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
