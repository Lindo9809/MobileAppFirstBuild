import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TextInput, Input, Button, Alert } from 'react-native';

export default function Home() {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = () => {
        if (email === "lindo.mazibuko@investec.com" && password === "abcabc") {
            navigation.reset({
                index: 0,
                routes: [{ name: "homePage" }],
            });
        } else {
            Alert.alert("Error", "Login info are incorrect");
        }
    };

    return (
        <View>
            <Input 
               placeholder="Email" 
               onChangeText={(text) => setEmail(text)} 
               value={email}
            />
            <Input 
               placeholder="Password" 
               onChangeText={(text) => setPassword(text)} 
               value={password}
            />
        </View>
    )
};