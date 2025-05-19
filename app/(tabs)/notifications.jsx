"use client"

import { Bell, CheckCircle, CreditCard, ShoppingBag, Tag, Truck } from "lucide-react-native"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order",
      title: "Order Confirmed",
      message: "Your order #12345 has been confirmed and is being processed.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "promotion",
      title: "Flash Sale!",
      message: "Don't miss out on our 24-hour flash sale with up to 50% off on selected items.",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "shipping",
      title: "Order Shipped",
      message: "Your order #12340 has been shipped and is on its way to you.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      type: "payment",
      title: "Payment Successful",
      message: "Your payment of $159.99 for order #12340 was successful.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 5,
      type: "order",
      title: "Order Delivered",
      message: "Your order #12335 has been delivered. Enjoy your purchase!",
      time: "3 days ago",
      read: true,
    },
  ])

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getIconForType = (type) => {
    switch (type) {
      case "order":
        return <ShoppingBag size={24} color="#1890ff" />
      case "promotion":
        return <Tag size={24} color="#ff4d4f" />
      case "shipping":
        return <Truck size={24} color="#52c41a" />
      case "payment":
        return <CreditCard size={24} color="#faad14" />
      default:
        return <Bell size={24} color="#1890ff" />
    }
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        {unreadCount > 0 && (
          <TouchableOpacity onPress={markAllAsRead} style={styles.markAllButton}>
            <Text style={styles.markAllButtonText}>Mark all as read</Text>
          </TouchableOpacity>
        )}
      </View>

      {notifications.length === 0 ? (
        <View style={styles.emptyState}>
          <Bell size={64} color="#d9d9d9" />
          <Text style={styles.emptyStateText}>No notifications yet</Text>
          <Text style={styles.emptyStateSubtext}>We'll notify you when something arrives!</Text>
        </View>
      ) : (
        <ScrollView style={styles.notificationsList}>
          {notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[styles.notificationItem, notification.read ? styles.readNotification : styles.unreadNotification]}
              onPress={() => markAsRead(notification.id)}
            >
              <View style={styles.notificationIcon}>{getIconForType(notification.type)}</View>
              <View style={styles.notificationContent}>
                <View style={styles.notificationHeader}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <View style={styles.notificationActions}>
                  {!notification.read && (
                    <TouchableOpacity style={styles.actionButton} onPress={() => markAsRead(notification.id)}>
                      <CheckCircle size={16} color="#52c41a" />
                      <Text style={[styles.actionButtonText, { color: "#52c41a" }]}>Mark as read</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity style={styles.actionButton} onPress={() => deleteNotification(notification.id)}>
                    <Text style={[styles.actionButtonText, { color: "#ff4d4f" }]}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  markAllButton: {
    padding: 8,
  },
  markAllButtonText: {
    color: "#1890ff",
    fontWeight: "500",
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  unreadNotification: {
    backgroundColor: "#e6f7ff",
  },
  readNotification: {
    backgroundColor: "#fff",
  },
  notificationIcon: {
    marginRight: 16,
    justifyContent: "center",
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  notificationActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    padding: 4,
  },
  actionButtonText: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
})
