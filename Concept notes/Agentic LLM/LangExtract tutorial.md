
Table of Contents

1. [Introduction and Installation](#introduction-and-installation)
2. [Core Concepts](#core-concepts)
3. [Basic Usage](#basic-usage)
4. [Advanced Features](#advanced-features)
5. [Scientific Paper Extraction Examples](#scientific-paper-extraction-examples)
6. [Best Practices](#best-practices)
7. [Error Handling and Validation](#error-handling-and-validation)
8. [Performance Optimization](#performance-optimization)

Introduction and Installation

LangExtract is a Google-developed Python library that leverages Large Language Models (LLMs) to extract structured information from unstructured text documents. It's particularly powerful for scientific paper analysis because it ensures output conformity to predefined JSON schemas and maintains source-grounded accuracy.

Installation

```bash

pip install langextract

# or for development version

pip install git+https://github.com/google/langextract.git

```

Key Dependencies

- Google Generative AI SDK
- Pydantic for schema validation
- JSON Schema for structure definition

Core Concepts

1. Schema-Driven Extraction

LangExtract uses JSON schemas to define the exact structure of data you want to extract:

```python

from langextract import LangExtract

from pydantic import BaseModel

from typing import List, Optional  

class ScientificPaper(BaseModel):

title: str

authors: List[str]

abstract: str

methodology: Optional[str]

results: List[str]

conclusions: str

```

2. Few-Shot Learning

The framework uses few-shot examples to improve extraction accuracy:

```python

# Define few-shot examples

examples = [

{

"input": "Sample paper text...",

"output": {

"title": "Sample Title",

"authors": ["Author 1", "Author 2"],

"abstract": "Sample abstract...",

"methodology": "Sample methodology...",

"results": ["Result 1", "Result 2"],

"conclusions": "Sample conclusions..."

}

}

]

```

3. Controlled Generation

LangExtract ensures outputs conform to your schema through controlled generation techniques.

Basic Usage

Setting Up Your First Extraction

```python

import os

from langextract import LangExtract

from pydantic import BaseModel

from typing import List  

# Set up API key

os.environ['GOOGLE_API_KEY'] = 'your-api-key-here'  

# Define your data model

class ResearchPaper(BaseModel):

title: str

authors: List[str]

publication_year: int

abstract: str

keywords: List[str]  

# Initialize LangExtract

extractor = LangExtract(

model_name="gemini-pro", # or gemini-1.5-pro for better performance

schema=ResearchPaper.model_json_schema()

)  

# Extract data from text

paper_text = """

Title: Advanced Machine Learning Techniques in Materials Science

Authors: Dr. Jane Smith, Prof. John Doe, Dr. Alice Johnson

Published: 2024

Abstract: This paper explores the application of machine learning...

Keywords: machine learning, materials science, neural networks

"""  

result = extractor.extract(paper_text)

print(result)

```

Working with Files

```python

# Extract from PDF or text files

def extract_from_file(file_path):

with open(file_path, 'r', encoding='utf-8') as file:

content = file.read()

return extractor.extract(content)  

# Usage

extracted_data = extract_from_file('research_paper.txt')

```

Advanced Features

1. Custom Instructions

```python

# Define custom extraction instructions

instructions = """

Extract information from scientific papers focusing on:

1. Methodology details and experimental procedures

2. Quantitative results and statistical significance

3. Novel contributions and innovations

4. Limitations and future work suggestions

"""  

extractor = LangExtract(

model_name="gemini-1.5-pro",

schema=ResearchPaper.model_json_schema(),

instructions=instructions

)

```

2. Few-Shot Examples for Better Accuracy

```python

from langextract import FewShotExample  

# Create few-shot examples for your domain

few_shot_examples = [

FewShotExample(

input="""

Title: Novel Polymer Synthesis for Energy Storage

Authors: Dr. Chen Wei, Prof. Maria Garcia

Abstract: We developed a new polymer synthesis method...

Methodology: The synthesis involved three-step polymerization...

Results: The polymer showed 95% efficiency in energy storage...

""",

output={

"title": "Novel Polymer Synthesis for Energy Storage",

"authors": ["Dr. Chen Wei", "Prof. Maria Garcia"],

"methodology": "three-step polymerization process",

"key_findings": ["95% efficiency in energy storage"],

"innovation": "new polymer synthesis method"

}

),

FewShotExample(

input="""

Title: AI-Driven Drug Discovery Platform

Authors: Dr. Sarah Johnson, Dr. Michael Brown

Abstract: This study presents an AI platform for drug discovery...

Methods: We used deep learning models trained on molecular data...

Results: The platform identified 12 promising drug candidates...

""",

output={

"title": "AI-Driven Drug Discovery Platform",

"authors": ["Dr. Sarah Johnson", "Dr. Michael Brown"],

"methodology": "deep learning models on molecular data",

"key_findings": ["identified 12 promising drug candidates"],

"innovation": "AI platform for drug discovery"

}

)

]  

# Use few-shot examples

extractor = LangExtract(

model_name="gemini-1.5-pro",

schema=ResearchPaper.model_json_schema(),

few_shot_examples=few_shot_examples

)

```

3. Complex Nested Schemas

```python

from typing import Dict, Any

from enum import Enum  

class ExperimentType(str, Enum):

COMPUTATIONAL = "computational"

EXPERIMENTAL = "experimental"

THEORETICAL = "theoretical"

MIXED = "mixed"  

class Measurement(BaseModel):

parameter: str

value: float

unit: str

uncertainty: Optional[float] = None  

class Experiment(BaseModel):

type: ExperimentType

description: str

parameters: List[str]

measurements: List[Measurement]  

class AdvancedPaper(BaseModel):

title: str

authors: List[str]

abstract: str

experiments: List[Experiment]

statistical_significance: Optional[float]

reproducibility_score: Optional[int]

citations_count: Optional[int]

methodology_novelty: str

```

4. Batch Processing

```python

class BatchExtractor:

def __init__(self, extractor):

self.extractor = extractor

def extract_multiple(self, texts: List[str]) -> List[Dict[str, Any]]:

results = []

for i, text in enumerate(texts):

try:

result = self.extractor.extract(text)

results.append(result)

print(f"Processed {i+1}/{len(texts)} documents")

except Exception as e:

print(f"Error processing document {i+1}: {e}")

results.append(None)

return results  

# Usage

batch_extractor = BatchExtractor(extractor)

paper_texts = ["paper1_content", "paper2_content", "paper3_content"]

batch_results = batch_extractor.extract_multiple(paper_texts)

```

Scientific Paper Extraction Examples

Example 1: Materials Science Paper

```python

class MaterialsResearch(BaseModel):

material_name: str

composition: str

synthesis_method: str

properties: List[Dict[str, Any]]

applications: List[str]

performance_metrics: Dict[str, float]

novelty_claim: str  

materials_extractor = LangExtract(

model_name="gemini-1.5-pro",

schema=MaterialsResearch.model_json_schema(),

instructions="""

Focus on extracting:

- Exact material composition and synthesis details

- Quantitative properties and performance metrics

- Specific applications and use cases

- Claims of novelty or improvement over existing materials

"""

)  

# Example extraction

materials_paper = """

Title: High-Performance Lithium-Ion Battery Cathode Materials

The novel Li-Ni0.8Co0.1Mn0.1O2 cathode material was synthesized using

co-precipitation method followed by high-temperature calcination at 850°C.

The material exhibited exceptional electrochemical properties with a

specific capacity of 198 mAh/g, energy density of 720 Wh/kg, and

capacity retention of 94% after 1000 cycles...

"""  

result = materials_extractor.extract(materials_paper)

```

Example 2: Engineering Research Paper

```python

class EngineeringStudy(BaseModel):

problem_statement: str

solution_approach: str

design_parameters: List[Dict[str, Any]]

testing_methods: List[str]

performance_results: Dict[str, float]

comparison_baselines: List[str]

limitations: List[str]

future_work: str  

engineering_extractor = LangExtract(

model_name="gemini-1.5-pro",

schema=EngineeringStudy.model_json_schema(),

instructions="""

Extract engineering-specific information:

- Clear problem definition and proposed solution

- Technical specifications and design parameters

- Testing methodologies and validation approaches

- Quantitative performance metrics and comparisons

- Identified limitations and suggested improvements

"""

)

```

Example 3: Multi-Document Dataset Creation

```python

import json

from pathlib import Path  

class DatasetBuilder:

def __init__(self, extractor, output_path: str):

self.extractor = extractor

self.output_path = Path(output_path)

def process_directory(self, directory_path: str):

"""Process all text files in a directory"""

directory = Path(directory_path)

results = []

for file_path in directory.glob("*.txt"):

try:

with open(file_path, 'r', encoding='utf-8') as f:

content = f.read()

extracted_data = self.extractor.extract(content)

extracted_data['source_file'] = str(file_path)

results.append(extracted_data)

print(f"Processed: {file_path.name}")

except Exception as e:

print(f"Error processing {file_path}: {e}")

# Save dataset

with open(self.output_path, 'w', encoding='utf-8') as f:

json.dump(results, f, indent=2, ensure_ascii=False)

return results  

# Usage

dataset_builder = DatasetBuilder(extractor, "scientific_dataset.json")

dataset = dataset_builder.process_directory("./research_papers/")

```

Best Practices

1. Schema Design Tips

```python

# Good: Specific and structured

class GoodSchema(BaseModel):

title: str

authors: List[str] # Specific type

publication_date: Optional[str] # Optional for missing data

methodology_type: str # Categorical data

sample_size: Optional[int] # Numerical data

# Avoid: Too vague or overly complex

class AvoidSchema(BaseModel):

content: str # Too vague

data: Dict[str, Any] # Too flexible

```

2. Instruction Writing

```python

# Effective instructions are:

# - Specific and actionable

# - Include examples of edge cases

# - Specify desired format and units  

good_instructions = """

Extract quantitative results focusing on:

1. Numerical values with units (e.g., "150 MPa", "2.5 μm")

2. Statistical significance (p-values, confidence intervals)

3. Comparison metrics (% improvement, fold increase)

4. Measurement conditions (temperature, pressure, pH)  

For missing information, use null values rather than guessing.

"""

```

3. Error Handling and Validation

```python

from pydantic import ValidationError  

def safe_extract(extractor, text: str) -> Optional[Dict]:

"""Safely extract data with error handling"""

try:

result = extractor.extract(text)

# Additional validation

if not result.get('title'):

print("Warning: No title extracted")

return result

except ValidationError as e:

print(f"Schema validation error: {e}")

return None

except Exception as e:

print(f"Extraction error: {e}")

return None

```

4. Quality Assurance

```python

class QualityChecker:

def __init__(self, required_fields: List[str]):

self.required_fields = required_fields

def check_completeness(self, extracted_data: Dict) -> Dict[str, Any]:

"""Check if all required fields are present"""

missing_fields = []

for field in self.required_fields:

if not extracted_data.get(field):

missing_fields.append(field)

return {

'is_complete': len(missing_fields) == 0,

'missing_fields': missing_fields,

'completeness_score': 1 - (len(missing_fields) / len(self.required_fields))

}

def check_data_types(self, extracted_data: Dict, schema: BaseModel) -> bool:

"""Validate data types match schema"""

try:

schema(**extracted_data)

return True

except ValidationError:

return False  

# Usage

quality_checker = QualityChecker(['title', 'authors', 'abstract'])

quality_report = quality_checker.check_completeness(extracted_data)

```

Error Handling and Validation

Common Error Types and Solutions

```python

import logging

from typing import Union  

class RobustExtractor:

def __init__(self, extractor):

self.extractor = extractor

self.logger = logging.getLogger(__name__)

def extract_with_fallback(self, text: str, max_retries: int = 3) -> Optional[Dict]:

"""Extract with retry mechanism and fallback options"""

for attempt in range(max_retries):

try:

result = self.extractor.extract(text)

# Validate result

if self._validate_result(result):

return result

else:

self.logger.warning(f"Invalid result on attempt {attempt + 1}")

except Exception as e:

self.logger.error(f"Attempt {attempt + 1} failed: {e}")

if attempt == max_retries - 1:

# Last attempt - try with simplified schema

return self._extract_simplified(text)

return None

def _validate_result(self, result: Dict) -> bool:

"""Custom validation logic"""

# Check for minimum required fields

required_fields = ['title']

return all(result.get(field) for field in required_fields)

def _extract_simplified(self, text: str) -> Dict:

"""Fallback extraction with simplified schema"""

# Implementation for simplified extraction

pass

```

Performance Optimization

1. Caching Results

```python

import hashlib

import pickle

from pathlib import Path  

class CachedExtractor:

def __init__(self, extractor, cache_dir: str = "./cache"):

self.extractor = extractor

self.cache_dir = Path(cache_dir)

self.cache_dir.mkdir(exist_ok=True)

def _get_cache_key(self, text: str) -> str:

"""Generate cache key from text hash"""

return hashlib.md5(text.encode()).hexdigest()

def extract_cached(self, text: str) -> Dict:

"""Extract with caching"""

cache_key = self._get_cache_key(text)

cache_file = self.cache_dir / f"{cache_key}.pkl"

# Check cache

if cache_file.exists():

with open(cache_file, 'rb') as f:

return pickle.load(f)

# Extract and cache

result = self.extractor.extract(text)

with open(cache_file, 'wb') as f:

pickle.dump(result, f)

return result

```

2. Parallel Processing

```python

from concurrent.futures import ThreadPoolExecutor, as_completed

from typing import Callable  

def parallel_extract(extractor, texts: List[str], max_workers: int = 4) -> List[Dict]:

"""Process multiple texts in parallel"""

def extract_single(text: str) -> Dict:

try:

return extractor.extract(text)

except Exception as e:

print(f"Error: {e}")

return None

results = [None] * len(texts)

with ThreadPoolExecutor(max_workers=max_workers) as executor:

# Submit all tasks

future_to_index = {

executor.submit(extract_single, text): i

for i, text in enumerate(texts)

}

# Collect results

for future in as_completed(future_to_index):

index = future_to_index[future]

results[index] = future.result()

return results

```

3. Memory Management for Large Documents

```python

def chunk_and_extract(extractor, text: str, chunk_size: int = 5000, overlap: int = 500):

"""Process large documents in chunks"""

chunks = []

start = 0

while start < len(text):

end = min(start + chunk_size, len(text))

chunk = text[start:end]

chunks.append(chunk)

start = end - overlap

# Extract from each chunk

chunk_results = []

for i, chunk in enumerate(chunks):

try:

result = extractor.extract(chunk)

result['chunk_id'] = i

chunk_results.append(result)

except Exception as e:

print(f"Error processing chunk {i}: {e}")

# Merge results (implement based on your needs)

return merge_chunk_results(chunk_results)  

def merge_chunk_results(chunk_results: List[Dict]) -> Dict:

"""Merge results from multiple chunks"""

# Implementation depends on your specific use case

# This is a simplified example

merged = {

'title': chunk_results[0].get('title', '') if chunk_results else '',

'authors': [],

'abstract': '',

'content_chunks': chunk_results

}

# Merge authors from all chunks

all_authors = set()

for result in chunk_results:

authors = result.get('authors', [])

all_authors.update(authors)

merged['authors'] = list(all_authors)

return merged

```

Advanced Use Cases

Custom Model Configuration

```python

from langextract import ModelConfig  

# Configure model parameters

config = ModelConfig(

temperature=0.1, # Lower for more consistent results

max_tokens=2048,

top_p=0.95,

frequency_penalty=0.0,

presence_penalty=0.0

)  

extractor = LangExtract(

model_name="gemini-1.5-pro",

schema=ResearchPaper.model_json_schema(),

model_config=config

)

```

Integration with Data Processing Pipeline

```python

import pandas as pd

from typing import Iterator  

class ScientificDataPipeline:

def __init__(self, extractor):

self.extractor = extractor

def process_papers_to_dataframe(self, paper_texts: List[str]) -> pd.DataFrame:

"""Convert extracted data to pandas DataFrame"""

extracted_data = []

for i, text in enumerate(paper_texts):

try:

result = self.extractor.extract(text)

result['paper_id'] = i

extracted_data.append(result)

except Exception as e:

print(f"Error processing paper {i}: {e}")

return pd.DataFrame(extracted_data)

def export_to_formats(self, df: pd.DataFrame, base_filename: str):

"""Export dataset to multiple formats"""

df.to_csv(f"{base_filename}.csv", index=False)

df.to_json(f"{base_filename}.json", orient='records', indent=2)

df.to_parquet(f"{base_filename}.parquet", index=False)  

# Usage

pipeline = ScientificDataPipeline(extractor)

df = pipeline.process_papers_to_dataframe(paper_texts)

pipeline.export_to_formats(df, "scientific_dataset")

```

This comprehensive guide covers all major aspects of LangExtract for scientific paper data extraction. The framework's strength lies in its schema-driven approach, few-shot learning capabilities, and controlled generation that minimizes hallucinations while ensuring structured output.