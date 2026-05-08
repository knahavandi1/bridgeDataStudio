/* charts.jsx — custom data viz components for sample work
   All intentionally hand-built editorial-style charts. */

const VIZ = {
  forest: '#1F3A2E',
  forestSoft: '#3A5247',
  terracotta: '#C25E3A',
  amber: '#C28A3A',
  sage: '#6B8A7A',
  brown: '#8C5A3F',
  sand: '#B8A07A',
  paper: '#F1EADC',
  paper2: '#EAE2D1',
  rule: '#C9BEA8',
  ink: '#1A1612',
  muted: '#6B5F52',
};

/* =====================================================
   BarChart — horizontal, editorial
   ===================================================== */
function BarChart({ data, max, color = VIZ.forest, width = 600, barHeight = 28, gap = 14, format = (v) => v }) {
  const labelW = 200;
  const valueW = 70;
  const chartW = width - labelW - valueW;
  const total = data.length;
  const height = total * (barHeight + gap);
  const m = max || Math.max(...data.map(d => d.value));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ overflow: 'visible' }}>
      {data.map((d, i) => {
        const y = i * (barHeight + gap);
        const w = (d.value / m) * chartW;
        const c = d.color || color;
        return (
          <g key={i}>
            <text x={0} y={y + barHeight / 2 + 5} fontFamily="Geist, sans-serif" fontSize="13" fill={VIZ.ink}>
              {d.label}
            </text>
            <rect x={labelW} y={y} width={chartW} height={barHeight} fill={VIZ.paper2} />
            <rect x={labelW} y={y} width={w} height={barHeight} fill={c} />
            <text x={labelW + w + 8} y={y + barHeight / 2 + 5} fontFamily="Geist Mono, monospace" fontSize="12" fill={VIZ.ink} fontWeight="500">
              {format(d.value)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* =====================================================
   StackedBar — population groups
   ===================================================== */
function StackedBar({ rows, keys, colors, width = 600, rowHeight = 36, gap = 8 }) {
  const labelW = 180;
  const chartW = width - labelW;
  const height = rows.length * (rowHeight + gap);
  return (
    <svg viewBox={`0 0 ${width} ${height + 30}`} width="100%">
      {/* header */}
      <g>
        {keys.map((k, i) => (
          <g key={k} transform={`translate(${labelW + 90 * i}, 14)`}>
            <rect width="10" height="10" fill={colors[i]} />
            <text x="16" y="9" fontFamily="Geist Mono, monospace" fontSize="10" fill={VIZ.muted} letterSpacing="0.06em">{k.toUpperCase()}</text>
          </g>
        ))}
      </g>
      {rows.map((row, i) => {
        const y = 30 + i * (rowHeight + gap);
        const total = keys.reduce((s, k) => s + row[k], 0);
        let x = labelW;
        return (
          <g key={i}>
            <text x={0} y={y + rowHeight / 2 + 5} fontFamily="Geist, sans-serif" fontSize="13" fill={VIZ.ink}>{row.label}</text>
            {keys.map((k, j) => {
              const w = (row[k] / total) * chartW;
              const seg = (
                <g key={k}>
                  <rect x={x} y={y} width={w} height={rowHeight} fill={colors[j]} />
                  {w > 30 && (
                    <text x={x + w / 2} y={y + rowHeight / 2 + 4} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="11" fill="white" fontWeight="500">
                      {row[k]}%
                    </text>
                  )}
                </g>
              );
              x += w;
              return seg;
            })}
          </g>
        );
      })}
    </svg>
  );
}

/* =====================================================
   LineChart — trend over time
   ===================================================== */
function LineChart({ series, xLabels, yMax, width = 720, height = 280, padding = { l: 48, r: 24, t: 24, b: 40 } }) {
  const chartW = width - padding.l - padding.r;
  const chartH = height - padding.t - padding.b;
  const ymax = yMax || Math.max(...series.flatMap(s => s.values));
  const xStep = chartW / (xLabels.length - 1);

  const path = (values) => values.map((v, i) => {
    const x = padding.l + i * xStep;
    const y = padding.t + chartH - (v / ymax) * chartH;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const yTicks = 5;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%">
      {/* grid */}
      {Array.from({ length: yTicks + 1 }).map((_, i) => {
        const y = padding.t + (chartH / yTicks) * i;
        const v = ymax - (ymax / yTicks) * i;
        return (
          <g key={i}>
            <line x1={padding.l} y1={y} x2={width - padding.r} y2={y} stroke={VIZ.rule} strokeDasharray={i === yTicks ? '0' : '2 4'} />
            <text x={padding.l - 8} y={y + 3} textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="10" fill={VIZ.muted}>{Math.round(v)}</text>
          </g>
        );
      })}
      {/* x labels */}
      {xLabels.map((l, i) => (
        <text key={i} x={padding.l + i * xStep} y={height - 16} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="10" fill={VIZ.muted}>{l}</text>
      ))}
      {/* series */}
      {series.map((s, i) => (
        <g key={i}>
          <path d={path(s.values)} fill="none" stroke={s.color} strokeWidth="2" />
          {s.values.map((v, j) => {
            const x = padding.l + j * xStep;
            const y = padding.t + chartH - (v / ymax) * chartH;
            return <circle key={j} cx={x} cy={y} r="3" fill={s.color} />;
          })}
          {/* label at end */}
          <text x={width - padding.r + 4} y={padding.t + chartH - (s.values[s.values.length-1] / ymax) * chartH + 4}
            fontFamily="Geist, sans-serif" fontSize="11" fill={s.color} fontWeight="500">
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* =====================================================
   Donut
   ===================================================== */
function Donut({ slices, size = 220, label }) {
  const total = slices.reduce((s, x) => s + x.value, 0);
  const r = size / 2 - 6;
  const cx = size / 2;
  const cy = size / 2;
  let acc = 0;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size}>
      {slices.map((s, i) => {
        const a0 = (acc / total) * Math.PI * 2 - Math.PI / 2;
        acc += s.value;
        const a1 = (acc / total) * Math.PI * 2 - Math.PI / 2;
        const x0 = cx + r * Math.cos(a0);
        const y0 = cy + r * Math.sin(a0);
        const x1 = cx + r * Math.cos(a1);
        const y1 = cy + r * Math.sin(a1);
        const large = a1 - a0 > Math.PI ? 1 : 0;
        return (
          <path key={i} d={`M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`} fill={s.color} />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.55} fill={VIZ.paper} />
      {label && (
        <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="Newsreader, serif" fontSize="28" fill={VIZ.ink}>{label.value}</text>
      )}
      {label && (
        <text x={cx} y={cy + 14} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="9" fill={VIZ.muted} letterSpacing="0.08em">{label.text}</text>
      )}
    </svg>
  );
}

/* =====================================================
   Heatmap grid (e.g. by neighborhood)
   ===================================================== */
function HeatGrid({ data, cols, rows, colors, cellSize = 22, gap = 2, label }) {
  const w = cols * (cellSize + gap);
  const h = rows * (cellSize + gap);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%">
      {data.map((v, i) => {
        const c = Math.floor(i / cols);
        const r = i % cols;
        const idx = Math.min(colors.length - 1, Math.floor(v * colors.length));
        return <rect key={i} x={r * (cellSize + gap)} y={c * (cellSize + gap)} width={cellSize} height={cellSize} fill={colors[idx]} />;
      })}
    </svg>
  );
}

/* =====================================================
   ChoroplethMap — abstract geographic map (hand-built)
   ===================================================== */
function RegionMap({ regions, width = 720, height = 360 }) {
  // regions: [{name, path, value, label, x, y}]
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%">
      <rect width={width} height={height} fill={VIZ.paper} />
      {/* graticule */}
      {[0,1,2,3,4,5].map(i => (
        <line key={`v${i}`} x1={(width/6)*i} y1="0" x2={(width/6)*i} y2={height} stroke={VIZ.rule} strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4" />
      ))}
      {[0,1,2,3].map(i => (
        <line key={`h${i}`} x1="0" y1={(height/4)*i} x2={width} y2={(height/4)*i} stroke={VIZ.rule} strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4" />
      ))}
      {regions.map((r, i) => (
        <g key={i}>
          <path d={r.path} fill={r.color} stroke={VIZ.paper} strokeWidth="1.5" />
          <text x={r.x} y={r.y} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="10" fill={VIZ.ink} fontWeight="500" letterSpacing="0.04em">
            {r.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* =====================================================
   AreaChart
   ===================================================== */
function AreaChart({ values, xLabels, color = VIZ.forest, width = 600, height = 200, fillOpacity = 0.18 }) {
  const padding = { l: 40, r: 16, t: 16, b: 32 };
  const chartW = width - padding.l - padding.r;
  const chartH = height - padding.t - padding.b;
  const max = Math.max(...values);
  const xStep = chartW / (values.length - 1);
  const points = values.map((v, i) => [padding.l + i * xStep, padding.t + chartH - (v / max) * chartH]);
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length-1][0]} ${padding.t + chartH} L ${points[0][0]} ${padding.t + chartH} Z`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%">
      <line x1={padding.l} y1={padding.t + chartH} x2={width - padding.r} y2={padding.t + chartH} stroke={VIZ.rule} />
      <path d={areaPath} fill={color} opacity={fillOpacity} />
      <path d={linePath} fill="none" stroke={color} strokeWidth="2" />
      {points.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill={color} />)}
      {xLabels && xLabels.map((l, i) => (
        <text key={i} x={padding.l + i * xStep} y={height - 12} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="10" fill={VIZ.muted}>{l}</text>
      ))}
    </svg>
  );
}

/* =====================================================
   Stat
   ===================================================== */
function Stat({ value, label, sub, color = VIZ.ink, align = 'left' }) {
  return (
    <div style={{ textAlign: align }}>
      <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1, color, letterSpacing: '-0.02em' }}>
        {value}
      </div>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: VIZ.muted, marginTop: 12 }}>
        {label}
      </div>
      {sub && <div style={{ fontSize: 13, color: VIZ.muted, marginTop: 6, maxWidth: 280 }}>{sub}</div>}
    </div>
  );
}

Object.assign(window, { VIZ, BarChart, StackedBar, LineChart, Donut, HeatGrid, RegionMap, AreaChart, Stat });
