"use client"

import { Search } from "lucide-react-native"
import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      id: 1,
      name: "Fashion",
      image: require("../../assets/images/fashion.jpg"),
    },
    {
      id: 2,
      name: "Jewelry",
      image: require("../../assets/images/jwellery.jpg"),
    },
    {
      id: 3,
      name: "Accessories",
      image: require("../../assets/images/car.jpg"),
    },
    {
      id: 4,
      name: "New Arrivals",
      image: require("../../assets/images/fashion3.jpg"),
    },
  ]

  const trendingProducts = [
    {
      id: 1,
      name: "Summer Collection",
      price: 99.99,
      image: require("../../assets/images/fashion4.jpg"),
    },
    {
      id: 2,
      name: "Fashion Set",
      price: 199.99,
      image: require("../../assets/images/fashion8.jpg"),
    },
    {
      id: 3,
      name: "Trendy Style",
      price: 49.99,
      image: require("../../assets/images/fashion9.jpg"),
    },
    {
      id: 4,
      name: "Designer Wear",
      price: 79.99,
      image: require("../../assets/images/fashion10.jpg"),
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <View style={styles.searchContainer}>
          <Search size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Image source={category.image} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Products</Text>
        <View style={styles.productsGrid}>
          {trendingProducts.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <TouchableOpacity style={styles.specialOfferCard}>
          <Image 
            source={require("../../assets/images/sale-banner.jpg")} 
            style={styles.specialOfferImage} 
          />
          <View style={styles.specialOfferContent}>
            <Text style={styles.specialOfferTitle}>Summer Sale</Text>
            <Text style={styles.specialOfferDescription}>Up to 50% off on selected items</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  categoriesContainer: {
    flexDirection: "row",
  },
  categoryCard: {
    marginRight: 12,
    width: 120,
  },
  categoryImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    marginHorizontal: 8,
  },
  productPrice: {
    fontSize: 14,
    color: "#1890ff",
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  specialOfferCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  specialOfferImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  specialOfferContent: {
    padding: 16,
  },
  specialOfferTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  specialOfferDescription: {
    fontSize: 14,
    color: "#666",
  },
})
