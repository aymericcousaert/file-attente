import React from "react";
import { Image } from "react-native";

const iconMap = {
    home: require('./../icon/home.png'),
    map: require('./../icon/cursor.png'),
    booking: require('./../icon/calendar-with-spring-binder-and-date-blocks.png'),
    settings: require('./../icon/cog-wheel-silhouette.png'),
};

const Icon = ({ name, color, style, ...props }) => {
    const icon = iconMap[name];

    return <Image source={icon} style={[{ height: 20, width: 20, tintColor: color }, style]} />;
};

export default Icon;