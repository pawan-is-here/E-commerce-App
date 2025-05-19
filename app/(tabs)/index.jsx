import { Search } from "lucide-react-native"
import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const allProducts = [
    {
      id: 1,
      name: "Fashion Collection",
      price: "$99.99",
      image: require("../../assets/images/fashion.jpg"),
      category: "Fashion",
    },
    {
      id: 2,
      name: "Jewelry Set",
      price: "$199.99",
      image: require("../../assets/images/jwellery.jpg"),
      category: "Fashion",
    },
    {
      id: 3,
      name: "Car Accessories",
      price: "$49.99",
      image: require("../../assets/images/car.jpg"),
      category: "Electronics",
    },
    {
      id: 4,
      name: "Summer Collection",
      price: "$79.99",
      image: require("../../assets/images/fashion3.jpg"),
      category: "Fashion",
    },
    {
      id: 5,
      name: "Smart Watch",
      price: "$299.99",
      image: require("../../assets/images/fashion4.jpg"),
      category: "Electronics",
    },
    {
      id: 6,
      name: "Home Decor",
      price: "$149.99",
      image: require("../../assets/images/fashion8.jpg"),
      category: "Home & Living",
    },
  ]

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Sports",
    "Books",
    "Beauty",
  ]

  const filteredProducts = searchQuery
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts.slice(0, 3)

  const handleSearch = (text) => {
    setSearchQuery(text)
    setIsSearching(true)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setIsSearching(false)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ShopApp</Text>
        {isSearching && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.searchBar}>
        <Search size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="#999"
        />
      </View>

      {!isSearching && (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
              {categories.map((category, index) => (
                <TouchableOpacity key={index} style={styles.categoryItem}>
                  <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <View style={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <TouchableOpacity key={product.id} style={styles.productCard}>
                  <Image source={product.image} style={styles.productImage} />
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Special Offers</Text>
            <View style={styles.offerCard}>
              <Image source={require("../../assets/images/sale-banner.jpg")} style={styles.offerImage} />
              <View style={styles.offerContent}>
                <Text style={styles.offerTitle}>Summer Sale</Text>
                <Text style={styles.offerDescription}>Up to 50% off on selected items</Text>
                <TouchableOpacity style={styles.offerButton}>
                  <Text style={styles.offerButtonText}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}

      {isSearching && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {filteredProducts.length > 0
              ? `Found ${filteredProducts.length} products`
              : "No products found"}
          </Text>
          <View style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <TouchableOpacity key={product.id} style={styles.productCard}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <Text style={styles.productCategory}>{product.category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1890ff",
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: "#1890ff",
    fontSize: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginHorizontal: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    color: "#666",
    fontSize: 14,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  productCard: {
    width: "50%",
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#1890ff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: "#666",
  },
  offerCard: {
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  offerImage: {
    width: "100%",
    height: 150,
  },
  offerContent: {
    backgroundColor: "#1890ff",
    padding: 16,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 16,
  },
  offerButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  offerButtonText: {
    color: "#1890ff",
    fontWeight: "bold",
  },
}) 