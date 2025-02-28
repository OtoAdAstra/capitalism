import { useState } from "react";
import "../styles/pages/LibertyToggler.sass";
import Switch from "react-switch";

type SwitchStates = {
  freedom: boolean;
  wealth: boolean;
  overregulations: boolean;
};

export default function LibertyToggler() {
  const [switchStates, setSwitchStates] = useState<SwitchStates>({
    freedom: false,
    wealth: false,
    overregulations: false,
  });

  const handleToggle = (key: keyof SwitchStates) => {
    setSwitchStates((prev) => {
      const newState = { ...prev, [key]: !prev[key] };

      const trueKeys = Object.entries(newState)
        .filter(([, value]) => value)
        .map(([key]) => key);

      if (trueKeys.length > 2) {
        const otherKeys = trueKeys.filter((k) => k !== key);
        const randomKey =
          otherKeys[Math.floor(Math.random() * otherKeys.length)];
        newState[randomKey as keyof SwitchStates] = false;
      }

      return newState;
    });
  };

  return (
    <div className="liberty-toggler">
      <h2>Formula of life:</h2>
      {(["freedom", "wealth", "overregulations"] as (keyof SwitchStates)[]).map(
        (key) => (
          <div className="switch-div" key={key}>
            <label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <Switch
              checked={switchStates[key]}
              onChange={() => handleToggle(key)}
              checkedIcon={false}
              uncheckedIcon={false}
              className="switch"
            />
          </div>
        )
      )}
    </div>
  );
}
