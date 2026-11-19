type TestimonialCardProps = {
  quote: string;
  author: string;
  service?: string;
};

export default function TestimonialCard({
  quote,
  author,
  service,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-surface-raised border border-edge rounded-sm h-full">
      <blockquote className="text-white/85 text-[15px] leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="flex items-center gap-3 pt-4 border-t border-edge">
        <div className="flex items-center justify-center w-9 h-9 bg-white/8 border border-edge rounded-full text-xs font-bold text-white/70">
          {author.charAt(0)}
        </div>
        <div>
          <cite className="not-italic text-sm font-semibold text-white">{author}</cite>
          {service && <p className="text-xs text-white/45 mt-0.5">{service}</p>}
        </div>
      </footer>
    </div>
  );
}