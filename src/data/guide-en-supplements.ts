import type { GuideEnSection } from "./guide-en-articles";
export const guideEnSupplements: Record<string, GuideEnSection[]> = {
  "botanical-extract-purchasing-parameters": [
    { heading: "5. Compare offers on an equivalent basis", body: "Before comparing price, align botanical identity, plant part, extract type, marker assay, method, contaminant limits, carrier and packaging. A lower price may reflect a different material definition or a less complete document set rather than a like-for-like offer.", bullets: ["Same botanical identity and plant part", "Same marker and analytical basis", "Comparable contaminant limits and documents", "Same pack size, delivery basis and quotation validity"] },
    { heading: "6. Keep the purchasing specification controlled", body: "Record the approved specification revision and make sure the quotation, sample evaluation and commercial batch refer to it. When a supplier proposes a substitute or process change, review the effect on identity, assay, contaminants and application before approval.", note: "Do not approve a substitution based only on a similar trade name or marker percentage." }
  ],
  "how-to-read-botanical-extract-coa": [
    { heading: "5. Resolve discrepancies before release", body: "If a COA conflicts with the specification or label, pause approval and ask the issuer to explain the difference. Request a corrected report or additional evidence where appropriate. Keep the original and revised versions so the review trail remains clear." },
    { heading: "6. Build a repeat-batch review record", body: "For ongoing purchases, compare COAs across batches and track meaningful trends in assay, moisture, contaminants and other critical parameters. A trend review can help identify changes, but it does not replace the acceptance criteria for each batch." }
  ],
  "coa-tds-sds-differences": [
    { heading: "How the three documents work together", body: "Use the TDS to understand the product profile, the approved specification to define acceptance, the COA to review a specific batch, and the SDS to plan safe handling. Additional certificates and third-party reports answer different questions and should be checked for scope and applicability." }
  ],
  "what-is-standardized-botanical-extract": [
    { heading: "Questions to include in the specification", body: "Ask which marker is used, why it is relevant to material identity or purchasing quality, which method measures it, what range is accepted and whether results are reported on an as-is or dry basis. Also identify the plant part, extraction solvent and carrier where relevant." }
  ],
  "liposomal-ingredient-purchasing-parameters": [
    { heading: "Stability claims need context", body: "A stability statement should identify the tested formulation, packaging, storage condition, duration and measured endpoints. Ask whether the data apply to the offered batch or representative formulation and whether the test conditions resemble the planned distribution and use." },
    { heading: "Check sample and commercial-batch alignment", body: "Confirm whether the sample was prepared using the same formulation and process as the proposed commercial material. If the supplier changes the carrier, process, scale or dosage form, reassess the relevant parameters and acceptance criteria." }
  ],
  "how-to-evaluate-functional-ingredient-suppliers": [
    { heading: "Use a risk-based qualification plan", body: "The depth of review should reflect the ingredient, intended use, purchasing volume and buyer quality system. A desk review may be an initial step, while higher-risk or regulated projects may require a formal questionnaire, audit or independent verification." },
    { heading: "Distinguish document review from an audit", body: "Reviewing files can identify inconsistencies and missing information, but it cannot independently confirm site conditions or operational practice. State what was reviewed, what remains unverified and whether an on-site or third-party audit is required." },
    { heading: "Compare commercial proposals only after technical alignment", body: "Compare the same product identity, specification revision, packaging, MOQ, delivery basis, payment terms and quotation validity. Record unresolved issues as conditions rather than treating an incomplete offer as fully comparable." }
  ],
  "ingredient-sample-testing-preparation": [
    { heading: "Agree on acceptance and decision rules", body: "Before testing, decide who reviews the results, how deviations are handled and whether a retest or independent laboratory is allowed. If the sample fails, document whether the cause may be sample handling, method differences or a material issue before changing the specification." },
    { heading: "Decide the next project milestone", body: "After evaluation, choose a defined next step: approve the sample for further development, request another batch, revise the specification, conduct third-party testing or stop the project. Keep the decision and its technical basis in the project record." }
  ],
  "how-to-define-ingredient-purchasing-specification": [
    { heading: "Control specification revisions", body: "Use a revision number, issue date and approval owner. Make sure suppliers quote against the same revision and that sample results and batch COAs are reviewed against the approved version. Record deviations rather than silently changing limits during a project." }
  ],
  "ingredient-moq-packaging-lead-time": [
    { heading: "Compare total delivered conditions", body: "The lowest unit price may not represent the lowest project cost if packaging, freight, storage, testing, customs handling or minimum order constraints differ. Compare the complete delivery basis and identify which costs are included or excluded." }
  ],
  "how-to-run-custom-ingredient-sourcing": [
    { heading: "Set project gates and decision owners", body: "Define who approves ingredient identity, specification, documents, samples and commercial terms. Use clear milestones—brief accepted, source screened, sample reviewed, quotation approved and order confirmed—so no stage is treated as complete before its evidence is available." },
    { heading: "Keep an open-issue register", body: "Track missing documents, unconfirmed parameters, market questions, sample differences and commercial assumptions. Assign an owner and next action to each item. This reduces the risk of an unresolved point being mistaken for an agreed condition." }
  ]
};
export const guideEnFaqs = [
  { q: "Does this guide confirm that a particular ingredient is available?", a: "No. The guide explains purchasing questions. Availability and supply feasibility must be checked with the relevant supplier for the specific product, specification, volume and timing." },
  { q: "Can website descriptions replace supplier documents?", a: "No. Review current specifications, batch-specific records and other applicable documents issued by the relevant supplier." },
  { q: "Are MOQ, price and lead time fixed?", a: "No. These are project-specific commercial conditions and require current supplier confirmation in a formal quotation or contract." },
  { q: "Does this guide provide regulatory approval or advice?", a: "No. The buyer should confirm ingredient status, permitted use, labeling and finished-product requirements in the destination market with qualified regulatory support." }
];
