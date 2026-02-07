import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { MedFlowRow } from '../types';

interface NetworkGraphProps {
  data: MedFlowRow[];
  width?: number;
  height?: number;
  topN: number;
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ data, width = 800, height = 600, topN }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || data.length === 0 || !svgRef.current) return;

    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    // 1. Process Data
    // Aggregate flow: Supplier -> Category -> Customer
    const nodes = new Map<string, { id: string, type: 'supplier' | 'category' | 'customer', val: number }>();
    const links: { source: string, target: string, value: number }[] = [];

    data.slice(0, topN * 10).forEach(row => { // Limit processing for perf
      const sup = row.SupplierID;
      const cat = row.Category;
      const cust = row.CustomerID;
      const val = row.Number;

      if (!nodes.has(sup)) nodes.set(sup, { id: sup, type: 'supplier', val: 0 });
      if (!nodes.has(cat)) nodes.set(cat, { id: cat, type: 'category', val: 0 });
      if (!nodes.has(cust)) nodes.set(cust, { id: cust, type: 'customer', val: 0 });

      nodes.get(sup)!.val += val;
      nodes.get(cat)!.val += val;
      nodes.get(cust)!.val += val;

      links.push({ source: sup, target: cat, value: val });
      links.push({ source: cat, target: cust, value: val });
    });

    // Consolidate links
    const linkMap = new Map<string, { source: string, target: string, value: number }>();
    links.forEach(l => {
      const key = `${l.source}-${l.target}`;
      if (linkMap.has(key)) {
        linkMap.get(key)!.value += l.value;
      } else {
        linkMap.set(key, { ...l });
      }
    });

    const graphNodes = Array.from(nodes.values());
    const graphLinks = Array.from(linkMap.values());

    // 2. D3 Force Simulation
    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    const simulation = d3.forceSimulation(graphNodes as any)
      .force("link", d3.forceLink(graphLinks).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(20));

    // 3. Render
    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(graphLinks)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value) * 0.1 + 1);

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(graphNodes)
      .join("circle")
      .attr("r", d => 5 + Math.sqrt(d.val) * 0.2)
      .attr("fill", d => {
        if (d.type === 'supplier') return "#ef476f";
        if (d.type === 'category') return "#ffd166";
        return "#06d6a0";
      })
      .call(drag(simulation) as any);

    node.append("title")
      .text(d => `${d.id} (${d.type})\nVol: ${d.val}`);

    const text = svg.append("g")
        .selectAll("text")
        .data(graphNodes)
        .join("text")
        .text(d => d.id.substring(0, 10))
        .attr("font-size", "10px")
        .attr("dx", 12)
        .attr("dy", 4)
        .attr("fill", "currentColor")
        .attr("class", "dark:fill-white fill-gray-800 pointer-events-none opacity-80");

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);

      text
          .attr("x", (d: any) => d.x)
          .attr("y", (d: any) => d.y);
    });

    function drag(sim: any) {
      function dragstarted(event: any) {
        if (!event.active) sim.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      function dragended(event: any) {
        if (!event.active) sim.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    return () => {
      simulation.stop();
    };
  }, [data, width, height, topN]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden border border-white/20 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-sm">
      <svg ref={svgRef} width={width} height={height} />
    </div>
  );
};

export default NetworkGraph;
