import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//{ label, placeholder, value, onChange }
const TextInput = () => {
    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-1">{"label"}</label>
            <input
                className="border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                type="text"
                placeholder={"placeholder"}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};



const Input = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("")
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const label = "some label"
    return (
        <div className="mb-4 relative">
            <input
                className={`border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none ${isFocused ? 'border-blue-500' : 'transition-colors duration-300 ease-in-out'
                    }`}
                // className="border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
                type="text"
                placeholder={isFocused ? '' : label}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <AnimatePresence>
                {isFocused && (
                    <motion.label
                        className={`absolute top-0 left-3 -mt-2 bg-white text-gray-600 text-xs px-1`}
                        htmlFor="input"
                        initial={{ opacity: 1, y: 10 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -10 }}
                        // transition={{ duration: 0.5 }}
                    >
                        {label}
                    </motion.label>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TextInput;

