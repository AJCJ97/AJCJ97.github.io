---
title: Gym Admin BI Report
description: Three-page Power BI report on simulated gym data in SQL Server, showing where revenue comes from across products, services and five offices.
pubDate: 2026-03-15
category: Business intelligence
tags: [Power BI, DAX, Power Query, SQL Server]
cover: ./evidences/ProductSales.png
coverAlt: Power BI report showing product sales by office
order: 2
---

## Technical objective

Turn transactional SQL Server data from a simulated gym into a three-page Power BI report that explains where revenue comes from.

## Case context

A gym with five offices sells products and services. Management wants to know which offerings and offices drive income, and how concentrated that income is. The data comes from the [Gym Admin Database](../gym-admin/) project and is simulated.

## Solution

1. **Prepare** — SQL queries with JOINs and CTEs combine payments and sales with products, services, offices and clients.
2. **Model** — Power BI model with office and year slicers; Power Query for cleanup.
3. **Measure** — DAX measures for revenue totals, transaction counts and percentage splits.
4. **Explain** — each page documents a key insight, its business interpretation and a suggested action.

## Tools used

SQL Server (T-SQL) · Power BI (Power Query, DAX)

## Result

![Global income: products versus services](./evidences/Products.png)

- **Total income:** about $263K, with 68.8% from product sales and 31.2% from services.

![Product sales by office and year](./evidences/ProductSales.png)

- **Products:** treadmills bring in roughly 93% of product revenue (about $169K of $181K). Revenue depends heavily on one high-value item.

![Service revenue by service type](./evidences/ServicesIncomes.png)

- **Services:** Physiotherapy ($24K) and Personal Training ($20K) lead. Every service has the same number of payments, so the gap comes from price, not volume.
- **Suggested action:** reduce dependence on treadmill sales through bundles and accessories, and promote higher-value services.
