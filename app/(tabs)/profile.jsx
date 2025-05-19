"use client"

import { useRouter } from "expo-router"
import { CreditCard, Heart, LogOut, MapPin, Settings, ShoppingBag, X } from "lucide-react-native"
import { useState } from "react"
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Profile() {
  const router = useRouter()
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: require("../../assets/images/icon.png"),
  })
  const [editedUser, setEditedUser] = useState(user)

  const menuItems = [
    {
      id: "orders",
      title: "My Orders",
      icon: <ShoppingBag size={24} color="#1890ff" />,
      screen: "Orders",
    },
    {
      id: "wishlist",
      title: "Wishlist",
      icon: <Heart size={24} color="#ff4d4f" />,
      screen: "Wishlist",
    },
    {
      id: "payment",
      title: "Payment Methods",
      icon: <CreditCard size={24} color="#faad14" />,
      screen: "PaymentMethods",
    },
    {
      id: "addresses",
      title: "Shipping Addresses",
      icon: <MapPin size={24} color="#52c41a" />,
      screen: "Addresses",
    },
    {
      id: "settings",
      title: "Settings",
      icon: <Settings size={24} color="#722ed1" />,
      screen: "Settings",
    },
  ]

  const handleMenuItemPress = (screen) => {
    // Navigation would go here
    console.log(`Navigate to ${screen}`)
  }

  const handleLogout = () => {
    // Logout logic would go here
    console.log("Logging out")
    // Navigate to the initial page
    router.replace("../../signin")
  }

  const handleEditProfile = () => {
    setEditedUser(user)
    setIsEditModalVisible(true)
  }

  const handleSaveProfile = () => {
    setUser(editedUser)
    setIsEditModalVisible(false)
  }

  const handleChangeAvatar = () => {
    // Here you would typically open an image picker
    // For now, we'll just toggle between two images
    setEditedUser({
      ...editedUser,
      avatar: editedUser.avatar === require("../../assets/images/icon.png")
        ? require("../../assets/images/adaptive-icon.png")
        : require("../../assets/images/icon.png"),
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={handleChangeAvatar}>
            <Image source={user.avatar} style={styles.avatar} />
          </TouchableOpacity>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Orders</Text>
        </View>
        <View style={[styles.statItem, styles.statItemBorder]}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Wishlist</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => handleMenuItemPress(item.screen)}>
            <View style={styles.menuItemLeft}>
              {item.icon}
              <Text style={styles.menuItemTitle}>{item.title}</Text>
            </View>
            <Text style={styles.menuItemArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={24} color="#ff4d4f" />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>App Version 1.0.0</Text>
      </View>

      <Modal
        visible={isEditModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Edit Profile</Text>
              <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
                <X size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleChangeAvatar} style={styles.avatarEditContainer}>
              <Image source={editedUser.avatar} style={styles.avatarEdit} />
              <Text style={styles.changeAvatarText}>Change Photo</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                value={editedUser.name}
                onChangeText={(text) => setEditedUser({ ...editedUser, name: text })}
                placeholder="Enter your name"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                value={editedUser.email}
                onChangeText={(text) => setEditedUser({ ...editedUser, email: text })}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  editProfileButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#1890ff",
  },
  editProfileButtonText: {
    color: "#1890ff",
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 16,
    paddingVertical: 16,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statItemBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#f0f0f0",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  menuContainer: {
    backgroundColor: "#fff",
    marginTop: 16,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemTitle: {
    fontSize: 16,
    marginLeft: 16,
  },
  menuItemArrow: {
    fontSize: 24,
    color: "#999",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: 16,
    paddingVertical: 16,
  },
  logoutButtonText: {
    fontSize: 16,
    color: "#ff4d4f",
    fontWeight: "500",
    marginLeft: 8,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#999",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  avatarEditContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatarEdit: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  changeAvatarText: {
    color: "#1890ff",
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#1890ff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
