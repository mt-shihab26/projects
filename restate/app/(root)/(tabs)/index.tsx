import { Link } from "expo-router";
import { View } from "react-native";

const Index = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Link href="/sign-in">Sign In</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/properties/1">Property</Link>
        </View>
    );
};

export default Index;
