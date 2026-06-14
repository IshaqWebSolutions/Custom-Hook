import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    if (typeof val != "boolean") {
      console.log("val.....", val);
      setValue(!val);
    } else {
      setValue(val);
    }
  }

  return [value, toggleValue];
};

export default useToggle;
