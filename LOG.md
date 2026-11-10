# Shipping log

## 2026-11-05 (America/New_York)

- **Page shipped:** ChargePoint Home Flex
- **Path:** `/chargers/chargepoint-home-flex/`
- **File:** `src/content/chargers/chargepoint-home-flex.md`
- **Notes:** First directory page. Electrical specs taken from ChargePoint’s April 2025 CPH50 datasheet, product page, installation FAQ, and Before You Buy page. Independent reviews: Car and Driver (hands-on roundup updated November 2, 2026) and CNET (home EV charger guide). Wirecutter was requested as a source but returned HTTP 403 from this environment, so it is not cited. `approxPriceUsd` is null because ChargePoint’s cited pages do not state an MSRP and review/marketplace figures do not agree. Buy link is the manufacturer product page only (not an affiliate link). No domain purchase, GitHub repo, or push was made from this pass.

- **Page drafted:** Emporia Classic EV Charger
- **Path:** `/chargers/emporia-classic/`
- **File:** `src/content/chargers/emporia-classic.md`
- **Notes:** Picked the Classic over the Pro for this page (the SEED entry covered both; the Pro can get its own page). Specs come from Emporia's EV charger product page FAQ and the May 7, 2025 Classic vs. Pro post. Independent sources: Car and Driver (hands-on, updated November 2, 2026) and a Pocketables owner review (July 2026). `approxPriceUsd` is 449, Emporia's listed J1772 starting price, which Car and Driver's card matches. Buy link is the manufacturer page only (not an affiliate link).

- **Page drafted:** Grizzl-E Classic (United Chargers)
- **Path:** `/chargers/grizzl-e-classic/`
- **File:** `src/content/chargers/grizzl-e-classic.md`
- **Notes:** Next SEED model after ChargePoint/Emporia pages already on disk. Specs from United Chargers’ US product page and ENERGY STAR listing GR1-14-24-PB (9.6 kW / 40 A / 24 ft cord / no network). Independent sources: CNET (best outdoor value pick) and MotorTrend (March 16, 2026 bare-bones ~$300 option). Wirecutter Classic review and 2026 guide timed out from this environment and are not cited. Flagged 24 vs 25 ft cable and 9.6 vs 10 kW marketing mismatches; `approxPriceUsd` is 300 from manufacturer $299.99 listing and MotorTrend’s $300 SRP (CNET cited $350 MSRP). Buy link is the manufacturer page only (not an affiliate link). Draft branch `draft/grizzl-e-classic`; nothing merged to main until B Money replies publish.

## 2026-11-06 (America/New_York)

- **Page drafted:** Wallbox Pulsar Plus
- **Path:** `/chargers/wallbox-pulsar-plus/`
- **File:** `src/content/chargers/wallbox-pulsar-plus.md`
- **Notes:** Next SEED model after Grizzl-E Classic. Specs from Wallbox US product page, shop collection, and August 2023 NA technical datasheet (9.6 kW / 40 A plug-in or hardwired; 11.5 kW / 48 A hardwired; 25 ft cable; NEMA Type 4; Wi-Fi/Bluetooth). Independent sources: Car and Driver (hands-on roundup updated November 2, 2026) and MotorTrend (January 4, 2023 Pulsar Plus review). Flagged operating-temp mismatch (datasheet 104 °F vs shop FAQ 122 °F) and Power Meter price disagreement across Car and Driver ($449), MotorTrend ($279), and Wallbox ($299). `approxPriceUsd` is 650 from manufacturer starting $649.99. Buy link is the manufacturer page only (not an affiliate link). Draft branch `draft/wallbox-pulsar-plus`; nothing merged to main until B Money replies publish.

## 2026-11-07 (America/New_York)

- **Page drafted:** Autel MaxiCharger AC Elite Home
- **Path:** `/chargers/autel-maxicharger-ac-elite-home/`
- **File:** `src/content/chargers/autel-maxicharger-ac-elite-home.md`
- **Notes:** Next SEED model after Wallbox Pulsar Plus. Specs from Autel’s March 8, 2024 Elite Home datasheet (9.6 kW / 40 A plug-in or 12 kW / 50 A hardwired; 25 ft J1772; NEMA 4; app-adjustable 6 A to rated current; 36-month warranty) plus Autel Energy US 40A ($559) and 50A ($599) product pages. Independent sources: CNET (security-features pick for the 50A) and The Gadgeteer (July 14, 2023 40A hands-on). Flagged enclosure mismatch (datasheet/US pages NEMA 4 vs store IP65/NEMA 4X), app current floor (6 A vs store 16–50 A), and 50A price disagreement ($599 on autelenergy.us vs $525/18% off on store.autelenergy.com). Did not cite MotorTrend’s Elite-URL review because its current text covers AC Lite Home at different list prices. `approxPriceUsd` is 559 from the manufacturer 40A regular price. Buy link is the manufacturer 50A page only (not an affiliate link). Draft branch `draft/autel-maxicharger-ac-elite-home`; nothing merged to main until B Money replies publish.

## 2026-11-09 (America/New_York)

- **Page shipped:** Tesla Universal Wall Connector
- **Path:** `/chargers/tesla-universal-wall-connector/`
- **File:** `src/content/chargers/tesla-universal-wall-connector.md`
- **Notes:** Next SEED model (#1, Tesla Wall Connector / Universal Wall Connector). Picked the Universal over the standard NACS-only Wall Connector because it is the model both CNET (best overall) and Car and Driver (best for future-proofing) actually chose, and it covers the mixed J1772/NACS garages the SEED entry describes; the standard Wall Connector can get its own page. Specs from Tesla’s Universal Wall Connector Installation Manual (part 1734412-XX-X) PDF and its online Product Specifications page on energylibrary.tesla.com (12–48 A; 60 A breaker for 48 A / 11.5 kW; hardwired only; 24 ft cable; Type 3R / IP54; −22 °F to 122 °F; ETL/cETL; 48-month personal-use warranty). tesla.com support and shop.tesla.com pages returned bot blocks (HTTP 403 via curl, timeouts via WebFetch, bot_blocked via TinyFish), so they are not cited; the manual PDF was read through TinyFish fetch_content. Independent sources: Car and Driver (roundup updated November 2, 2026, plus February 9, 2024 standalone review) and CNET (home EV charger guide, byline May 11, 2024). Flagged kW rounding differences (Car and Driver 2.9/5.8/7.7 kW vs Tesla 2.8/5.7/7.6 kW), Powershare support stated only by CNET, and the Car and Driver Rivian R1T fault note. `approxPriceUsd` is null: Tesla’s shop could not be read, Car and Driver quoted $595 at launch and CNET shows a $660 Best Buy listing. Buy link is the manufacturer shop page only (not an affiliate link). Published under B Money’s Nov 9, 2026 standing permission (merge after passing build).
