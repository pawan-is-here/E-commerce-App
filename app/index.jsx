import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

const Colors = {
  primary: "#6c63ff",
  black: "#000000",
  gray: "#666666",
};

const WelcomeScreen = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("@/assets/images/ecommerce-splash.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={["transparent", "rgba(255,255,255,0.9)", "rgba(255,255,255,1)"]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text
                style={styles.tittle}
                entering={FadeInRight.delay(300).duration(300).springify()}
              >
                SHOP-X
              </Animated.Text>
              <Animated.Text
                style={styles.discription}
                entering={FadeInRight.delay(500).duration(300)}
              >
                One step solution for all your Needs
              </Animated.Text>

              <View style={styles.socialloginwrapper}>
                {/* Continue with Email */}
                <Animated.View entering={FadeInDown.delay(700).duration(400)}>
                  <Link href="/signup" asChild>
                    <TouchableOpacity style={styles.button}>
                      <Ionicons name="mail-outline" size={20} color={Colors.black} />
                      <Text style={styles.btnTxt}>continue with email</Text>
                    </TouchableOpacity>
                  </Link>
                </Animated.View>

                {/* Continue with Google */}
                <Animated.View entering={FadeInDown.delay(800).duration(400)}>
                  <Link href="/signin" asChild>
                    <TouchableOpacity style={styles.button}>
                      <Image
                        source={require("@/assets/images/google-logo.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Text style={styles.btnTxt}>continue with google</Text>
                    </TouchableOpacity>
                  </Link>
                </Animated.View>

                {/* Continue with Apple */}
                <Animated.View entering={FadeInDown.delay(900).duration(400)}>
                  <Link href="/signin" asChild>
                    <TouchableOpacity style={styles.button}>
                      <Ionicons name="logo-apple" size={20} color={Colors.black} />
                      <Text style={styles.btnTxt}>continue with apple</Text>
                    </TouchableOpacity>
                  </Link>
                </Animated.View>
              </View>

              <Text style={styles.loginTxt}>
                Already have an account?{" "}
                <Link href="/signin" asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTextspan}>SignIn</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  tittle: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "700",
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  discription: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20,
  },
  socialloginwrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
  loginTxt: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTextspan: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
