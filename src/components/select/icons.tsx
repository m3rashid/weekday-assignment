type IconProps = {
  onClick?: () => void;
  style?: React.CSSProperties;
};

export function ChevronDown(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      style={props.style}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={props.onClick}
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
}

export function ChevronUp(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      style={props.style}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={props.onClick}
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      style={props.style}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={props.onClick}
      className="icon icon-tabler icons-tabler-outline icon-tabler-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
