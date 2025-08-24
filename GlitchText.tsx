export default function GlitchText({ children, as: Tag = "span", className = "" }:{
  children: React.ReactNode; as?: any; className?: string;
}) {
  return (
    <Tag className={`sheen ${className}`}>
      {children}
      <span aria-hidden className="sheen__shine" />
    </Tag>
  );
}