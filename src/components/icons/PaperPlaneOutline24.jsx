
export function PaperPlaneOutline24({
  strokeWidth = 1.5,
  corners = "round",
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}><polyline points="21.5 2.5 7 12.875 7 21 12 16.625" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth={strokeWidth} data-color="color-2" data-cap="butt" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "butt"}></polyline><polygon points="2.5 9.5 21.5 2.5 18.5 21.5 2.5 9.5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth={strokeWidth} strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></polygon></svg>
  );
}
