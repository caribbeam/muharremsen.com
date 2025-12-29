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
      className={`py-20 px-4 overflow-hidden ${className}`}
    >
      <div className="container mx-auto max-w-full overflow-hidden">{children}</div>
    </section>
  );
}

