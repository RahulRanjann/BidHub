import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MapPinIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function States() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left w-52">
        <div>
          <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-[#1e293b] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#1e2731] h-11">
            Location
            <MapPinIcon
              className="-mr-1 h-5 w-5 text-#2b3745"
              aria-hidden="true"
            />
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
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#010f1c] text-white" : "text-white",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    DELHI
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#010f1c] text-white" : "text-white",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    HYDERABAD
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#010f1c] text-white" : "text-white",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    KOLKATA
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={classNames(
                      active ? "bg-[#010f1c] text-white" : "text-white",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    PUNE
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
