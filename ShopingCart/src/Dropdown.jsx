import { useState } from "react";

export default function Search({ onSearch, onCategoryChange }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if (onSearch) onSearch(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (onCategoryChange) onCategoryChange(e.target.value);
    };

    return (
<div className="search-container">
    <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        aria-label="Search"
        className="search-input"
    />
    <label htmlFor="category">Category:</label>
    <select
        id="category"
        name="category"
        value={category}
        onChange={handleCategoryChange}
        className="category-dropdown"
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

    );
}