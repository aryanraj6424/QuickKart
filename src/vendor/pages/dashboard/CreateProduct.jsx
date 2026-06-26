import { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  Upload,
  Image as ImageIcon,
  Package,
  IndianRupee,
  Boxes,
  Settings,
  Search,
  Globe,
  Save,
  CheckCircle,
} from "lucide-react";

export default function CreateProduct() {
  const generateSKU = () => {
    return (
      "SKU-" +
      Math.random().toString(36).substring(2, 6).toUpperCase() +
      "-" +
      Date.now().toString().slice(-4)
    );
  };

  const [product, setProduct] = useState({
    productName: "",
    slug: "",
    sku: generateSKU(),
    barcode: "",

    brand: "",
    category: "",
    subCategory: "",
    unit: "",

    shortDescription: "",
    description: "",

    mrp: "",
    sellingPrice: "",
    purchasePrice: "",
    gst: "",
    tax: "",
    discount: "",

    stock: "",
    lowStock: "",
    minOrder: 1,
    maxOrder: 10,

    metaTitle: "",
    metaDescription: "",

    status: "Draft",
    featured: false,
    visibility: "Public",
    searchKeywords: "",
visibility: "Public",

featured: false,
bestSeller: false,
trending: false,
todaysDeal: false,

published: false,
  });

  const [coverImage, setCoverImage] = useState(null);

  const [galleryImages, setGalleryImages] = useState([]);

  const [variants, setVariants] = useState([]);

  const [attributes, setAttributes] = useState([
    {
      name: "",
      value: "",
    },
  ]);

  useEffect(() => {
    if (product.productName) {
      setProduct((prev) => ({
        ...prev,
        slug: product.productName
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, ""),
      }));
    }
  }, [product.productName]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value,
    });
  };


  // Cover Image Upload
const handleCoverImage = (e) => {
  if (e.target.files[0]) {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  }
};

// Gallery Images Upload
const handleGalleryImages = (e) => {
  const files = Array.from(e.target.files);

  const previews = files.map((file) => ({
    file,
    preview: URL.createObjectURL(file),
  }));

  setGalleryImages((prev) => [...prev, ...previews]);
};

// Remove Gallery Image
const removeGalleryImage = (index) => {
  setGalleryImages(galleryImages.filter((_, i) => i !== index));
};



// ================================
// Variant Functions
// ================================

const addVariant = () => {
  setVariants([
    ...variants,
    {
      name: "",
      value: "",
      mrp: "",
      sellingPrice: "",
      stock: "",
      sku: generateSKU(),
    },
  ]);
};

const removeVariant = (index) => {
  setVariants(variants.filter((_, i) => i !== index));
};

const handleVariantChange = (index, e) => {
  const values = [...variants];
  values[index][e.target.name] = e.target.value;
  setVariants(values);
};

// ================================
// Attribute Functions
// ================================

const addAttribute = () => {
  setAttributes([
    ...attributes,
    {
      name: "",
      value: "",
    },
  ]);
};

const removeAttribute = (index) => {
  const values = [...attributes];
  values.splice(index, 1);
  setAttributes(values);
};

const handleAttributeChange = (index, e) => {
  const values = [...attributes];
  values[index][e.target.name] = e.target.value;
  setAttributes(values);
};

  
  const card =
    "bg-white rounded-xl shadow-sm border border-gray-200 p-6";

  const input =
    "w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="bg-gray-100 min-h-screen p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Create Product
          </h1>

          <p className="text-gray-500 mt-1">
            Add a new product to your inventory
          </p>

        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 px-5 py-3 rounded-lg border bg-white">

            <Save size={18} />

            Save Draft

          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white">

            <CheckCircle size={18} />

            Publish Product

          </button>

        </div>

      </div>

      {/* PRODUCT INFORMATION */}

      <div className={card}>

        <div className="flex items-center gap-2 mb-6">

          <Package size={22} />

          <h2 className="text-xl font-semibold">

            Product Information

          </h2>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>

            <label className="font-medium">

              Product Name

            </label>

            <input
              className={input}
              placeholder="Enter Product Name"
              name="productName"
              value={product.productName}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">

              Slug

            </label>

            <input
              className={input}
              value={product.slug}
              name="slug"
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">

              SKU

            </label>

            <input
              className={input}
              value={product.sku}
              readOnly
            />

          </div>

          <div>

            <label className="font-medium">

              Barcode

            </label>

            <input
              className={input}
              placeholder="Barcode"
              name="barcode"
              value={product.barcode}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">

              Brand

            </label>

            <select
              className={input}
              name="brand"
              value={product.brand}
              onChange={handleChange}
            >

              <option>Select Brand</option>

              <option>Amul</option>

              <option>Coca Cola</option>

              <option>Nestle</option>

              <option>Pepsi</option>

            </select>

          </div>

          <div>

            <label className="font-medium">

              Category

            </label>

            <select
              className={input}
              name="category"
              value={product.category}
              onChange={handleChange}
            >

              <option>Select Category</option>

              <option>Beverages</option>

              <option>Snacks</option>

              <option>Fruits</option>

              <option>Vegetables</option>

            </select>

          </div>

          <div>

            <label className="font-medium">

              Sub Category

            </label>

            <select
              className={input}
              name="subCategory"
              value={product.subCategory}
              onChange={handleChange}
            >

              <option>Select Sub Category</option>

              <option>Cold Drinks</option>

              <option>Juices</option>

              <option>Milk</option>

            </select>

          </div>

          <div>

            <label className="font-medium">

              Unit

            </label>

            <select
              className={input}
              name="unit"
              value={product.unit}
              onChange={handleChange}
            >

              <option>Select Unit</option>

              <option>Piece</option>

              <option>Kg</option>

              <option>Gram</option>

              <option>Liter</option>

              <option>ml</option>

            </select>

          </div>

          <div className="col-span-2">

            <label className="font-medium">

              Short Description

            </label>

            <textarea
              rows={3}
              className={input}
              placeholder="Write Short Description"
              name="shortDescription"
              value={product.shortDescription}
              onChange={handleChange}
            />

          </div>

          <div className="col-span-2">

            <label className="font-medium">

              Full Description

            </label>

            <textarea
              rows={6}
              className={input}
              placeholder="Write Product Description"
              name="description"
              value={product.description}
              onChange={handleChange}
            />

          </div>

        </div>

      </div>


            {/* ======================= */}
      {/* PRICING */}
      {/* ======================= */}

      <div className={`${card} mt-6`}>

        <div className="flex items-center gap-2 mb-6">

          <IndianRupee size={22} />

          <h2 className="text-xl font-semibold">
            Pricing
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>

            <label className="font-medium">
              Purchase Price
            </label>

            <input
              type="number"
              name="purchasePrice"
              className={input}
              placeholder="0.00"
              value={product.purchasePrice}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              MRP
            </label>

            <input
              type="number"
              name="mrp"
              className={input}
              placeholder="0.00"
              value={product.mrp}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              Selling Price
            </label>

            <input
              type="number"
              name="sellingPrice"
              className={input}
              placeholder="0.00"
              value={product.sellingPrice}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              Discount (%)
            </label>

            <input
              type="number"
              name="discount"
              className={input}
              placeholder="10"
              value={product.discount}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              GST (%)
            </label>

            <input
              type="number"
              name="gst"
              className={input}
              placeholder="18"
              value={product.gst}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              Tax
            </label>

            <input
              type="number"
              name="tax"
              className={input}
              placeholder="0"
              value={product.tax}
              onChange={handleChange}
            />

          </div>

        </div>

      </div>

      {/* ======================= */}
      {/* INVENTORY */}
      {/* ======================= */}

      <div className={`${card} mt-6`}>

        <div className="flex items-center gap-2 mb-6">

          <Boxes size={22} />

          <h2 className="text-xl font-semibold">
            Inventory
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>

            <label className="font-medium">
              Stock Quantity
            </label>

            <input
              type="number"
              className={input}
              name="stock"
              placeholder="100"
              value={product.stock}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              Low Stock Alert
            </label>

            <input
              type="number"
              className={input}
              name="lowStock"
              placeholder="10"
              value={product.lowStock}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              Minimum Order Quantity
            </label>

            <input
              type="number"
              className={input}
              name="minOrder"
              value={product.minOrder}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              Maximum Order Quantity
            </label>

            <input
              type="number"
              className={input}
              name="maxOrder"
              value={product.maxOrder}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="font-medium">
              Stock Status
            </label>

            <select className={input}>

              <option>In Stock</option>

              <option>Out Of Stock</option>

              <option>Pre Order</option>

            </select>

          </div>

          <div className="flex items-end">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                className="w-5 h-5"
              />

              <span className="font-medium">
                Track Inventory
              </span>

            </label>

          </div>

        </div>

      </div>


      {/* ======================= */}
{/* PRODUCT IMAGES */}
{/* ======================= */}

<div className={`${card} mt-6`}>

  <div className="flex items-center gap-2 mb-6">

    <ImageIcon size={22} />

    <h2 className="text-xl font-semibold">
      Product Images
    </h2>

  </div>

  {/* Cover Image */}

  <div>

    <label className="font-medium block mb-3">
      Cover Image
    </label>

    <label className="border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 transition">

      {coverImage ? (

        <img
          src={coverImage}
          alt=""
          className="h-full w-full object-contain rounded-xl"
        />

      ) : (

        <>

          <Upload size={45} className="text-gray-400" />

          <p className="mt-3 text-gray-500">
            Click to Upload Cover Image
          </p>

          <p className="text-sm text-gray-400">
            PNG, JPG, JPEG
          </p>

        </>

      )}

      <input
        hidden
        type="file"
        accept="image/*"
        onChange={handleCoverImage}
      />

    </label>

  </div>

  {/* Gallery */}

  <div className="mt-8">

    <label className="font-medium block mb-3">
      Gallery Images
    </label>

    <label className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center cursor-pointer hover:border-blue-500">

      <Upload size={35} />

      <p className="mt-3">
        Upload Multiple Images
      </p>

      <input
        hidden
        multiple
        type="file"
        accept="image/*"
        onChange={handleGalleryImages}
      />

    </label>

    {galleryImages.length > 0 && (

      <div className="grid grid-cols-6 gap-4 mt-6">

        {galleryImages.map((img, index) => (

          <div
            key={index}
            className="relative group"
          >

            <img
              src={img.preview}
              alt=""
              className="rounded-lg border h-32 w-full object-cover"
            />

            <button
              type="button"
              onClick={() => removeGalleryImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
            >

              <Trash2 size={16} />

            </button>

          </div>

        ))}

      </div>

    )}

  </div>

</div>


{/* ===================================== */}
{/* PRODUCT VARIANTS */}
{/* ===================================== */}

<div className={`${card} mt-6`}>

    <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-2">

            <Settings size={22} />

            <h2 className="text-xl font-semibold">
                Product Variants
            </h2>

        </div>

        <button
            type="button"
            onClick={addVariant}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >

            <Plus size={18} />

            Add Variant

        </button>

    </div>

    {
        variants.length === 0 && (

            <div className="text-center py-12 border rounded-xl text-gray-400">

                No Variant Added

            </div>

        )
    }

    <div className="space-y-5">

        {

            variants.map((variant, index) => (

                <div
                    key={index}
                    className="border rounded-xl p-5 bg-gray-50"
                >

                    <div className="flex justify-between items-center mb-4">

                        <h3 className="font-semibold">

                            Variant #{index + 1}

                        </h3>

                        <button

                            type="button"

                            onClick={() => removeVariant(index)}

                            className="text-red-500"

                        >

                            <Trash2 />

                        </button>

                    </div>

                    <div className="grid grid-cols-3 gap-4">

                        <input

                            className={input}

                            placeholder="Variant Name"

                            name="name"

                            value={variant.name}

                            onChange={(e) =>
                                handleVariantChange(index, e)
                            }

                        />

                        <input

                            className={input}

                            placeholder="Value"

                            name="value"

                            value={variant.value}

                            onChange={(e) =>
                                handleVariantChange(index, e)
                            }

                        />

                        <input

                            className={input}

                            placeholder="MRP"

                            type="number"

                            name="mrp"

                            value={variant.mrp}

                            onChange={(e) =>
                                handleVariantChange(index, e)
                            }

                        />

                        <input

                            className={input}

                            placeholder="Selling Price"

                            type="number"

                            name="sellingPrice"

                            value={variant.sellingPrice}

                            onChange={(e) =>
                                handleVariantChange(index, e)
                            }

                        />

                        <input

                            className={input}

                            placeholder="Stock"

                            type="number"

                            name="stock"

                            value={variant.stock}

                            onChange={(e) =>
                                handleVariantChange(index, e)
                            }

                        />

                        <input

                            className={input}

                            value={variant.sku}

                            readOnly

                        />

                    </div>

                </div>

            ))

        }

    </div>

</div>


  {/* ===================================== */}
{/* PRODUCT ATTRIBUTES */}
{/* ===================================== */}

<div className={`${card} mt-6`}>

    <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-2">

            <Package size={20} />

            <h2 className="text-xl font-semibold">

                Product Attributes

            </h2>

        </div>

        <button

            type="button"

            onClick={addAttribute}

            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"

        >

            <Plus size={18} />

            Add Attribute

        </button>

    </div>

    <div className="space-y-4">

        {

            attributes.map((item, index) => (

                <div
                    key={index}
                    className="grid grid-cols-12 gap-4 items-center"
                >

                    <div className="col-span-5">

                        <input

                            className={input}

                            placeholder="Attribute"

                            name="name"

                            value={item.name}

                            onChange={(e) =>
                                handleAttributeChange(index, e)
                            }

                        />

                    </div>

                    <div className="col-span-5">

                        <input

                            className={input}

                            placeholder="Value"

                            name="value"

                            value={item.value}

                            onChange={(e) =>
                                handleAttributeChange(index, e)
                            }

                        />

                    </div>

                    <div className="col-span-2">

                        <button

                            type="button"

                            onClick={() =>
                                removeAttribute(index)
                            }

                            className="bg-red-500 text-white p-3 rounded-lg w-full"

                        >

                            <Trash2 />

                        </button>

                    </div>

                </div>

            ))

        }

    </div>

</div>


{/* ================================================= */}
{/* SEO SETTINGS */}
{/* ================================================= */}

<div className={`${card} mt-6`}>

    <div className="flex items-center gap-2 mb-6">

        <Search size={22} />

        <h2 className="text-xl font-semibold">

            SEO Settings

        </h2>

    </div>

    <div className="grid grid-cols-2 gap-5">

        <div className="col-span-2">

            <label className="font-medium">

                Meta Title

            </label>

            <input

                className={input}

                name="metaTitle"

                value={product.metaTitle}

                onChange={handleChange}

                placeholder="Meta Title"

            />

        </div>

        <div className="col-span-2">

            <label className="font-medium">

                Meta Description

            </label>

            <textarea

                rows={4}

                className={input}

                name="metaDescription"

                value={product.metaDescription}

                onChange={handleChange}

                placeholder="Meta Description"

            />

        </div>

        <div className="col-span-2">

            <label className="font-medium">

                Search Keywords

            </label>

            <input

                className={input}

                name="searchKeywords"

                value={product.searchKeywords}

                onChange={handleChange}

                placeholder="milk, dairy, amul"

            />

        </div>

    </div>

</div>

{/* ================================================= */}
{/* PRODUCT VISIBILITY */}
{/* ================================================= */}

<div className={`${card} mt-6`}>

    <div className="flex items-center gap-2 mb-6">

        <Globe size={22} />

        <h2 className="text-xl font-semibold">

            Publish Settings

        </h2>

    </div>

    <div className="grid grid-cols-2 gap-5">

        <div>

            <label className="font-medium">

                Status

            </label>

            <select

                className={input}

                name="status"

                value={product.status}

                onChange={handleChange}

            >

                <option>Draft</option>

                <option>Published</option>

                <option>Pending</option>

                <option>Hidden</option>

            </select>

        </div>

        <div>

            <label className="font-medium">

                Visibility

            </label>

            <select

                className={input}

                name="visibility"

                value={product.visibility}

                onChange={handleChange}

            >

                <option>Public</option>

                <option>Private</option>

            </select>

        </div>

    </div>

    <div className="grid grid-cols-2 gap-4 mt-8">

        <label className="flex items-center gap-3">

            <input

                type="checkbox"

                name="featured"

                checked={product.featured}

                onChange={handleChange}

            />

            Featured Product

        </label>

        <label className="flex items-center gap-3">

            <input

                type="checkbox"

                name="bestSeller"

                checked={product.bestSeller}

                onChange={handleChange}

            />

            Best Seller

        </label>

        <label className="flex items-center gap-3">

            <input

                type="checkbox"

                name="trending"

                checked={product.trending}

                onChange={handleChange}

            />

            Trending Product

        </label>

        <label className="flex items-center gap-3">

            <input

                type="checkbox"

                name="todaysDeal"

                checked={product.todaysDeal}

                onChange={handleChange}

            />

            Today's Deal

        </label>

    </div>

</div>


  {/* ========================================= */}
{/* ACTION BUTTONS */}
{/* ========================================= */}

<div className="sticky bottom-0 bg-white border-t mt-10 p-5 flex justify-end gap-4 rounded-xl">

    <button

        className="px-6 py-3 rounded-lg border"

    >

        Cancel

    </button>

    <button

        className="px-6 py-3 rounded-lg bg-gray-800 text-white"

    >

        Save Draft

    </button>

    <button

        className="px-6 py-3 rounded-lg bg-blue-600 text-white"

    >

        Publish Product

    </button>

</div>

</div>
);
}


      
