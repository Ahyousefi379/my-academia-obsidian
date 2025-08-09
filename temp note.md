
**`MOF_System_name`**: string
**`MOF_Base_Name`**: string
**`System_Type`**: string {intrinsic, extrinsic, else}
**`Metal_Node`**: string
**`Organic_Linker`**: string
**`Particle_Morphology`**: string
**`MOF_Topology`**: string
**`Particle_Diameter_Before_Loading`**(nm): numeric
**`Particle_Diameter_After_Loading`**(nm): numeric
**`Zeta_Potential_Before_Loading`**(mV): numeric
**`Zeta_Potential_Before_Loading`**(mV): numeric
**`MOF_BET_Surface_Area`**(m2/g): numeric
**`MOF_Pore_Size`**(np): numeric, average diameter of pores
**`Average_Pore_Volume`**(nm3): numeric
**`BJH_Pore_Radius`**(nm): numeric
**`Surface_Functionalisation_Agent`**: string


**`PS_Chemical_Name`**: string
**`PS_Locus`**: string {Linker, Encapsulated, Surface-Covalent, Surface-Adsorbed}
**`Absorption_Q_Band_Max`**(nm): Wavelength of the lowest-energy absorption peak used for PDT.
**`Molar_Extinction_Coefficient`**(1/M.cm): numeric, Light absorption strength at the Q-band
**`Loading_capacity`**(wt%): numeric Weight percentage of loaded PS in ==extrinsic== systems.
**`Cellular_Uptake`**: numeric
**`Dosing_Concentration`**: numeric, The final concentration of the MOF system used in the experiment, µg/mL for in vitro, mg/kg for in vivo

**`Excitation_Wavelength`**(nm): numeric
**`Power_Density`**(mW/cm2): numeric
**`Total_Light_Dose`**(J/cm): numeric, Power Density × Time
**`Cell_Line`**: string
**`Assay_Type`**: string {in vitro, in vivo}
**`Animal_Model`**: string
**`Administration_Route`**: string {intravenous, intratumoral}

ROS_1O2: singlet oxygen
ROS_OH: hydroxyl radical
ROS_O2: superoxide anion radical
ROS_H2O2: hydrogen peroxide

Singlet_Oxygen_Quantum_Yield(%): numeric
Fluorescence_Quantum_Yield

IC50_Light(uM): numeric, Concentration for 50% cell growth inhibition with light.
IC50_Dark(um): numeric, Concentration for 50% cell growth inhibition without light (dark toxicity).
Tumor_Growth_inhibition(%): numeric, TGI%; percentage reduction in tumor volume vs. control

