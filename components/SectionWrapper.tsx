interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

