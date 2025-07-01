import { useState } from "react";
import Card from "./Card.jsx";

export default function Products() {
  const products = [
    { id: 1, name: "Hair Dryer", Price: "Rs.2500", Category: "Hair Products" },
    { id: 2, name: "Smartphone", Price: "Rs.35000", Category: "Electronics" },
    { id: 3, name: "Lipstick", Price: "Rs.1500", Category: "Cosmetics" },
    { id: 4, name: "Backpack", Price: "Rs.4000", Category: "Accessories" },
    { id: 5, name: "Sneakers", Price: "Rs.6500", Category: "Footwear" },
    { id: 6, name: "Shampoo", Price: "Rs.800", Category: "Hair Products" },
    { id: 7, name: "Bluetooth Speaker", Price: "Rs.4500", Category: "Electronics" },
    { id: 8, name: "Foundation", Price: "Rs.2000", Category: "Cosmetics" },
    { id: 9, name: "Sunscreen", Price: "Rs.1500", Category: "Skin Care" },
    { id: 10, name: "Sandals", Price: "Rs.3000", Category: "Footwear" },
    { id: 11, name: "Face Wash", Price: "Rs.600", Category: "Skin Care" },
    { id: 12, name: "Hair Oil", Price: "Rs.600", Category: "Hair Products" },
    { id: 13, name: "Smartwatch", Price: "Rs.8000", Category: "Electronics" },
    { id: 14, name: "Mascara", Price: "Rs.1200", Category: "Cosmetics" },
    { id: 15, name: "Sunglasses", Price: "Rs.2500", Category: "Accessories" },
    { id: 16, name: "Moisturizer", Price: "Rs.1200", Category: "Skin Care" },
    { id: 17, name: "Wrist Watch", Price: "Rs.12000", Category: "Accessories" },
    { id: 18, name: "Hair Straightener", Price: "Rs.3500", Category: "Hair Products" },
    { id: 19, name: "Wireless Earbuds", Price: "Rs.5500", Category: "Electronics" },
    { id: 20, name: "Formal Shoes", Price: "Rs.7500", Category: "Footwear" },
    { id: 21, name: "Body Lotion", Price: "Rs.700", Category: "Skin Care" },
    { id: 22, name: "Lip Balm", Price: "Rs.300", Category: "Cosmetics" }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === "All" || product.Category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Hair Products">Hair Products</option>
          <option value="Electronics">Electronics</option>
          <option value="Cosmetics">Cosmetics</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="Skin Care">Skin Care</option>
        </select>
      </div>

      <div className="container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.Price}
              category={product.Category}
            />
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </>
  );
}
