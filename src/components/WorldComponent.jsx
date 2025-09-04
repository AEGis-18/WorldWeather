import World from "@react-map/world";

export function WorldComponent({ selectCountry, size }) {
  return (
    <World
      type="select-single"
      size={size}
      onSelect={selectCountry}
      mapColor="#1f2937"
      hoverColor="#3730a3"
      selectColor="#6366f1"
      strokeColor="#2e1065"
      strokeWidth={0.25}
      hints
    ></World>
  );
}
