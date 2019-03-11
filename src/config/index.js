export default {
    icons: {
        menuIcon: require('./../icon/menu.png'),
        reservationIcon: require('./../icon/calendar-with-spring-binder-and-date-blocks.png'),
        circleIcon: require('./../icon/circular-shape-silhouette.png'),
        routeIcon: require('./../icon/route.png'),
        backArrowIcon: require('./../icon/chevron-pointing-to-the-left.png'),
        validateIcon: require('./../icon/checked-symbol.png'),
        LockIcon: require('./../icon/padlock-unlock.png'),
        emailIcon: require('./../icon/envelope-of-white-paper.png'),
        eyeOpenIcon: require('./../icon/eye-open.png'),
        eyeCloseIcon: require('./../icon/eye-with-a-diagonal-line-interface-symbol-for-invisibility.png'),
        mapIcon: require('./../icon/compass-circular-variant.png'),
        map2Icon: require('./../icon/map-marker.png'),
        logOutIcon: require('./../icon/sign-out-option.png'),
        settingsIcon: require('./../icon/cog-wheel-silhouette.png'),
        homeIcon: require('./../icon/home.png'),
        positionIcon: require('./../icon/cursor.png'),
        searchIcon: require('./../icon/magnifying-glass.png'),
        hearthIcon: require('./../icon/heart-shape-silhouette.png'),
    },
    loginDesign: {
        backgroundAuth: require('./../image/animatedbackground.gif'),
        backgroundInit: {
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconsLogin: {
            tintColor: 'rgba(255,255,255,0.7)',
            width: 22,
            height: 22,
            position: 'absolute',
            top: 11.6,
            left: 16,
        },
        logoContainerInit: {
            alignItems: 'center'
        },
        logoInit: {
            width: 120,
            height: 120,
            tintColor: 'rgb(255,255,255)',
            opacity: 0.8
        },
        titleTextInit: {
            color: 'rgb(255,255,255)',
            fontSize: 20,
            fontWeight: '500',
            marginTop: 30,
            opacity: 0.9,
            marginBottom: 35,
        },
        btnBackBox: {
            width: 45,
            height: 45,
            borderRadius: 25,
            top: 160,
            left: 36,
            position: 'absolute',
            backgroundColor: 'rgba(189,130,140,0.9)',
        },
        //'#19342F'
        authButtonsColor: 'rgba(189,130,140,0.9)',
    },
    styles: {
        grandFond: {
            backgroundColor: 'rgb(255,255,255)',
            width: '100%',
            height: '100%'
        },
    },
    colors: {
        mainColor: 'rgb(73,194,103)',
        secondaryColor: 'rgb(255,255,255)',
        borderColor: "rgb(73,73,73)",
        red: 'rgb(255,96,96)',
        yelow: 'rgb(255,226,98)',
        green: 'rgb(72,152,64)',
        rose: 'rgb(251,33,101)',
        orange: 'rgb(250,164,67)',
        roseOpacityON: 'rgba(251,33,101,0.8)',
        orangeOpacityON: 'rgba(250,164,67,0.8)',
    },
    userDetails: {
        uid: 1,
    }
}
