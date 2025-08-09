# Step 1: systems and treatments detection

extracting all systems and treatments from the paper

## Pydantic Object:

```python
from typing import List, Optional
from pydantic import BaseModel

class TreatmentOverview(BaseModel):
    treatment_id: str  # unique identifier for linking in step 2
    assay_type: Optional[str]  # in vitro / in vivo
    light_wavelength_nm: Optional[float]
    power_density_mW_per_cm2: Optional[float]
    notes: Optional[str]  # any extra details from text

class SystemOverview(BaseModel):
    system_id: str  # unique identifier for linking in step 2
    particle_system_name: Optional[str]
    mof_base_name: Optional[str]
    photosensitizer_name: Optional[str]
    treatments: List[TreatmentOverview]

class PaperSystemsExtraction(BaseModel):
    paper_doi: Optional[str]
    paper_title: Optional[str]
    paper_date: Optional[str]
    systems: List[SystemOverview]

```

# Step 2: data extraction

data extracting for each system and treatment pair

```python
class ParticleCharacterization(BaseModel):
    morphology: Optional[str]
    diameter_before_loading_nm: Optional[float]
    diameter_after_loading_nm: Optional[float]
    zeta_before_mV: Optional[float]
    zeta_after_mV: Optional[float]
    surface_functionalization_agents: Optional[List[str]]

class MOFProperties(BaseModel):
    metal_node: Optional[str]
    organic_linker: Optional[str]
    topology: Optional[str]
    bet_surface_area_m2_per_g: Optional[float]
    pore_size_nm: Optional[float]
    pore_volume_cm3_per_g: Optional[float]
    bjh_pore_radius_nm: Optional[float]
    photosensitizer_system_type: Optional[str]

class PhotosensitizerProperties(BaseModel):
    locus: Optional[str]
    absorption_max_qband_nm: Optional[float]
    molar_extinction_per_M_cm: Optional[float]
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
    animal_model: Optional[str]
    administration_route: Optional[str]

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
    paper_doi: Optional[str]
    system_id: str
    treatment_id: str
    particle: ParticleCharacterization
    mof: MOFProperties
    photosensitizer: PhotosensitizerProperties
    light_treatment: LightTreatmentDetails
    bio_testing: BiologicalTestingConditions
    photophysics: PhotophysicalResponse
    bio_efficacy: BiologicalEfficacy

```


# Step 3: data extraction from figures





















#Goal