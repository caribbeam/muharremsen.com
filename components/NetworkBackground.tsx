"use client";

export default function NetworkBackground() {
  // Sabit konumlar: düğümler (görseldeki teal küreler) ve bağlantı çizgileri için
  const nodes = [
    { x: 5, y: 15, r: 4 },
    { x: 18, y: 8, r: 3 },
    { x: 85, y: 12, r: 5 },
    { x: 92, y: 25, r: 3 },
    { x: 12, y: 45, r: 4 },
    { x: 45, y: 20, r: 6 },
    { x: 70, y: 35, r: 4 },
    { x: 25, y: 70, r: 3 },
    { x: 55, y: 55, r: 5 },
    { x: 80, y: 65, r: 4 },
    { x: 35, y: 85, r: 3 },
    { x: 90, y: 80, r: 4 },
    { x: 50, y: 40, r: 3 },
    { x: 15, y: 55, r: 4 },
    { x: 75, y: 18, r: 3 },
    { x: 30, y: 30, r: 5 },
    { x: 60, y: 75, r: 3 },
    { x: 95, y: 50, r: 4 },
    { x: 8, y: 78, r: 3 },
    { x: 42, y: 8, r: 4 },
  ];

  const links = [
    [0, 1], [0, 4], [1, 5], [2, 3], [2, 6], [3, 9], [4, 7], [5, 15], [5, 13],
    [6, 14], [6, 9], [7, 10], [8, 12], [8, 16], [9, 17], [10, 18], [11, 17],
    [12, 15], [13, 15], [14, 2], [16, 8], [17, 11], [18, 7], [19, 1], [19, 5],
    [0, 13], [3, 14], [4, 8], [6, 12], [10, 16], [15, 8],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full network-bg-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 136, 0.95)" />
            <stop offset="100%" stopColor="rgba(0, 212, 255, 0.9)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Bağlantı çizgileri – hareketli */}
        <g className="network-lines">
          {links.map(([i, j], idx) => (
            <line
              key={idx}
              x1={`${nodes[i].x}%`}
              y1={`${nodes[i].y}%`}
              x2={`${nodes[j].x}%`}
              y2={`${nodes[j].y}%`}
              stroke="rgba(0, 212, 255, 0.45)"
              strokeWidth="0.8"
              className="network-line"
              style={{ animationDelay: `${idx * 0.15}s` }}
            />
          ))}
        </g>
        {/* Düğümler – hareketli küreler */}
        <g className="network-nodes">
          {nodes.map((node, idx) => (
            <g
              key={idx}
              className="network-node-g"
              style={{
                animation: "nodeFloat 5s ease-in-out infinite",
                animationDelay: `${idx * 0.25}s`,
              }}
            >
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.r}
                fill="url(#nodeGlow)"
                filter="url(#glow)"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
