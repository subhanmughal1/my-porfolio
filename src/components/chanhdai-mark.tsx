// Replaced with Muhammad Subhan's initials mark "MS"
export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      className="h-8 text-foreground"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 32"
      {...props}
    >
      {/* M */}
      <path
        fill="currentColor"
        d="M0 4h4v24H0zM4 4h4v4H4zM8 8h4v4H8zM12 4h4v4h-4zM16 4h4v24h-4z"
      />
      {/* S */}
      <path
        fill="currentColor"
        d="M26 4h16v4H26zM26 8h4v8h-4zM26 16h16v4H26zM38 20h4v8h-4zM26 24h16v4H26z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 32"><path fill="${color}" d="M0 4h4v24H0zM4 4h4v4H4zM8 8h4v4H8zM12 4h4v4h-4zM16 4h4v24h-4z"/><path fill="${color}" d="M26 4h16v4H26zM26 8h4v8h-4zM26 16h16v4H26zM38 20h4v8h-4zM26 24h16v4H26z"/></svg>`;
}