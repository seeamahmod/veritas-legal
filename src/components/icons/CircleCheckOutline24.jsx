
export function CircleCheckOutline24({
  strokeWidth = 1.5,
  corners = "round",
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth={strokeWidth} strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth={strokeWidth} data-color="color-2" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></polyline></svg>
  );
}
