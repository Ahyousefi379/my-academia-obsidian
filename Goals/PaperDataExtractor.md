 عنوان اصلی:
 نوشتن برنامه برای استخراج داده از فایل مقاله ها
[[langchain for data extraction]]
# روش

- service: Groq (free plan API)\

```
groq = "myapiis'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"
```

- LLM: Llama3 70b (instruct)

محدودیت:
![[Pasted image 20240722175440.png]]


- flowchart: [[Extracting accurate materials data from research papers with conversational language models and prompt engineering]]:

![[Pasted image 20240722174308.png]]

حال اولیه است و شاید بعد از پیاده سازی اولیه لازم باشه یه مقدار تغییرش بدم



> [!لیست کار ها] 
>  - [.]  یادگرفتن کار کردن با API LLM
>  - [x] کار با PDF تو پایتون
> 	 - [x] خوندن متن از روی PDF
>  - [x] نوشتن شمای کلی برنامه
>  - [x] پیاده سازی منطق برنامه بر اساس فلوچارت
>  - [x] نوشتن برنامه برای دانلود لیستی از PDF ها



# data json 
```json
{
    "paper details":{
        "paper title":"",
        "publication year":0
    },
    "data":[
        {
            "nanoparticle properties":{
                "nanoparticle name":"",
                "name abbrevation":"",
                "MOF":"",
                "MOF size(nm) before dox loading":0,
                "MOF size(nm) after dox loading":0,
                "nanoparticle size(nm) before dox loading":0,
                "nanoparticle size(nm) after dox loading":0,
                "nanoparticle structure":"",
                "average pore volume(nm3)":0,
                "surface area per gram(m2/g)":0,
                "total pore volume per gram(cm3/g)":0,
                "bjh pore radius(nm)":0,
                "MOF zeta potential before dox loading (mV)":0,
                "MOF zeta potential after dox loading (mV)":0,
                "nanoparticle zeta potential before dox loading (mV)":0,
                "nanoparticle zeta potential after dox loading (mV)":0,
                "MOF dox encapsulation efficiency (%)":0,
                "MOF dox loading capaciy (%)":0
            },
            "dox loading parameters":{
                "stirring time (seconds)":0,
                "stirring rpm":0,
                "dox solutoin concentration":0
            }
        }
    ],
    "data extraction confidence":"",
    "extra information":""
}
```

 


> [!question] 
>- [ ] به بیشتر از 1 api key نیاز دارم؟ 

#Goal #پروژه_ارشد 