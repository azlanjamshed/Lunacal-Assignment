import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({ items, active, setActive }) => {
  const refs = useRef([]);
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    left: 0,
    top: 0,
    height: 0,
  });

  useEffect(() => {
    const current = refs.current[active];
    if (current) {
      const { offsetWidth, offsetLeft, offsetTop, offsetHeight } = current;
      setDimensions({
        width: offsetWidth,
        left: offsetLeft,
        top: offsetTop,
        height: offsetHeight,
      });
    }
  }, [active, items]);

  return (
    <div className="rounded-2xl bg-[#171717]  relative mx-10  ">
      <ul className="relative text-white flex gap-10 p-4 justify-center items-center">
        {/* Sliding active background */}
        <motion.div
          className="absolute bg-gray-400 rounded-2xl z-0"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            left: dimensions.left,
            top: dimensions.top,
          }}
        />

        {/* Menu items */}
        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <li
              key={item.name}
              ref={(el) => (refs.current[index] = el)}
              className="relative z-10 py-2 px-4 rounded-2xl cursor-pointer overflow-hidden group"
              onClick={() => setActive(index)}
            >
              {/* Text */}
              <span className="relative z-10">{item.name}</span>

              {/* Hover gradient only if not active */}
              {!isActive && (
                <span
                  className="
                    absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700
                    scale-x-0 origin-left
                    opacity-0
                    transition-all duration-800 ease-out
                    group-hover:scale-x-100
                    group-hover:opacity-100
                  "
                ></span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
