import { TextField } from "@mui/material";
import DropDownButton from "../DropDown/DropDownButton";

const animationProperties = [
  {
    inlineProperty: "animationDuration",
    property: "animation-duration",
    type: "text",
    component: ({ handleInput, label }) => (
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onChange={(e) => handleInput(e.target.value)}
      />
    ),
  },
  {
    inlineProperty: "animationDelay",
    property: "animation-delay",
    type: "text",
    component: ({ handleInput, label }) => (
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onChange={(e) => handleInput(e.target.value)}
      />
    ),
  },
  {
    inlineProperty: "animationIterationCount",
    property: "animation-iteration-count",
    type: "text",
    component: ({ handleInput, label }) => (
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        onChange={(e) => handleInput(e.target.value)}
      />
    ),
  },
  {
    inlineProperty: "animationDirection",
    property: "animation-direction",
    type: "select",
    component: ({ handleInput, label }) => (
      <DropDownButton
        label={label}
        setSelectedValue={handleInput}
        data={["normal", "reverse", "alternate", "alternate-reverse"]}
      />
    ),
  },
  {
    inlineProperty: "animationTimingFunction",
    property: "animation-timing-function",
    type: "select",
    component: ({ handleInput, label }) => (
      <DropDownButton
        label={label}
        setSelectedValue={handleInput}
        data={[
          "ease",
          "linear",
          "ease-in",
          "ease-out",
          "ease-in-out",
          "cubic-bezier(1,1,1,1)",
        ]}
      />
    ),
  },
  {
    inlineProperty: "animationFillMode",
    property: "animation-fill-mode",
    type: "select",
    component: ({ handleInput, label }) => (
      <DropDownButton
        label={label}
        setSelectedValue={handleInput}
        data={["none", "forwards", "backwards", "both"]}
      />
    ),
  },
  {
    inlineProperty: "animationPlayState",
    property: "animation-play-state",
    type: "select",
    component: ({ handleInput, label }) => (
      <DropDownButton
        label={label}
        setSelectedValue={handleInput}
        data={["paused", "running"]}
      />
    ),
  },
];

const Constants = {
  animationProperties,
};

export default Constants;
