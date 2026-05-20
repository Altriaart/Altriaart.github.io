---
title: "City Commute Flows"
date: 2024-06-01
description: "An interactive data visualisation mapping peak-hour transit patterns across the metro network using D3.js and public transport open data."
image: "/images/projects/commute-flows.jpg"
tags: [data-viz, d3, javascript]
url: "https://github.com/yourname/commute-flows"
featured: true
---

This project began as a personal curiosity about which routes are most congested and at what times. Using six months of anonymised trip data released by the transit authority, I built an animated chord diagram that shows flow volumes between major hubs throughout the day.

The main technical challenge was interpolating sparse late-night data without suggesting false precision. The final version uses opacity to communicate confidence alongside volume.
