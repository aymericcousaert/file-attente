import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;

const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 }
});

const Scaler = posed.View({
    active: { scale: 1.4 },
    inactive: { scale: 1 }
});

const S = StyleSheet.create({
    container: { flexDirection: "row", height: 52, elevation: 2, marginBottom: 25, marginTop: 2, borderRadius: 15 },
    tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
    spotLight: {
        width: tabWidth / 4,
        height: "20%",
        backgroundColor: "rgba(87,182,238,0.9)",
        borderRadius: 80,
        marginLeft: tabWidth / 4 * 1.5,
        marginTop: 43,
    }
});

const TabBar = props => {
    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={S.container}>

            <View style={StyleSheet.absoluteFillObject}>
                <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`} />
            </View>

            {routes.map((route, routeIndex) => {
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                return (
                    <TouchableOpacity
                        key={routeIndex}
                        style={S.tabButton}
                        onPress={() => {
                            onTabPress({ route });
                        }}
                        onLongPress={() => {
                            onTabLongPress({ route });
                        }}
                        accessibilityLabel={getAccessibilityLabel({ route })}
                    >
                        <Scaler style={S.scaler} pose={isRouteActive ? "active" : "inactive"}>
                            {renderIcon({ route, focused: isRouteActive, tintColor })}
                        </Scaler>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;