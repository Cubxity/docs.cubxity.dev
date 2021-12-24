---
sidebar_position: 2
---

# Getting Started

This guide will walk you through the process of setting up UnifiedMetrics on your server.

## Getting UnifiedMetrics

First, you must download and install UnifiedMetrics on your server. After downloading the JAR, put the plugin/mod in the
respective folder. Installing UnifiedMetrics exclusively on your proxy server(s) **will not export backend metrics**, such
as TPS.

- **Spigot/Paper/etc, Velocity, BungeeCord, Minestom:** `plugins`
- **Fabric:** `mods`

[**Downloads »**](https://github.com/Cubxity/UnifiedMetrics/releases/)

## Metrics Driver

Then, you must select a metric driver to use. **Please follow the respective guide to set them up.**

### Prometheus (Recommended)

Prometheus is an open-source systems monitoring and alerting toolkit. This is the recommended metric driver and is
perfect for integrated environments like Kubernetes and Docker.

[**Set up Prometheus »**](drivers/prometheus)

### InfluxDB

InfluxDB is an open-source time series database.

[**Set up InfluxDB »**](drivers/prometheus)

## Visualization

### Grafana

[![Grafana Dashboard](https://github.com/Cubxity/UnifiedMetrics/raw/dev/0.3.x/.github/assets/grafana.png)](https://dedimc.link/unifiedmetrics)

Grafana is a multi-platform open source analytics and interactive visualization web application. It provides charts,
graphs, and alerts for the web when connected to supported data sources.

[**Set up Grafana »**](guides/grafana)
