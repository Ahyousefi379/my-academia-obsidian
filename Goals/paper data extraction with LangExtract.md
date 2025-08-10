# Step 1: systems and treatments detection

extracting all systems and treatments from the paper

## Pydantic Object:

```python

from typing import List, Optional, Literal
from pydantic import BaseModel
from datetime import date

class SystemIdentification(BaseModel):
    system_id: str  # e.g., SYS_001
    system_label: str  # concise name with main identifiers
    system_description: str  # 50–150 word synthesis/structure description
    paper_title: str
    paper_doi: str
    paper_date: date
    particle_morphology: Optional[str]
    particle_diameter_before_loading_nm: Optional[float]
    mof_base_name: Optional[str]
    mof_metal_node: Optional[str]
    mof_organic_linker: Optional[str]
    photosensitizer_chemical_name: Optional[str]
    photosensitizer_locus: Optional[Literal["Linker", "Encapsulated", "Surface-Covalent", "Surface-Adsorbed"]]

class SystemIdentificationOutput(BaseModel):
    systems: List[SystemIdentification]


```

## langextract prompt

```
Your task is to read the given scientific paper and identify every distinct experimental system described.
Treat all systems equally — do not assume a base or variation relationship.

For each system:
- Assign a unique `system_id` in the format SYS_001, SYS_002, etc.
- Provide `system_label`: a concise, human-readable name with the main distinguishing identifiers.
- Provide `system_description`: 50–150 words summarizing structure, synthesis, and distinguishing features from the paper.
- Include all structural and composition details when available.
- If any field is missing, set it to `null`.

Feature descriptions to guide extraction:

**system_id** – Unique label you create for the system, in sequential format SYS_###.  
**system_label** – Short descriptive name, mentioning main identifiers like MOF name, photosensitizer, morphology.  
**system_description** – A complete but concise textual summary describing synthesis method, composition, and what makes this system distinct.  
**paper_title** – Full title of the paper.  
**paper_doi** – DOI identifier (format: `10.xxxx/...`).  
**paper_date** – Publication date (YYYY-MM-DD).  
**particle_morphology** – Shape description (e.g., sphere, rod, plate).  
**particle_diameter_before_loading_nm** – Particle diameter *before* photosensitizer loading, in nanometers.  
**mof_base_name** – MOF's given name (e.g., UiO-66, MIL-101).  
**mof_metal_node** – Metal node composition (e.g., Zr6, Fe3, Cu2).  
**mof_organic_linker** – Organic linker name or formula (e.g., terephthalic acid).  
**photosensitizer_chemical_name** – Exact chemical name of photosensitizer used.  
**photosensitizer_locus** – Where the photosensitizer is located:  
    - `Linker`: part of the MOF linker  
    - `Encapsulated`: inside pores without chemical bonding  
    - `Surface-Covalent`: bound covalently to surface  
    - `Surface-Adsorbed`: physically adsorbed to surface

Output only valid JSON strictly matching this schema:

{SCHEMA_PLACEHOLDER_FOR_SystemIdentificationOutput}



```

# Step 2: data extraction

data extracting for each system and treatment pair


## pydantic object
```python

from typing import List, Optional, Literal
from pydantic import BaseModel

class ParticleCharacterization(BaseModel):
    diameter_after_loading_nm: Optional[float]
    zeta_potential_before_loading_mV: Optional[float]
    zeta_potential_after_loading_mV: Optional[float]
    surface_functionalization_agents: Optional[List[str]]

class MOFProperties(BaseModel):
    topology: Optional[str]
    bet_surface_area_m2_per_g: Optional[float]
    pore_size_nm: Optional[float]
    average_pore_volume_cm3_per_g: Optional[float]
    bjh_pore_radius_nm: Optional[float]
    photosensitizer_system_type: Optional[Literal["intrinsic", "extrinsic"]]

class PhotosensitizerProperties(BaseModel):
    absorption_max_q_band_nm: Optional[float]
    molar_extinction_coefficient_per_M_cm: Optional[float]
    loading_capacity_wt_percent: Optional[float]

class LightTreatmentDetails(BaseModel):
    excitation_wavelength_nm: Optional[float]
    power_density_mW_per_cm2: Optional[float]
    irradiation_time_s: Optional[float]
    total_light_dose_J_per_cm2: Optional[float]

class BiologicalTestingConditions(BaseModel):
    dosing_concentration_ug_per_mL: Optional[float]
    dosing_concentration_mg_per_kg: Optional[float]
    cellular_uptake_percent: Optional[float]
    cell_line: Optional[str]
    assay_type: Optional[Literal["in vitro", "in vivo"]]
    animal_model: Optional[str]
    administration_route: Optional[Literal["intravenous", "intratumoral"]]

class PhotophysicalResponse(BaseModel):
    singlet_oxygen_qy_dpbf_percent: Optional[float]
    singlet_oxygen_qy_sosg_percent: Optional[float]
    hydroxyl_radical_concentration: Optional[str]
    superoxide_anion_concentration: Optional[str]
    hydrogen_peroxide_concentration: Optional[str]

class BiologicalEfficacy(BaseModel):
    ic50_with_light_uM: Optional[float]
    ic50_without_light_uM: Optional[float]
    cell_viability_auc: Optional[float]
    tumor_growth_inhibition_percent: Optional[float]

class SystemTreatmentDetails(BaseModel):
    paper_title: str
    paper_doi: str
    system_id: str
    particle: ParticleCharacterization
    mof: MOFProperties
    photosensitizer: PhotosensitizerProperties
    light_treatment: LightTreatmentDetails
    bio_testing: BiologicalTestingConditions
    photophysics: PhotophysicalResponse
    bio_efficacy: BiologicalEfficacy

class SystemTreatmentOutput(BaseModel):
    treatments: List[SystemTreatmentDetails]


```

## langextract prompt

```
Your task is to read the given scientific paper and extract all available measured or reported properties for each distinct experimental system.
Each record must be linked to its unique `system_id`.
If multiple treatments, conditions, or measurement sets exist for a system, treat each as a separate record with the same `system_id`.

Feature descriptions to guide extraction:

**paper_title** – Full title of the paper.  
**paper_doi** – DOI identifier.  
**system_id** – Unique system ID matching one previously assigned.

[ParticleCharacterization]  
**diameter_after_loading_nm** – Particle diameter after photosensitizer loading, in nanometers.  
**zeta_potential_before_loading_mV** – Surface zeta potential before loading, in millivolts.  
**zeta_potential_after_loading_mV** – Surface zeta potential after loading, in millivolts.  
**surface_functionalization_agents** – List of chemicals or biomolecules used to functionalize particle surface.

[MOFProperties]  
**topology** – MOF topology type (e.g., fcu, pcu, etc.).  
**bet_surface_area_m2_per_g** – BET surface area in m²/g.  
**pore_size_nm** – Average pore size in nanometers.  
**average_pore_volume_cm3_per_g** – Average pore volume in cm³/g.  
**bjh_pore_radius_nm** – BJH pore radius in nanometers.  
**photosensitizer_system_type** – `intrinsic` (part of MOF structure) or `extrinsic` (loaded afterward).

[PhotosensitizerProperties]  
**absorption_max_q_band_nm** – Maximum Q-band absorption wavelength (nm).  
**molar_extinction_coefficient_per_M_cm** – Molar extinction coefficient in M⁻¹cm⁻¹.  
**loading_capacity_wt_percent** – Photosensitizer content by weight (%).

[LightTreatmentDetails]  
**excitation_wavelength_nm** – Wavelength of light used (nm).  
**power_density_mW_per_cm2** – Light power density (mW/cm²).  
**irradiation_time_s** – Total irradiation time in seconds.  
**total_light_dose_J_per_cm2** – Energy delivered per unit area in J/cm².

[BiologicalTestingConditions]  
**dosing_concentration_ug_per_mL** – Concentration used in in vitro assays (µg/mL).  
**dosing_concentration_mg_per_kg** – Dose used in animal studies (mg/kg).  
**cellular_uptake_percent** – % uptake by target cells.  
**cell_line** – Cell line name used in experiments.  
**assay_type** – `in vitro` or `in vivo`.  
**animal_model** – Species/strain for in vivo tests.  
**administration_route** – Route of administration: intravenous, intratumoral.

[PhotophysicalResponse]  
**singlet_oxygen_qy_dpbf_percent** – Singlet oxygen quantum yield from DPBF assay (%).  
**singlet_oxygen_qy_sosg_percent** – Singlet oxygen quantum yield from SOSG assay (%).  
**hydroxyl_radical_concentration** – Hydroxyl radical level (unit as reported).  
**superoxide_anion_concentration** – Superoxide anion level (unit as reported).  
**hydrogen_peroxide_concentration** – Hydrogen peroxide level (unit as reported).

[BiologicalEfficacy]  
**ic50_with_light_uM** – IC₅₀ with light activation (µM).  
**ic50_without_light_uM** – IC₅₀ without light activation (µM).  
**cell_viability_auc** – Area under the viability curve (% vs concentration).  
**tumor_growth_inhibition_percent** – % tumor growth suppression relative to control.

If any field is missing, set it to `null`.
Output only valid JSON strictly matching this schema:

{SCHEMA_PLACEHOLDER_FOR_SystemTreatmentOutput}


```



# Step 3: extraction re-validation 


## step 1 validation prompt 

```
You are given:
1. The full text of a scientific paper.
2. A JSON file containing identified experimental systems with their features.

Your job is to validate that each extracted system record:
- Is correctly derived from the paper without misinterpretation.
- Contains only information explicitly supported by the paper text (no hallucinations).
- Does not mix details from different systems into one.
- Uses consistent and distinct `system_id`s.
- Has a `system_label` and `system_description` that match the paper's content.
- Accurately reports all structural and composition details present in the paper.

Validation rules:
- If a field in the JSON is not found or supported by the paper text, mark it as "UNSUPPORTED".
- If the value is present but incorrect or mismatched with the paper, mark it as "INCORRECT".
- If all values are consistent with the paper, mark them as "VALID".
- Do not add new information not found in the paper.

Output:
Return a JSON array where each item corresponds to one system record from the input, with:
{
  "system_id": "<ID>",
  "validation_status": "VALID" | "PARTIALLY_VALID" | "INVALID",
  "issues": ["List of issues or empty array if valid"]
}

```

## step 2 validation prompt

```
You are given:
1. The full text of a scientific paper.
2. A JSON file containing extracted treatment and property data for experimental systems.

Your job is to validate that each extracted treatment record:
- Is explicitly supported by the paper text.
- Belongs to the correct `system_id` (no cross-contamination between systems).
- Contains values exactly matching the reported data in the paper (units may be converted, but numbers must match after conversion).
- Does not include hallucinated or speculative values.
- Is internally consistent (e.g., light dose values match wavelength and power density where reported).

Validation rules:
- If a field’s value cannot be found in the paper, mark it as "UNSUPPORTED".
- If the value differs from the paper without clear reason, mark it as "INCORRECT".
- If the value matches the paper exactly or is correctly converted, mark it as "VALID".
- Do not change or infer missing values.

Output:
Return a JSON array where each item corresponds to one treatment record from the input, with:
{
  "system_id": "<ID>",
  "treatment_id": "<ID>",
  "validation_status": "VALID" | "PARTIALLY_VALID" | "INVALID",
  "issues": ["List of issues or empty array if valid"]
}

```

# Step 4: data extraction from figures


extract data from figures manually with OriginPro or WebPlotDigitizer


















#Goal