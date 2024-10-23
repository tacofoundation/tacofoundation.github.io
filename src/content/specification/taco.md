---
title: "The TACO specification"
img: taco.png
---

<img src="/taco.png" width="20%" style="float: right; margin-left: 10px;">

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/10Iqn9hPXXZBbnih59lV80C_9RT1ztEiG?usp=sharing)


# The TACO specification


#### The file format ahead [Tortilla](https://tacofoundation.github.io/).

The terms "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document follow the definitions from [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

The term "data user" refers to any individual or system accessing the data, "data provider" refers to the entity responsible for offering the data, and "data curator" refers to the entity responsible for transforming raw datasets into the TACO specification.

## Overview

A **TACO** is a specification that defines a common structure for [Tortilla](https://www.google.com/) files. **TACO** builds on the [STAC Collection](https://github.com/radiantearth/stac-spec/blob/master/collection-spec/collection-spec.md), but adds extra fields to support the automatic generation of [Croissants](https://docs.mlcommons.org/croissant/docs/croissant-spec.html), [RAI Croissants](https://docs.mlcommons.org/croissant/docs/croissant-rai-spec.html) (Responsible AI), [DataCite metadata](https://schema.datacite.org/) and [Datacards](https://arxiv.org/abs/2204.01075).

TACO is designed around the [FAIR](https://www.go-fair.org/fair-principles/) principles:

- **Findability**: Data providers are required to include all mandatory fields from STAC Collection, Croissant, Datacite, and Croissant RAI. The [TACO Toolbox](https://www.google.com/) simplifies this process, enabling the automatic conversion of TACO metadata into a STAC Collection (JSON), Croissant, or DataCard (Markdown), or even all three formats simultaneously.

<center>
<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_0b83c7bc8d48409b85a46c2f9035e15a.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1729722654&Signature=H0JhE08uBN%2Fz%2BHslRzrKnz%2Bzyww%3D" width="90%" style="float: center">
</center>

<sup>__Figure 01__: *Data provides enter metadata in a Pydantic DataModel. Subsequently [taco-toolbox]() can produce Markdown, JSON, or JSON-LD files that are compliant with different specifications.*</sup>

- **Accessibility**: TACO organizes datasets as collections of samples (data points) with similar data and metadata stored in Tortilla files. The dataset structure has three levels: (1) Collection, (2) Catalog, and (3) Sample. A `Collection` describes metadata at the dataset level and helps search engines find the data on the web and for data users get a general idea of what the dataset is about. Data providers can save the Collection metadata in one or multiple specifications, as discussed in the Findability section. The `Catalog`, the second level, serves as a directory for samples; we expect that all the datasets have at least one of the following three Catalogs: train, validation, and test. Lastly, a `Sample` represents the fundamental unit of a dataset, encapsulating a single data instance.  We expected that all the samples are provided inside [Tortilla](https://google.com/) files.

<center>
<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_299d73c058065415bcc48354fe2444bf.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1729722694&Signature=G7Gw4JsKI%2F1e3Znl16pRvDk8RIc%3D" width="90%" style="float: center">
</center>

<sup>__Figure 02__: *TACO toolbox adopts a structure similar to STAC, organizing the data into collections, catalogs, and samples.*</sup>

- **Interoperability**: TACO uses Tortilla files, which provide fast partial and parallel reading capabilities. See [Tortilla](https://www.google.com/) specification for more details.

- **Reusability:** Since each Tortilla is a parquet file (i.e., DataFrame), integration between `TACO`s dataset can be achieved through a simple concat operation.

<center>
<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_d5b7cbc28f51e4d87a7a99b596cb9f65.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1729722722&Signature=4r1ZFQbCXMxhIA8XChHvfkND8DM%3D" width="90%" style="float: center">
</center>

<sup>__Figure 03__: This example demonstrates the integration of all methane emission datasets. By adhering to the FAIR principles, **TACO** facilitate the development of `universal` data loader. The blue line illustrates the connection between data users and providers through client libraries.</sup>


## Goals

The primary goals of the TACO specification are:

1. **Standardization**: Establish a common structure and metadata format for EO-ML datasets.

2. **FAIR Compliance**: Ensure all datasets align with the FAIR principles—Findable, Accessible, Interoperable, and Reusable—to improve data usability and facilitate broader data sharing.

3. **Support for Responsible AI**: Incorporate fields that align with Responsible AI principles, ensuring that datasets are not only scientifically sound but also ethically compliant.

4. **User-Friendly Structure**: Organize datasets into a clear hierarchical structure (Collection, Catalog, Sample) to facilitate easy navigation and retrieval of data.

5. **Efficient Data Handling**: Leverage Tortilla files’ capabilities for fast partial reading and parallel processing to enhance data access speeds and efficiency.


## Format

This is version `0.1.0` of the TACO specification. Future versions **MUST** remain backward compatible with this one. The mandatory fields are:

### TACO Collection

A TACO Collection is simply an JSON object in UTF-8 encoding. The TACO Collection Specification defines a set of common fields to describe a group of `Samples` that share properties and metadata. These fields contain information about data structure, the tasks, the providers, the data quality, etc. Some fields can be automatically generated using TACO-toolbox, while others must be manually configured by the data provider. Altough the TACO Collection does not fully comply with the [STAC Collection]() specification, it can be converted to a STAC Collection, Croissant, or DataCite metadata using the TACO-toolbox. See the [TACO-toolbox]() for more information. The mandatory and optional fields that need to be filled by the data provider are:


| Field  | Type   | Required | Details |
|--------|--------|----------|---------|
| id   | string | yes      | A unique identifier for the dataset. |
| taco:version | string | yes | The version of the TACO specification. |
| title | string | yes      | Title of the dataset. Maximum length is 200 characters. |
| description | string | yes | Description of the dataset. Maximum length is 1000 characters. |
| version | string | yes | Version of the dataset. |
| licenses | list of objects | yes | License(s) of the dataset, it is recommended to use SPDX [License identifier](https://spdx.org/licenses/). Various licenses can be used to describe the dataset. |
| extent | Extent Object | yes | Spatial and temporal extents. See [Extent Object](#extent-object) subsection for more details. |
| providers | list of person objects | yes | A list of providers, which participated in the creation of the dataset. See [Provider Object](#provider-object) subsection for more details. |
| keywords | list of strings | no | List of keywords describing the dataset. |
| taco:curators | list of person objects | no | A list of curators, who are responsible for the dataset. |
| taco:task | task object | no | The TACO specification defines a set of explicit tasks. This field refers to the task most relevant to the dataset. See the [Task Object]() subsection for more information. |
| taco:split_strategy | string | no | The split strategy is a string chosen from an explicit list of method names. See [Split Strategy Object](#split-strategy-object) subsection for more details. |
| taco:discuss | HyperLink Object | no | RECOMMENDED. A link to a discussion forum or other resource where users can discuss the dataset. |
| taco:raw | HyperLink Object | no | RECOMMENDED. Provides a link to the raw dataset if it is not originally in the TACO-native format |


Current approaches to building datasets focus primarily on technical and scientific metrics, often overlooking the human impact. To encourage `Data providers` to consider responsible AI practices, we have adapted the [Croissant RAI specification]() to include optional fields addressing the economic, social, and environmental impacts of the regions surrounding `Samples`. While these fields are optional, data providers are strongly encouraged to complete as many as possible.

| Field  | Type   | Required | Details |
|--------|--------|----------|---------|
| rai:dataPreprocessingProtocol | string | no | Explanation of the preprocessing steps necessary to prepare the dataset. |
| rai:dataAnnotationProtocol | string | no | A detailed description of the annotations produced, including the process for creating them, the type of workforce involved, task specifics, and how annotations were distributed. |
| rai:dataAnnotationPlatform | string | no | The platform, tool, or library used to perform human annotations on the dataset. |
| rai:dataAnnotationAnalysis | string | no | Insights into the process of converting raw annotations into final dataset labels, including the handling of uncertainties, annotator disagreements, and demographic analysis of annotators. |
| rai:dataBiases | string | no | Description of any biases present in the dataset, such as selection bias, and their potential impact on model training or outcomes, if applicable. |
| rai:dataLimitations | string | no | Known limitations of the dataset, including potential generalization issues or quality problems that might affect downstream usage. |
| rai:dataUseCases | string | no | Suggested use cases for the dataset, such as training, testing, validation, or production environments, along with usage guidelines. |
| rai:populationdensity | number | no | Population density of the data collection region, recommended to be measured over a 5 km² area using Facebook Data for Good for high-resolution mapping (see Facebook [Data for Good](https://dataforgood.facebook.com/dfg/tools/high-resolution-population-density-maps#methodology)). | rai:male | number | no | The percentage or number of males, recommended to be measured in a 5 Km2 area using Facebook Data for Good.|
| rai:female | number | no | The percentage or number of females, recommended to be measured in a 5 Km2 area using Facebook Data for Good.|
| rai:womenreproducibleage | number | no | The percentage or number of women aged 15–49, recommended to be measured in a 5 Km2 area using Facebook Data for Good.|
| rai:children | number | no | The percentage or number of children under 18, recommended to be measured in a 5 Km2 area using Facebook Data for Good. |
| rai:youth | number | no | The percentage or number of individuals aged 15–24, recommended to be measured in a 5 Km2 area using Facebook Data for Good.
| rai:elderly | number | no | The percentage or number of individuals aged 65 and older, recommended to be measured in a 5 Km2 area using Facebook Data for Good. |


### TACO Catalog

A TACO Catalog is a UTF-8 encoded JSON object that organizes TACO samples into three logical groups: `Train`, `Validation`, and `Test`. It does not support nested properties, meaning a TACO Catalog cannot contain other Catalogs or Collections—it can only storage TACO samples.

| Field  | Type   | Required | Details |
|--------|--------|----------|---------|
| name   | Literal ["train", "test", "validation"] |   yes  | TODO |
|
