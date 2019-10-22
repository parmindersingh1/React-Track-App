import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "./../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />

      <NavLink
        routeName="Signup"
        text="Dont have an account? Sign up instead"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: null
  };
};

// OR

// SignInScreen.navigationOptions = {
//     header: null
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SignInScreen;
