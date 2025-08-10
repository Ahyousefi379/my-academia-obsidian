[[paper data extraction with LangExtract]]
 
 
 مشخصات دیتاست 

> [!caution]
> برای پروژه فقط MOF هایی مد نظر هستن که حامل PSA هستن، نه اینکه لیگاندشون PSA باشه (exogenous)



# Features 

## V1.0
np: اسم نانوذره
mof	np size (nm) before loading: شعاع نانوذره نهایی قبل از لود دارو
np size (nm) after loading:  شعاع نانوذره نهایی بعد از لود دارو
np structure: ساختار
photosensitizer
average pore volume(nm3): میانگین حجم تخلخل ها
surface area (m2/g): سطح ویژه
total pore volume(cm3/g): حجم تخلخل ها
bjh pore radius (nm): شعاع تخلخل ها
zeta potential (mV) before loading: پتانسیل زتا قبل از لود دارو
zeta potential (mV) after loading: پتانسیل زتا بعد از لود دارو
(loading process)
description

targets (cell viability + ROS generation intensity)




مشخصات منبع


## V2.0

### **Particle Characterization**

- ✅ **`Particle_SystemName`**: string
- ✅ **`System_VariantDescriptor`**: string — short text summarizing how this variant differs from the base system.  
- ✅ **`Particle_Morphology`**: string
- 🟨 **`Particle_DiameterBeforeLoading_nm`** (nm): numeric
- 🟨 **`Particle_DiameterAfterLoading_nm`** (nm): numeric
- 🟨 **`ZetaPotential_BeforeLoading_mV`** (mV): numeric
- 🟨 **`ZetaPotential_AfterLoading_mV`** (mV): numeric
- ✅ **`Particle_SurfaceFunctionalizationAgents`**: string list

###  **MOF Framework Properties**

- ✅ **`MOF_BaseName`**: string
- ✅ **`MOF_MetalNode`**: string
- ✅ **`MOF_OrganicLinker`**: string
- 🔴 **`MOF_Topology`**: string
- 🟨 **`MOF_BET_SurfaceArea_m2_per_g`** (m²/g): numeric
- 🟨 **`MOF_PoreSize_nm`** (nm): numeric, average diameter of pores
- 🟨 **`MOF_AveragePoreVolume_cm3_per_g`** (cm³/g): numeric
- 🟨 **`MOF_BJH_PoreRadius_nm`** (nm): numeric
- ✅ **`MOF_Photosensitizer_SystemType`**: string {intrinsic, extrinsic}

###  **MOF Synthesis Properties and conditions**
- **`MOF_SynthesisMethod`**: string
- 
###  **Photosensitizer (PS) Properties**


- ✅ **`Photosensitizer_ChemicalName`**: string
- ✅ **`Photosensitizer_Locus`**: string {Linker, Encapsulated, Surface-Covalent, Surface-Adsorbed}
- 🟨 **`Photosensitizer_AbsorptionMaxQBand_nm`** (nm): longest-wavelength absorption peak, UV-Vis
- 🔴 **`Photosensitizer_MolarExtinctionCoefficient_Per_M_cm`** (1/M·cm): numeric, Light absorption strength at the Q-band
- ✅ **`Photosensitizer_LoadingCapacity_wt_percent`** (wt%): numeric Weight percentage of loaded PS in extrinsic systems

### **Light Treatment Parameters**

- **`surface area`**
- **`laser type`**
- **`laser FWHM`**
- ✅ **`Treatment_ExcitationWavelength_nm`** (nm): numeric
- 🟨 **`Treatment_PowerDensity_mW_per_cm2`** (mW/cm²): numeric
- 🟨 **`Treatment_IrradiationTime_s`** (s): numeric
- 🟨 **`Treatment_TotalLightDose_J_per_cm2`** (J/cm²): numeric, Power Density × Irradiation time

### **Biological Testing Conditions**


- 🟨 **`Treatment_DosingConcentration_ug_per_mL`**: numeric, µg/mL 
-  ❌ **`Treatment_DosingConcentration_mg_per_kg`**:  mg/kg for in vivo
- 🟨 **`Treatment_CellularUptake_percent`**: numeric
- 🟨 **`Treatment_CellLine`**: string
- ✅ **`Treatment_AssayType`**: string {MTT, ...}
- ❌ **`Treatment_AnimalModel`**: string
- ❌ **`Treatment_AdministrationRoute`**: string {intravenous, intratumoral}

### **Target Variables - Photophysical Response**



- ✅ **`SingletOxygenQuantumYield_DPBF_percent`** (%): numeric, Fraction of absorbed photons that produce ¹O₂
- ✅ **`SingletOxygenQuantumYield_SensoryGreen_SOSG_percent`** (%): numeric, Fraction of absorbed photons that produce ¹O₂
- 🟨 **`ReactiveOxygenSpecies_HydroxylRadical_Concentration`**: string, hydroxyl radical
- 🟨 **`ReactiveOxygenSpecies_SuperoxideAnion_Concentration`**: string, superoxide anion radical
- 🟨 **`ReactiveOxygenSpecies_HydrogenPeroxide_Concentration`**: string, hydrogen peroxide

###  **Target Variables - Biological Efficacy**

- ✅ **`IC50_WithLight_μM`** (μM): numeric, IC50 light, Concentration for 50% cell growth inhibition with light
- ✅ **`IC50_WithoutLight_μM`** (μM): numeric, IC50 dark, Concentration for 50% cell growth inhibition without light (dark toxicity)
- ❌ **`CellViability_AreaUnderCurve`**: numeric
- ❌ **`TumorGrowthInhibition_percent`** (%): numeric; percentage reduction in tumor volume vs. control

### **Metadata**

- ✅ **`System_ID`**: string — unique identifier generated during extraction (e.g., `SYS_001`)
- ✅ **`System_Label`**: string — concise, human-readable name (include metal node, PS, modifications if mentioned)
- ✅ **`System_Description`**: string — short variant synthesis/structure description from paper (50–150 words)

- **`Paper_DATE`**: date
- **`Paper_Title`**: string
- **`Paper_DOI`**: string

## prompt 

### **Particle Characterization**

- **`Particle_SystemName`**: The complete name or designation of the particle system, including any abbreviations used in the paper.
    
- **`Particle_Morphology`**: The shape or structural appearance of the particles (e.g., spherical, rod-shaped, cubic) as reported.
    
- **`Particle_DiameterBeforeLoading_nm`**: The mean particle diameter in nanometers before photosensitizer or drug loading, typically measured by DLS, TEM, or SEM.
    
- **`Particle_DiameterAfterLoading_nm`**: The mean particle diameter in nanometers after loading the photosensitizer or drug.
    
- **`ZetaPotential_BeforeLoading_mV`**: The surface zeta potential in millivolts before loading, indicating surface charge characteristics.
    
- **`ZetaPotential_AfterLoading_mV`**: The surface zeta potential in millivolts after loading, indicating changes in surface charge.
    
- **`Particle_SurfaceFunctionalizationAgents`**: List of chemical agents or molecules used to modify the particle surface (e.g., PEG, folic acid).
    

---

### **MOF Framework Properties**

- **`MOF_BaseName`**: The common or official name of the metal-organic framework used (e.g., UiO-66, MIL-101).
    
- **`MOF_MetalNode`**: The metal ion or cluster serving as the coordination node in the MOF structure (e.g., Zr⁴⁺, Fe³⁺).
    
- **`MOF_OrganicLinker`**: The organic ligand connecting metal nodes (e.g., terephthalic acid, porphyrin-based linkers).
    
- **`MOF_Topology`**: The crystallographic network type or connectivity pattern of the MOF (e.g., fcu, pcu).
    
- **`MOF_BET_SurfaceArea_m2_per_g`**: The Brunauer–Emmett–Teller surface area in m²/g as reported.
    
- **`MOF_PoreSize_nm`**: Average pore diameter in nanometers from gas adsorption measurements.
    
- **`MOF_AveragePoreVolume_cm3_per_g`**: Total pore volume per gram of material in cm³/g.
    
- **`MOF_BJH_PoreRadius_nm`**: Pore radius in nanometers calculated by the Barrett–Joyner–Halenda method.
    
- **`MOF_Photosensitizer_SystemType`**: Classification as intrinsic (photosensitizer is part of the MOF structure) or extrinsic (loaded or attached).
    

---

### **Photosensitizer (PS) Properties**

- **`Photosensitizer_ChemicalName`**: The full chemical name of the photosensitizer compound.
    
- **`Photosensitizer_Locus`**: Location of the photosensitizer in or on the MOF (Linker, Encapsulated, Surface-Covalent, Surface-Adsorbed).
    
- **`Photosensitizer_AbsorptionMaxQBand_nm`**: The longest-wavelength Q-band absorption peak (nm) from UV-Vis spectroscopy.
    
- **`Photosensitizer_MolarExtinctionCoefficient_Per_M_cm`**: The molar extinction coefficient at the Q-band maximum in units of M⁻¹·cm⁻¹.
    
- **`Photosensitizer_LoadingCapacity_wt_percent`**: Weight percentage of photosensitizer in the total MOF composite for extrinsic systems.
    

---

### **Light Treatment Parameters**

- **`Treatment_ExcitationWavelength_nm`**: The light wavelength used for photoactivation in nanometers.
    
- **`Treatment_PowerDensity_mW_per_cm2`**: Incident light power density in milliwatts per square centimeter.
    
- **`Treatment_IrradiationTime_s`**: Total duration of light exposure in seconds.
    
- **`Treatment_TotalLightDose_J_per_cm2`**: Total light energy delivered (J/cm²), calculated as power density × irradiation time.
    

---

### **Biological Testing Conditions**

- **`Treatment_DosingConcentration_ug_per_mL`**: Concentration of the tested material in micrograms per milliliter for in vitro experiments.
    
- **`Treatment_DosingConcentration_mg_per_kg`**: Dose in milligrams per kilogram body weight for in vivo experiments.
    
- **`Treatment_CellularUptake_percent`**: Percentage of administered particles or photosensitizer taken up by cells.
    
- **`Treatment_CellLine`**: Name of the cell line(s) used for in vitro testing.
    
- **`Treatment_AssayType`**: Specifies whether the biological test was in vitro or in vivo.
    
- **`Treatment_AnimalModel`**: Description of the animal species and model used for in vivo testing.
    
- **`Treatment_AdministrationRoute`**: Route of administration in in vivo studies (e.g., intravenous, intratumoral).
    

---

### **Target Variables – Photophysical Response**

- **`SingletOxygenQuantumYield_DPBF_percent`**: Percentage quantum yield of singlet oxygen generation measured by DPBF assay.
    
- **`SingletOxygenQuantumYield_SOSG_percent`**: Percentage quantum yield of singlet oxygen generation measured by SOSG assay.
    
- **`ReactiveOxygenSpecies_HydroxylRadical_Concentration`**: Reported hydroxyl radical concentration or qualitative result.
    
- **`ReactiveOxygenSpecies_SuperoxideAnion_Concentration`**: Reported superoxide anion concentration or qualitative result.
    
- **`ReactiveOxygenSpecies_HydrogenPeroxide_Concentration`**: Reported hydrogen peroxide concentration or qualitative result.
    

---

### **Target Variables – Biological Efficacy**

- **`IC50_WithLight_μM`**: Half-maximal inhibitory concentration with light activation (photodynamic effect), in μM.
    
- **`IC50_WithoutLight_μM`**: Half-maximal inhibitory concentration without light (dark toxicity), in μM.
    
- **`CellViability_AreaUnderCurve`**: Area under the cell viability curve across tested concentrations or times.
    
- **`TumorGrowthInhibition_percent`**: Percentage reduction in tumor volume compared to untreated control.
    

---

### **Metadata**

- **`Paper_DATE`**: Publication date of the paper.
    
- **`Paper_Title`**: Title of the publication.
    
- **`Paper_DOI`**: Digital Object Identifier of the paper.


---
## challenges 

- [ ] مقادیری که به شکل بازه هستن مثل اندازه نانوذره 
- [ ] مقادیری که به روش های مختلف اندازه گیری میشن مثل اندازه نانوذره 
- [-] نحوه گزارش cellular uptake
- [x] گزارش جداگانه میزان اکسیژن یگانه از SOSG و DPBF
- [ ] استفاده از داده های cell viability 
- [ ] in vivo Vs in vitro
- [ ] Tumor_Growth_inhibition روز های 
- [ ] فیچر های zeta potential و size before after loading برای کل ذره یا برای ماف؟
- [ ] تعداد تارگت ها
- [ ] واحد یکسان گزارش برای بقیه ROS ها
- [ ] دانلود کردن supporting data ها




# Scopus Query

## paper for data search query

``` Query
TITLE-ABS-KEY ( "metal-organic framework*" OR mof* OR ( metal AND organic AND frameworks* ) AND ( "photosensitizing agent*" OR photosensitizers OR "photodynamic therapy" OR pdt ) ) AND ( LIMIT-TO ( DOCTYPE , "ar" ) ) AND ( LIMIT-TO ( LANGUAGE , "English" ) ) AND ( EXCLUDE ( EXACTKEYWORD , "CO 2 Reduction" ) )

```

944 results




## similar works search

``` Query

TITLE-ABS-KEY (("metal-organic framework*" OR MOF* OR (metal AND organic AND frameworks*)) AND ("photosensitizing agent*" OR photosensitizers OR "photodynamic therapy" OR PDT) AND ("machine learning" OR "predictive model*" OR "feature selection" OR "data-driven" OR "ai"OR "artificial intelligence" OR "deep learning" OR DL))


```

8 results



# flowchart V1.0


![[Untitled Diagram.drawio.png]]

[[Untitled Diagram.drawio|xml file]]




 #پروژه_ارشد #Goal
 