
 

#پروژه_ارشد


- [x] با چه روشی مقالاتی که احتمالا دیتای مناسب دارن رو پیدا کنم
- [ ] چجوری فیلترشون کنم (keyword های ایندکس ؟)

> [!attention] 
> درصورت زیاد بودن مقالات باید از روش های [[using LLMs for accurate scientific data from literature]] استفاده کنم 



# استفاده از اسکوپوس برای سرچ مقالات


~~سرچ کلی~~

```
TITLE-ABS-KEY(
  (doxorubicin OR dox OR "anthracycline*" OR "adriamycin") AND 
  ("drug loading" OR "loading capacity" OR "drug delivery" OR "drug release" OR "drug encapsulation" OR "controlled release" OR "payload" OR "cargo" OR "adsorption" OR "absorption") AND 
  ("metal-organic framework*" OR mof OR mofs OR "porous material*" OR "nanomaterial*" OR "nanocarrier*") AND 
  (zif OR mil OR copper OR cu OR "zeolitic imidazolate framework*" OR "materials of institut lavoisier" OR "copper-based") AND
  ("porosity" OR "surface area" OR "pore size" OR "BET" OR "langmuir" OR "PXRD" OR "TGA" OR "SEM" OR "TEM" OR "release kinetics" OR "sustained release" OR "burst release" OR "pH-responsive" OR "stimuli-responsive" OR "cancer therapy" OR "targeted delivery")
) AND 
(EXCLUDE(DOCTYPE, "re"))
```

---
همه دارو ها - ماف و نوع ماف جدا

```
TITLE-ABS-KEY ( ( doxorubicin OR dox OR "anthracycline*" OR "adriamycin" OR "carboplatin" ) AND ( "metal-organic framework*" OR mof OR mofs ) AND ( zif OR mil OR copper OR cu OR "zeolitic imidazolate framework*" OR "materials of institut lavoisier" OR "copper-based" OR "copper" OR "cupper-based" OR "cupper" ) ) AND ( EXCLUDE ( DOCTYPE , "re" ) )
```

275 مقاله
![[Pasted image 20240721114634.png]]

---

==ماف ها در حوزه دارو یا سرطان،بدون مشخص کردن دارو==

```
TITLE-ABS-KEY (( "metal-organic framework*" OR mof OR mofs OR zif OR mil OR "zeolitic imidazolate framework*" OR "materials of institut lavoisier" ) AND ( "drug loading" OR "loading capacity" OR "drug delivery" OR "drug release" OR "drug encapsulation" OR "controlled release" ) AND ( chemo* OR tumor OR cancer OR photodynamic OR photothermal OR therapy ) ) AND ( EXCLUDE ( DOCTYPE , "re" ))
```
1652 مقاله

![[Pasted image 20240721202640.png]]

---
 
 ==داروها = dox, anthracycline, adriamycin, carboplatin==
^9bdea8

```
TITLE-ABS-KEY ( ( doxorubicin OR dox OR "anthracycline*" OR "adriamycin" OR "carboplatin" ) AND ( "metal-organic framework*" OR mof OR mofs OR zif OR "MIL" OR "zeolitic imidazolate framework*" OR "materials of institut lavoisier" ) ) AND ( EXCLUDE ( DOCTYPE , "re" ) )
```

685 مقاله
![[Pasted image 20240721115119.png]]


---
==فقط dox - ماف و نوع ماف باهم==

```
TITLE-ABS-KEY ( ( doxorubicin OR dox ) AND ( "metal-organic framework*" OR mof OR mofs OR zif OR "MIL" OR "zeolitic imidazolate framework*" OR "materials of institut lavoisier" ) ) AND ( EXCLUDE ( DOCTYPE , "re" ) )
```
662 مقاله
![[Pasted image 20240721120544.png]]





# نکات مهم مقالات


![[Pasted image 20240719191718.png]]
The efficiency of DOX loading in the final step is directly related to preparation parameters such as Polymer/DOX ratio and TPP concentration, and even to the stirring rate during the procedure
[[Co-delivery of carboplatin and doxorubicin using ZIF-8 coated chitosan-poly(N-isopropyl acrylamide) nanoparticles through a dual pH thermo responsive strategy to breast cancer cells|ref]]

For loading DOX into a MOF, chemical interactions like π-π stacking and hydrogen bonding are particularly important due to the aromatic and polar nature of DOX. Electrostatic interactions can also play a role if the MOF or DOX carries charge.


# مقالات

## لیست مقالات
مربوط به سرچ [[مقالات مناسب برای جمع آوری داده (DOX in MOfs)#^9bdea8| همه نوع دارو، ماف و نوع ماف باهم]]


> [!important] 
> لیست مقالات
> [[mof papers.xlsx|اکسل لیست مقالات]] 

zif
70 تا تو تایتل، 231 تو چکیده


MIL:
45 تا تو تایتل، 149 تا تو چکیده 


CU:
27 تا تو تایتل، 65 تا تو چکیده




## فایل مقالات

> [!info] 
> رنگ هایلایت های تو PDF:
ا<span style="color:#ff7070">قرمز:</span> ابهام در استفاده / سوال
ا<span style="color:#0070c0">آبی</span>: داده ی برداشته شده 

- [x] [[Co-delivery of carboplatin and doxorubicin using ZIF-8 coated chitosan-poly(N-isopropyl acrylamide) nanoparticles through a dual pH thermo responsive strategy to breast cancer cells]]

- [x] [[Fe 3 O 4 -Incorporated Metal-Organic Framework for Chemo Ferroptosis Synergistic Anti-Tumor via the Enhanced Chemodynamic Therapy]]

- [x] [[Metal organic framework coated vesicular nanoaggregates an intelligent ‘vehicle’ for sustained and leakage proof release of doxorubicin]]

- [ ] [[Gold-Aptamer-Modified Metal−Organic Framework Drug Delivery Nanosystems for Combined PhotothermalChemotherapy of Cancer]]

- [ ] 

# سوالات
- [-] کروی فرض کردن حفرات برای محاسبه حجم از شعاع درسته؟
- [x] راهی برای بدست آوردن surface area از روی شعاع/حجم حفرات؟
- [-] در نظر گرفتن اندازه کل نانوپارتیکل بعد از لود به درد میخوره؟
- [-] اهمیت داشتن لودینگ هم زمان بیشتر از یک دارو برای ذکر کردن (مثلا dox و cbp)
- [-] درخواست داده از کسایی که مقالاتو منتشر کردن؟
- [x] پارامتر های مهم فرایند ی لودینگ (==مدت و دور استیرر، دما، حلال، PH==، شست و شو، روش خشک کردن، اهمیت ترکیب محلول دارو {مثلا اینکه همزمان هم پوشش داده شده هم لود شده}، روش لود کردن، ==غلظت دارو== استاندارد = حد اشباع) 
- [x] پتانسیل زتا کدوم بخشا اهمیت داره؟(MOF) 
- [-] مقدار EE برای نمونه cbp 
- [x] مقادیر گزارش نشده برای MOF ها مثل surface area با مقدار مشخص ؟ (باید باشه با BET)
- [-] ازرش افزوده مدل؟ (صرفا تحلیل نتیجه + پیش بینی روی یک دیتاست دوم بدون مقادیر تارگت)
- [x] کدوم معیار لودینگ در نظر گرفته بشه؟


---

دیتاست در:
[[دیتاست drug loading capacity of MOFs]]



#Goal