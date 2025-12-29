
interface ContentSection {
  type: "intro" | "section" | "list";
  title?: string;
  content: string;
}

export function parseWordPressContent(html: string): ContentSection[] {
  const sections: ContentSection[] = [];
  
  // Remove extra whitespace and normalize
  const cleanHtml = html.replace(/\s+/g, " ").trim();
  
  // Split by H2 tags
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const parts = cleanHtml.split(h2Regex);
  
  // First part is intro (before first H2)
  if (parts[0] && parts[0].trim()) {
    const introContent = parts[0].trim();
    // Remove HTML tags for intro
    const textContent = introContent.replace(/<[^>]*>/g, "").trim();
    if (textContent) {
      sections.push({
        type: "intro",
        content: introContent,
      });
    }
  }
  
  // Process H2 sections
  for (let i = 1; i < parts.length; i += 2) {
    if (parts[i] && parts[i + 1]) {
      const title = parts[i].replace(/<[^>]*>/g, "").trim();
      const content = parts[i + 1].trim();
      
      if (content.includes("<ul") || content.includes("<ol")) {
        sections.push({
          type: "list",
          title,
          content,
        });
      } else {
        sections.push({
          type: "section",
          title,
          content,
        });
      }
    }
  }
  
  return sections;
}

export function renderWordPressContent(sections: ContentSection[]): JSX.Element {
  // Check if we have Mission and Vision sections (for Hakkımızda page)
  const missionIndex = sections.findIndex(s => s.title?.toLowerCase().includes("misyon"));
  const visionIndex = sections.findIndex(s => s.title?.toLowerCase().includes("vizyon"));
  const hasMissionVision = missionIndex !== -1 && visionIndex !== -1 && Math.abs(missionIndex - visionIndex) === 1;

  return (
    <div className="space-y-6">
      {sections.map((section, index) => {
        // Mission/Vision grid layout
        if (hasMissionVision && (index === missionIndex || index === visionIndex)) {
          if (index === missionIndex) {
            return (
              <div key={`mission-vision-grid`} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-accent-green mb-4">
                    {section.title}
                  </h2>
                  <div
                    className="prose prose-invert prose-lg max-w-none overflow-hidden
                      prose-p:text-gray-300
                      prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
                {sections[visionIndex] && (
                  <div className="glass rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-accent-green mb-4">
                      {sections[visionIndex].title}
                    </h2>
                    <div
                      className="prose prose-invert prose-lg max-w-none
                        prose-p:text-gray-300
                        prose-p:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: sections[visionIndex].content }}
                    />
                  </div>
                )}
              </div>
            );
          }
          // Skip vision as it's already rendered with mission
          return null;
        }

        if (section.type === "intro") {
          return (
            <div key={`intro-${index}`} className="glass rounded-xl p-8">
              <div
                className="prose prose-invert prose-lg max-w-none overflow-hidden
                  prose-p:text-gray-300
                  prose-p:leading-relaxed
                  prose-p:text-lg"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          );
        }
        
        if (section.type === "list") {
          return (
            <div key={`section-${index}`} className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold text-accent-green mb-4">
                {section.title}
              </h2>
              <div
                className="wp-content-card prose prose-invert max-w-none overflow-hidden
                  prose-ul:list-none prose-ul:space-y-2
                  prose-li:text-gray-300
                  prose-li:flex
                  prose-li:items-start
                  prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          );
        }
        
        return (
          <div key={`section-${index}`} className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold text-accent-green mb-4">
              {section.title}
            </h2>
            <div
              className="prose prose-invert prose-lg max-w-none overflow-hidden
                prose-p:text-gray-300
                prose-p:leading-relaxed
                prose-h3:text-accent-green
                prose-h3:text-xl
                prose-h3:font-bold
                prose-h3:mt-6
                prose-h3:mb-3"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        );
      })}
    </div>
  );
}

