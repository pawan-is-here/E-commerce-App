"use client"

import { Bell, Globe, HelpCircle, Info, Lock, Shield } from "lucide-react-native"
import { useState } from "react"
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native"

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    language: "English",
    privacySettings: {
      locationServices: true,
      dataSharing: false,
      analytics: true,
    },
    security: {
      biometricLogin: true,
      twoFactorAuth: false,
    },
  })

  const toggleSetting = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    })
  }

  const togglePrivacySetting = (key) => {
    setSettings({
      ...settings,
      privacySettings: {
        ...settings.privacySettings,
        [key]: !settings.privacySettings[key],
      },
    })
  }

  const toggleSecuritySetting = (key) => {
    setSettings({
      ...settings,
      security: {
        ...settings.security,
        [key]: !settings.security[key],
      },
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Bell size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Notifications</Text>
          </View>
          <Switch
            value={settings.notifications}
            onValueChange={() => toggleSetting("notifications")}
            trackColor={{ false: "#d9d9d9", true: "#1890ff" }}
          />
        </View>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Globe size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Language</Text>
          </View>
          <View style={styles.settingAction}>
            <Text style={styles.settingValue}>{settings.language}</Text>
            <Text style={styles.settingArrow}>›</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Lock size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Location Services</Text>
          </View>
          <Switch
            value={settings.privacySettings.locationServices}
            onValueChange={() => togglePrivacySetting("locationServices")}
            trackColor={{ false: "#d9d9d9", true: "#1890ff" }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Shield size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Data Sharing</Text>
          </View>
          <Switch
            value={settings.privacySettings.dataSharing}
            onValueChange={() => togglePrivacySetting("dataSharing")}
            trackColor={{ false: "#d9d9d9", true: "#1890ff" }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Info size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Analytics</Text>
          </View>
          <Switch
            value={settings.privacySettings.analytics}
            onValueChange={() => togglePrivacySetting("analytics")}
            trackColor={{ false: "#d9d9d9", true: "#1890ff" }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Lock size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Biometric Login</Text>
          </View>
          <Switch
            value={settings.security.biometricLogin}
            onValueChange={() => toggleSecuritySetting("biometricLogin")}
            trackColor={{ false: "#d9d9d9", true: "#1890ff" }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Shield size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
          </View>
          <Switch
            value={settings.security.twoFactorAuth}
            onValueChange={() => toggleSecuritySetting("twoFactorAuth")}
            trackColor={{ false: "#d9d9d9", true: "#1890ff" }}
          />
        </View>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Lock size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Change Password</Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <HelpCircle size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Help & Support</Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Info size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Terms of Service</Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Shield size={24} color="#1890ff" />
            <Text style={styles.settingTitle}>Privacy Policy</Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>App Version 1.0.0</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  section: {
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#999",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingTitle: {
    fontSize: 16,
    marginLeft: 16,
  },
  settingAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValue: {
    fontSize: 16,
    color: "#999",
    marginRight: 8,
  },
  settingArrow: {
    fontSize: 24,
    color: "#999",
  },
  versionInfo: {
    padding: 16,
  },
  versionText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
})
