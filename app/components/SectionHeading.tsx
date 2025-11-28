import type { CSSProperties } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

type LetterStyle = CSSProperties & { "--char-index"?: number };

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const tokens = title.split(/(\s+)/);

  return (
    <div className="max-w-2xl">
      <p className="heading-eyebrow">{eyebrow}</p>
      <h2 className="heading-glow mt-3 text-3xl font-semibold sm:text-4xl">
        {tokens.map((token, tokenIndex) => {
          if (token.trim() === "") {
            return (
              <span key={`space-${tokenIndex}`} className="heading-space">
                &nbsp;
              </span>
            );
          }

          const characters = Array.from(token);
          return (
            <span key={`word-${tokenIndex}`} className="heading-word">
              {characters.map((char, charIndex) => (
                <span
                  key={`${char}-${tokenIndex}-${charIndex}`}
                  className="heading-letter"
                  style={{ "--char-index": charIndex } as LetterStyle}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        })}
      </h2>
      <p className="mt-4 text-base text-slate-100/90">{description}</p>
    </div>
  );
}
