---
title: "The Tortilla specification"
img: tortilla.png
---

<img src="https://raw.githubusercontent.com/tacofoundation/tacofoundation.github.io/refs/heads/main/public/tortilla.png" width="22%" style="float: right; margin-left: 10px;">

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1LfyOsRtm4TDUZmFPFOdk3EXV2iWYREng?usp=sharing)


# The Tortilla specification

#### The file format behind [TACO](https://tacofoundation.github.io/).

The terms "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document follow the definitions from [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

The term "data user" refers to any individual or system accessing the data, "data provider" refers to the entity responsible for offering the data.

## Overview

A Tortilla is an open-source, cloud-optimized format for storing large collections of files (referred to as "samples") in a Binary Large Object (BLOB). It is quite simple, similar to [safetensor](https://huggingface.co/docs/safetensors/index) and [puffin](https://iceberg.apache.org/puffin-spec/), but designed for seamless compatibility with the Geospatial Data Abstraction Library (GDAL) [Virtual File System](https://gdal.org/en/latest/user/virtual_file_systems.html).

## Goals

- **Sample isolation**  🛡️ -- Each sample is isolated, ensuring that concurrent reads do not interfere with each other. This guarantees consistency and prevents read errors.

- **Speed** ⚡ -- Tortilla optimizes file scans for both remote and local access by centralizing metadata in the **FOOTER**, allowing for partial lookups without scanning the entire file.

- **Easy to understand** 🧠 -- The format is designed with simplicity in mind, making it accessible for developers of all skill levels. Tortilla's architecture prioritizes clear, concise documentation with a lot of examples and intuitive design for smooth integration and usage.

- **Minimal dependencies** 📦 -- Tortilla only needs `Apache Arrow` and `GDAL` libraries, making it easy to set up. These libraries are well-supported in many programming languages, such as C++, C#, Go, Java, JavaScript, Julia, MATLAB, Python, R, Ruby, and Rust.

## Format

This is version `0.5.0` of the Tortilla specification. Future versions **MUST** remain backward compatible with this one. The internal structure of a `tortilla` file looks like this:

<center>
<img src="/specification.png" width="85%">
</center>

<sup>__Figure 01__: This diagram visually represents the internal structure of a *tortilla* file, highlighting how data and metadata are organized within the file format. </sup>

### The Magic Number (MB)

A **2-byte** identifier at the start of each file (**#y** in hex) ensures that the file is recognized as a valid Tortilla format. 


```python
int.from_bytes(b'#y', byteorder='little') # 03-10-11 (don't forget)
```

### The Footer Offset (FO)

An **8-byte** fixed-size section that indicates where the footer starts within the file. The bytes are stored in little-endian.

### The Footer Length (FL)

An **8-byte** fixed-size section that specifies the length of the footer in bytes.


### The Partitions (PA)

An **8-byte** fixed-size field specifies the number of chunks in a Tortilla file. If it is `1`, the file extension **MUST** be `.tortilla`. If it is greater than `1`, the extension **MUST** be `.part.tortilla`, and the chunks **MUST** be numbered in ascending order. For example, a 100 GB `soyuna.tortilla` file split into 5 chunks of 20 GB each would result in:

- `soyuna.0001.part.tortilla`
- `soyuna.0002.part.tortilla`
- `soyuna.0003.part.tortilla`
- `soyuna.0004.part.tortilla`
- `soyuna.0005.part.tortilla`

Every partition **MUST** be independently readable. This means that a data user can access a single partition without needing to download all the other partitions.

### The Free Space (FP)

A **174-byte** fixed-size field indicates the amount of free space available at the end of the static section of the file. This space is reserved for future extensions.

### The Footer (FOOTER)

The `FOOTER` is a binary serialized Parquet file that stores **TABULAR** metadata for each item. Four columns are mandatory:


| Field              | Type   | Required | Details |
|--------------------|--------|----------|---------|
| tortilla:id        | String | Yes      | Unique identifier for each item. |
| tortilla:file_format | String | Yes | The format name **MUST** follow the GDAL naming convention. <br><br> For example: <br> - **GeoTIFF** files use the format name `GTiff`. <br> - **JPEG** files use the format name `JPEG`. <br><br> To get GDAL format names, you can run in the terminal: <br> ```gdalinfo --formats``` Additional Supported Formats: <br> - **`BYTES`**: Used for data formats not supported by GDAL. <br> - **`TORTILLA`**: Used when the file represents a nested Tortilla structure. |
| tortilla:offset    | Long   | Yes      | Byte offset where the item's data begins in the file. |
| tortilla:length     | Long   | Yes      | Number of bytes that the item's data occupies. |
| tortilla:data_split | String | No | The data split type. **MUST** be one of the following: <br> - `train`: Training data. <br> - `test`: Testing data. <br> - `validation`: Validation data.|


To classify a Tortilla file as a `stac-tortilla`, it must include the following fields:

| Field        | Type              | Required | Description |
|--------------|-------------------|----------|---------------------------------------------------------------------------------------------------|
| `stac:crs`        | String             | Yes      | The Coordinate Reference System (CRS), specified using a recognized authority (EPSG, ESRI or SR-ORG). |
| `stac:geotransform` | Array of Floats | Yes      | A 6-element array defining the affine transformation from pixel coordinates to spatial coordinates. The format follows GDAL conventions: `[a, b, c, d, e, f]`, where: <br> - `a`: Top-left x-coordinate of the upper-left pixel. <br> - `b`: Pixel width (x-resolution). <br> - `c`: Row rotation (typically 0 for north-up images). <br> - `d`: Top-left y-coordinate of the upper-left pixel. <br> - `e`: Column rotation (typically 0 for north-up images). <br> - `f`: Negative pixel height (y-resolution, negative for north-up images). This field is essential for georeferencing raster data.  |
| `stac:time_start` | Integer | Yes      | Timestamp in seconds since UNIX epoch, representing the nominal start time of acquisition.    |
| `stac:time_end`   | Integer             | Yes      | Timestamp marking the nominal end of the acquisition or composite period.|
| `stac:centroid` | string | No | This field represents the centroid of the Sample in Well-Known Text (WKT) POINT representation, using the EPSG:4326 coordinate reference system. It is automatically generated by the [taco-toolbox](https://tacofoundation.github.io/taco-toolbox). |


Current approaches to building datasets focus primarily on technical and scientific metrics, often overlooking the human impact. To encourage `Data providers` to consider responsible AI practices, we have adapted the [Croissant RAI specification](https://docs.mlcommons.org/croissant/docs/croissant-rai-spec.html) to include optional fields addressing the economic, social, and environmental impacts of the regions surrounding `Samples`. While these fields are optional, data providers are strongly encouraged to complete as many as possible.


| Field  | Type   | Required | Details |
|--------|--------|----------|---------|
| rai:populationdensity | number | no | Population density of the data collection region, recommended to be measured over a 5 km² area using Facebook Data for Good for high-resolution mapping (see Facebook [Data for Good](https://dataforgood.facebook.com/dfg/tools/high-resolution-population-density-maps#methodology)). | rai:male | number | no | The percentage or number of males, recommended to be measured in a 5 Km2 area using Facebook Data for Good.|
| rai:female | number | no | The percentage of females |
| rai:womenreproducibleage | number | no | The percentage or number of women aged 15–49.|
| rai:children | number | no | The percentage or number of children under 18. |
| rai:youth | number | no | The percentage or number of individuals aged 15–24.
| rai:elderly | number | no | The percentage or number of individuals aged 65 and older. |

### The Data Pile (DATA)

The items are serialized as a single BLOB. Each item is organized based on the FOOTER.


## File Extension

The file extension **MUST** be `.tortilla` for a single Tortilla file. If the file is split into multiple partitions, the naming convention **MUST** follow the pattern `####.part.tortilla`, where `####` is a four-digit number representing the partition index.


## Media Type

The Tortilla format uses the following proposed media type to identify files compliant with this specification: `application/vnd.tortilla+blob`


## FAQ


### Why not use Parquet?

[Parquet](https://parquet.apache.org/) excels at handling structured tabular data but is not well-suited for the unique challenges of large remote sensing imagery. It does not preserve the cloud-optimized capabilities of stored images and forces users to download entire column chunks to access data. For example, embedding a Cloud Optimized GeoTIFF (COG) in a Parquet column renders it to a standard (i.e. non-COG) GeoTIFF file. Moreover, Parquet’s columnar compression is not designed for image binary data, forcing `data providers` to implement workarounds to address the inefficiencies and serialization overhead of encoding images in a tabular format.

In constrast, Tortilla internally use Parquet for its primary purpose: **managing tabular data**. By embedding all metadata in the Parquet FOOTER, Tortilla allows efficient, streamlined access to the entire metadata with a single HTTP Range request. Image data, on the other hand, is stored separately in a Binary Large Object (BLOB) format within the DATA pile (see the Format section). Leveraging GDAL’s Virtual File System (VFS), Tortilla provides an advanced indexing system that ensures all samples retain their cloud-optimized functionality. This design enables seamless, scalable workflows that go beyond what Parquet alone can support.

### Can I save 4-D or 5-D tensor in Tortilla?

Yes, but probably GeoTIFF would not be an ideal choice. You can try Zipped-Zarr or HDF5. You can also explore `nested` Tortilla structures. See the [taco-toolbox](https://tacofoundation.github.io/taco-toolbox) for more information.

### Why am I not getting expected performance in online mode with the tortilla readers?

You're likely making several independent byte-range requests.


```python
# Independent requests are slower due to multiple network calls
for offset, length in ranges:
    headers = {"Range": f"bytes={offset}-{offset+length-1}"}
    response = requests.get(url, headers=headers)
    
    # Process each response
    # ...
```

The ideal approach is to combine all byte ranges into a single request.


```python
# Combine byte ranges into a Range header format
range_header = ",".join([f"bytes={offset}-{offset+length-1}" for offset, length in ranges])

# Send a single request with multiple byte ranges
headers = {"Range": range_header}
response = requests.get(url, headers=headers)
```

While we can provide better ways to abstract this for users, we believe that the online mode should be used only to get glimpses of the data and not for complex operations that could overload the server. For machine learning or other complex tasks, the ideal approach is to download the entire dataset or a specific portion of it (see examples) and perform operations locally.


### What Does the Tortilla Reader Do?

The Tortilla reader, whether in R, Julia, or Python, first loads the **FOOTER** bytes (i.e. parquet file) into memory. It then converts the **FOOTER** into a `DataFrame` object. This `DataFrame` includes the `internal:subfile` column, which stores snippets of GDAL Virtual File Systems for efficient access to each item. The `/vsisubfile/` handler enables access to specific binary chunks, while `/vsicurl/` is used to handle online files.
