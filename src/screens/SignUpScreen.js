import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "./../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />

      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: null
  };
};

// OR

// SignUpScreen.navigationOptions = {
//     header: null
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SignUpScreen;
