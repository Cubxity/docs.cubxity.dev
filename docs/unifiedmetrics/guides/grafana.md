---
sidebar_position: 2
---

# Grafana

Grafana is a multi-platform open source analytics and interactive visualization web application. It provides charts,
graphs, and alerts for the web when connected to supported data sources.

[![Grafana Dashboard](https://github.com/Cubxity/UnifiedMetrics/raw/dev/0.3.x/.github/assets/grafana.png)](https://dedimc.link/unifiedmetrics)

## Setting Up Grafana

### Grafana Cloud

Grafana Cloud offers a free hosted Grafana instance and Prometheus instance. This is useful for small servers.

- Sign up on [grafana.com](https://grafana.com/) and create an organization
- Follow the given instructions
- Launch Grafana from Grafana Cloud dashboard
- Create an API key with write permissions (this will be used later)

### Self-hosted

TODO

## Data Source

### Prometheus (Grafana Cloud)

Grafana Cloud will configure the data source for you automatically.

### Prometheus (Self-hosted Grafana)

Navigate to `Configuration > Data sources` and create a new Prometheus data source.

Ensure that Grafana is able to reach Prometheus. Enter the IP address or hostname for Prometheus in the configuration.
E.g. `http://prometheus:9090` (Docker).

Optionally, enter the credentials you have set up for Prometheus (not to be confused with UnifiedMetrics' driver configuration).

Proceed by clicking Save & Test, then you should see an alert saying Data source is working.

### InfluxDB

Navigate to `Configuration > Data sources` and create a new InfluxDB data source. Select Flux as the query language *(UnifiedMetrics >= 0.3.x & InfluxDB > 1.8)*.

It is highly recommended that you secure InfluxDB with proper security measures (*cough*). Enter the IP address or hostname of your InfluxDB server. E.g. `http://influxdb` (Docker).

Uncheck Basic Auth under Auth (you may leave it on if you know what you are doing). Enter the details of your InfluxDB database under ÌnfluxDB Details.

Finally, proceed by clicking Save & Test, then you should see an alert saying Data source is working.

## Dashboards

Select the appropriate dashboard for your setup. Then, import it to Grafana by using the `+` button. Configure the appropriate data source, and you should be good to go.

### UnifiedMetrics 0.3.x (stable)
- [InfluxDB (Flux)](https://grafana.com/grafana/dashboards/14755)
- [Prometheus](https://grafana.com/grafana/dashboards/14756)

### UnifiedMetrics 0.2.x (legacy/discontinued)
- [InfluxDB (InfluxQL)](https://grafana.com/grafana/dashboards/13860)
- [Prometheus](https://grafana.com/grafana/dashboards/14017)

