---
title: Python Test Data Generator
description: Command-line Python script that generates fake user records of any size and exports them to CSV or JSON, for testing SQL and BI work.
pubDate: 2026-02-01
category: Python tooling
tags: [Python, pandas, NumPy, Test data]
cover: ./evidences/csv-output.png
coverAlt: Generated CSV file with Name, Lastname, Lastname2 and Birthday columns
repo: https://gitlab.com/acastro97/random_users_list_generator
order: 4
---

## Technical objective

Generate any number of fake user records on demand and export them as CSV or JSON.

## Case context

Practice SQL and BI projects need realistic-looking data that contains no real people. Writing it by hand does not scale past a few rows.

## Solution

![Command-line prompts: number of records, format and file name](./evidences/final1.png)

1. **Seed lists** — pandas loads lists of names, surnames and dates from CSV files.
2. **Generate** — the script picks random values to build each record, for as many rows as the user asks.
3. **Export** — the user chooses CSV (with a header row and a fixed column order) or JSON Lines, and a file name.

## Tools used

Python (pandas, NumPy, random, json)

## Result

![Sample CSV output](./evidences/csv-output.png)

![Sample JSON Lines output](./evidences/json-output.png)

- Sample runs produce a 250-row CSV file and a 500-row JSON Lines file of fake user records, ready to load into SQL or pandas.
