
✅**`Particle_System_name`**: string
✅**`MOF_Base_Name`**: string
✅**`System_Type`**: string {intrinsic, extrinsic, else}
✅**`Metal_Node`**: string
✅**`Organic_Linker`**: string
✅**`Particle_Morphology`**: string
🔴**`MOF_Topology`**: string
✅**`Particle_Diameter_Before_Loading`**(nm): numeric
✅**`Particle_Diameter_After_Loading`**(nm): numeric
✅**`Zeta_Potential_Before_Loading`**(mV): numeric
✅**`Zeta_Potential_After_Loading`**(mV): numeric
🟨**`MOF_BET_Surface_Area`**(m2/g): numeric
🟨**`MOF_Pore_Size`**(nm): numeric, average diameter of pores
🟨**`Average_Pore_Volume`**(nm3): numeric
🟨**`BJH_Pore_Radius`**(nm): numeric
✅**`Surface_Functionalisation_Agent`**: string


✅**`PS_Chemical_Name`**: string
✅**`PS_Locus`**: string {Linker, Encapsulated, Surface-Covalent, Surface-Adsorbed}
🟨**`Absorption_Q_Band_Max`**: (nm): longest-wavelength absorption peak, UV-Vis
🔴**`Molar_Extinction_Coefficient`**(1/M.cm): numeric, Light absorption strength at the Q-band
✅**`Loading_capacity`**(wt%): numeric Weight percentage of loaded PS in extrinsic systems.
🟨**`Cellular_Uptake`**: numeric
🟨**`Dosing_Concentration`**: numeric, The final concentration of the MOF system used in the experiment, µg/mL for in vitro, mg/kg for in vivo

✅**`Excitation_Wavelength`**(nm): numeric
🟨**`Power_Density`**(mW/cm2): numeric
🟨`**Irradiation_time**`: (s): numeric
🟨**`Total_Light_Dose`**(J/cm2): numeric, Power Density × Irradiation time 
🟨**`Cell_Line`**: string
✅**`Assay_Type`**: string {in vitro, in vivo}
🟨**`Animal_Model`**: string
🟨**`Administration_Route`**: string {intravenous, intratumoral}


_**targets**_

✅**`SingletO2_QY_ΦΔ_DPBF`**(%): numeric, Fraction of absorbed photons that produce 1O₂ 
✅**`SingletO2_QY_ΦΔ_SOSG`**(%): numeric, Fraction of absorbed photons that produce 1O₂ 


🟨**`ROS_OH_Concentration`**: string, hydroxyl radical
🟨**`ROS_O2_Concentration`**: string, superoxide anion radical
🟨**`ROS_H2O2_Concentration`**: string, hydrogen peroxide


✅**`IC50_Light`**(uM): numeric, Concentration for 50% cell growth inhibition with light.
✅**`IC50_Dark`**(uM): numeric, Concentration for 50% cell growth inhibition without light (dark toxicity).
✅**`Cell_Viability_AUC`**: numeric
✅**`Tumor_Growth_inhibition`**(%): numeric; percentage reduction in tumor volume vs. control


---
- [ ] مقادیری که به شکل بازه هستن مثل اندازه نانوذره 
- [ ] مقادیری که به روش های مختلف اندازه گیری میشن مثل اندازه نانوذره 
- [ ] نحوه گزارش cellular uptake
- [ ] گزارش جداگانه میزان اکسیژن یگانه از SOSG و DPBF
- [ ] استفاده از داده های cell viability 
- [ ] in vivo Vs in vitro
- [ ] Tumor_Growth_inhibition روز های 
- [ ] تارگت ها