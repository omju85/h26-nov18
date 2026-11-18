import { useState } from "react";

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);

  function toggle() {
    setOn((value) => !value);
  }

  return [on, toggle] as const;
}
