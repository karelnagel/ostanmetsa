export default function Button({
  href,
  color,
  children,
  fontSize,
  className,
}: {
  href: string;
  color?: string;
  children: any;
  fontSize?: string;
  className?: string;
}) {
  return (
    <a href={href} style={{ color, borderColor: color, fontSize }} className={`button ${className}`}>
      {children}
    </a>
  );
}
