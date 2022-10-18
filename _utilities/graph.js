const { JSDOM } = require("jsdom");

// https://stackoverflow.com/a/48172630
const widths = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0.2796875, 0.2765625, 0.3546875, 0.5546875, 0.5546875,
  0.8890625, 0.665625, 0.190625, 0.3328125, 0.3328125, 0.3890625, 0.5828125,
  0.2765625, 0.3328125, 0.2765625, 0.3015625, 0.5546875, 0.5546875, 0.5546875,
  0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875,
  0.2765625, 0.2765625, 0.584375, 0.5828125, 0.584375, 0.5546875, 1.0140625,
  0.665625, 0.665625, 0.721875, 0.721875, 0.665625, 0.609375, 0.7765625,
  0.721875, 0.2765625, 0.5, 0.665625, 0.5546875, 0.8328125, 0.721875, 0.7765625,
  0.665625, 0.7765625, 0.721875, 0.665625, 0.609375, 0.721875, 0.665625,
  0.94375, 0.665625, 0.665625, 0.609375, 0.2765625, 0.3546875, 0.2765625,
  0.4765625, 0.5546875, 0.3328125, 0.5546875, 0.5546875, 0.5, 0.5546875,
  0.5546875, 0.2765625, 0.5546875, 0.5546875, 0.221875, 0.240625, 0.5, 0.221875,
  0.8328125, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.3328125, 0.5,
  0.2765625, 0.5546875, 0.5, 0.721875, 0.5, 0.5, 0.5, 0.3546875, 0.259375,
  0.353125, 0.5890625,
];
const avg = 0.5279276315789471;

function measureText(str, fontSize) {
  return (
    Array.from(str).reduce(
      (acc, cur) => acc + (widths[cur.charCodeAt(0)] ?? avg),
      0
    ) * fontSize
  );
}

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

async function graph(CONTENT, SVG_WIDTH, SVG_HEIGHT, TITLE, NAMESPACE) {
  const d3 = await import("d3");

  const dom = new JSDOM(
    `<!DOCTYPE html><body><div id="root"></div>${CONTENT}</body>`,
    { runScripts: "dangerously" }
  );

  const root = d3.select(dom.window.document.getElementById("root"));

  const fontBase = 16;
  const fontSize = 1.5;
  const lineHeight = 0.9;
  const padding = 10 * fontSize;
  const borderRadius = 10;
  const strokeWidth = fontSize;
  const svgPadding = 12 * fontSize;
  const markerSize = 5 * fontSize;

  const computedFontSize = fontBase * fontSize;
  const computedSvgHeight = SVG_HEIGHT * fontSize;
  const computedSvgWidth = SVG_WIDTH * fontSize;
  const computedNodes = dom.window.NODES.map((node) => {
    node.computedWidth = Math.round(
      measureText(`${node.icon} ${node.label}`, computedFontSize)
    );
    node.rectHeight = Math.round((computedFontSize + padding * 2) * lineHeight);
    node.rectWidth = Math.round(node.computedWidth + padding * 2);

    let computedPositionY = Math.round(node.position[1] * computedSvgHeight);
    if (computedPositionY >= computedSvgHeight) {
      computedPositionY = computedPositionY - node.rectHeight - svgPadding;
    } else {
      computedPositionY = Math.max(
        svgPadding,
        computedPositionY - node.rectHeight / 2
      );
    }

    let computedPositionX = Math.round(node.position[0] * computedSvgWidth);
    if (computedPositionX >= computedSvgWidth) {
      computedPositionX = computedPositionX - node.rectWidth - svgPadding;
    } else {
      computedPositionX = Math.max(
        svgPadding,
        computedPositionX - node.rectWidth / 2
      );
    }

    node.position = [computedPositionX, computedPositionY];
    node.id = convertToSlug(node.label);
    return node;
  });

  const svg = root
    .append("svg")
    .attr("id", NAMESPACE)
    .attr("color", "currentColor")
    .attr("width", computedSvgWidth)
    .attr("height", computedSvgHeight)
    .attr("preserveAspectRatio", "none")
    .attr("viewBox", `0 0 ${computedSvgWidth} ${computedSvgHeight}`)
    .attr("xmlns", "http://www.w3.org/2000/svg");

  svg.append("title").text(TITLE);

  svg
    .append("defs")
    .append("marker")
    .attr("id", `${NAMESPACE}-triangle`)
    .attr("viewBox", `0 0 ${markerSize} ${markerSize}`)
    .attr("refY", `${markerSize / 2}`)
    .attr("markerWidth", `${markerSize}`)
    .attr("markerHeight", `${markerSize}`)
    .attr("orient", "auto")
    .append("path")
    .attr("d", `M 0 0 L ${markerSize} ${markerSize / 2} L 0 ${markerSize} z`)
    .attr("fill", "currentColor");

  const listGroup = svg
    .append("g")
    .attr("role", "list")
    .attr("aria-describedby", NAMESPACE);

  computedNodes.forEach(
    ({
      id,
      position,
      parents,
      icon,
      label,
      computedWidth,
      rectHeight,
      rectWidth,
    }) => {
      const [x, y] = position;
      let listItem = listGroup.append("g").attr("role", "listitem");

      listItem
        .append("rect")
        .attr("fill", `var(--background-color, white)`)
        .attr("stroke", "currentColor")
        .attr("stroke-width", strokeWidth)
        .attr("x", x)
        .attr("y", y)
        .attr("rx", borderRadius)
        .attr("width", rectWidth + padding / 2)
        .attr("height", rectHeight)
        .attr("role", "presentation")
        .attr("aria-hidden", "true");

      listItem
        .append("text")
        .text(icon)
        .attr("x", x + padding)
        .attr("y", y + padding / 2 + computedFontSize)
        .attr("font-size", computedFontSize)
        .attr("role", "presentation")
        .attr("aria-hidden", "true");

      const labelText = listItem
        .append("text")
        .text(label)
        .attr("x", x + padding + computedFontSize + padding / 2)
        .attr("y", y + padding / 2 + computedFontSize)
        .attr("textLength", computedWidth - computedFontSize)
        .attr("lengthAdjust", "spacingAndGlyphs")
        .attr("font-size", computedFontSize)
        .attr("fill", "currentColor")
        .attr("role", "paragraph");

      if (parents) {
        parents.forEach((parent) => {
          const computedParentPosition = [
            parent.position[0] + parent.rectWidth / 2,
            parent.position[1] + parent.rectHeight,
          ];
          const computedPosition = [
            x + rectWidth / 2,
            y - markerSize * fontSize,
          ];
          const link = d3
            .linkVertical()
            .source(() => computedParentPosition)
            .target(() => computedPosition);
          svg
            .append("path")
            .attr("d", link)
            .attr("fill", "none")
            .attr("stroke", "currentColor")
            .attr("stroke-width", strokeWidth)
            .attr("marker-end", `url(#${NAMESPACE}-triangle)`)
            .attr("role", "presentation")
            .attr("aria-hidden", "true");
        });
      }
      const children = computedNodes.filter((node) => {
        return node.parents && node.parents[0].id === id;
      });
      let accessibleName = label;
      if (parents && parents.length > 0) {
        accessibleName += `. Has ${parents.length}`;
        accessibleName += ` input${parents.length > 1 ? "s" : ""}: `;
        accessibleName += parents.map((parent) => `"${parent.label}"`);
      }
      if (children && children.length > 0) {
        accessibleName += ` and ${children.length}`;
        accessibleName += ` output${children.length > 1 ? "s" : ""}: `;
        accessibleName += children.map((child) => `"${child.label}"`);
      }
      labelText.attr("aria-label", `${accessibleName}`);
    }
  );
  return `<div class="svg" style="--aspect-ratio-x: ${SVG_WIDTH}; --aspect-ratio-y: ${SVG_HEIGHT};">${root.html()}</div>`;
}

module.exports = graph;
