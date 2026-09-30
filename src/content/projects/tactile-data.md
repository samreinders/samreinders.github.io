---
title: Conversational tactile data interfaces
summary: Combining refreshable tactile displays with conversational AI so that people who are blind or have low vision can explore, question and verify data by touch and speech.
period: 2023 - 2026
role: Research Fellow (Lead Researcher, Technical Lead)
order: 2
image: ../../assets/pubs/vis26-graphy-touch.jpg
imageAlt: 'A hand resting on a line chart on a refreshable tactile display. A speech bubble asks "What was the trend of this line?" and the agent replies "The number of Italian speakers steadily...".'
imageCaption: Exploring a line chart by touch and speech with Graphy, from our IEEE VIS 2026 paper.
funding: Australian Research Council Discovery Project
links:
  - label: Source code on GitHub
    url: https://github.com/accessible-data-vis/feelogue
---

Data visualizations are part of everyday life, from business to news to education, but they remain largely out of reach for people who are blind or have low vision (BLV). Refreshable tactile displays (RTDs) render graphics as raised pins that can change on demand, which makes them far more interactive than printed tactile graphics. On their own, though, RTDs are low resolution, which limits labelling, and tactile graphics are hard to interpret without a description.

This project pairs an RTD with a conversational agent. The agent provides verbal context and analytical support, while the chart on the display gives spatial grounding and independent tactile access to the data.

## Learning how people would use it

![Three panels. (a) A bar chart of water storage over a 27-year period, drawn as a grid of raised dots. (b) The same chart shown on a Graphiti refreshable tactile display. (c) A hand touching the display while asking "Hey Graphy, what is the trend of this graph?", with the reply "The water storage begins at 83% before...".](../../assets/pubs/vis24.jpg)

We began with a Wizard-of-Oz study in which 11 BLV participants explored line charts, bar charts and isarithmic maps using an RTD and a conversational agent. We identified nine distinct interaction patterns. The choice of modality depended on the task and on prior experience with tactile graphics, and participants strongly preferred touch and speech together over either one alone. Participants with more tactile experience described how tactile images supported deeper engagement with the data and independent interpretation. This work received a Best Paper Honorable Mention at IEEE VIS 2024.

## Building the architecture

![Architecture diagram. The user speaks and listens through speech input and output. Two hardware devices, a hand tracker and a Dot Pad refreshable tactile display, connect to an interaction manager made up of an input processor, an output processor and a visualization handler. The interaction manager exchanges messages over MQTT with a conversational agent made up of a deictic classifier, a dialogue manager, a calculation pipeline and a response generator using GPT-4o.](../../assets/pubs/pv26-architecture.png)

Next we built Feelogue, an open-source reference architecture and the first system to combine touch input with a conversational agent on an RTD. It supports deictic queries that fuse what you're touching with what you say, such as "what is the trend between these points?" It handles touch sensing on the display, rendering Vega-Lite charts as tactile pin grids, grounding the conversation in touch context, and synchronising tactile, braille and audio output. This work received a Best Paper Award (VisNotes track) at IEEE PacificVis 2026.

## Co-designing Graphy

Over four workshops across eight months, we worked with three blind co-designers to refine Graphy, an LLM-powered conversational tactile data interface. Co-designers used touch as their main way of understanding the shape of the data, its trends and relationships. They turned to the agent for what touch couldn't resolve, like calculation and analysis, and used the chart on the display to check the agent's answers. Key outcomes include:

- a **layered presentation** that introduces chart components one at a time, so exploration builds up progressively
- a **feedback grammar** that distinguishes tactile feedback started by the user from feedback started by the agent
- a sequential interaction pattern, **select, confirm, ask, verify**, where each step grounds the last

![Interaction flow diagram. At the top, the layered presentation steps through layers T (title), X (x-axis), Y (y-axis), D1, D2 and so on (data series) and S (summary). Explore by touch is the central activity; from it, users can navigate layers (button), select data points (gesture or button), query the agent, or filter series (agent). Circles mark where the agent is invoked, and filtering has a dashed border because a researcher carried it out.](../../assets/pubs/vis26-interaction-flow.png)

*The interaction flow in Graphy: touch is at the centre, and from it users navigate layers, select data points, query the agent or filter series.*

![Four steps in a row: Select (gesture or button), then Confirm (audio, braille, tactile), then Query (agent), then Verify (touch).](../../assets/pubs/vis26-pattern.png)

*The select, confirm, ask, verify interaction pattern.*

This work received a Best Paper Honorable Mention and will appear at IEEE VIS 2026.
