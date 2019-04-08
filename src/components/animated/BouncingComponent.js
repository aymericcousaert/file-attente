import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Animated,
    PanResponder,
    View,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

class BouncingComponent extends Component {
    moveTolerance: 1;
    friction = 1000000;
    duration = 800;
    timer;

    constructor(props) {
        super(props);
        this.state = {
            scale: new Animated.Value(1),
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!

                // gestureState.d{x,y} will be set to zero now

                Animated.timing(
                    this.state.scale,
                    {
                        toValue: this.props.bouncingDistance,
                        friction: this.friction,
                        duration: this.duration,
                    }
                ).start();
            },

            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
                if ((gestureState.dy > (-this.moveTolerance)) ||
                    (gestureState.dy < this.moveTolerance) ||
                    (gestureState.dx > this.moveTolerance) ||
                    (gestureState.dx < (-this.moveTolerance))
                ) { } else {
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }

                    this.timer = setTimeout(() => {
                        Animated.spring(
                            this.state.scale,
                            {
                                toValue: 1,
                                friction: this.friction,
                                duration: this.duration,
                            }
                        ).start();
                    }, 45);
                }
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.handleOnPress}>
                <Animated.View
                    style={[{
                        transform: [
                            {
                                scale: this.state.scale,
                            }
                        ]
                    }]}
                >
                    <View style={this.props.styles} {...this._panResponder.panHandlers}>
                        {this.props.children}
                    </View>
                </Animated.View>
            </TouchableOpacity>

        );
    }
};

export default withNavigation(BouncingComponent);

BouncingComponent.propTypes = {
    styles: PropTypes.object,
    bouncingDistance: PropTypes.number,
    children: PropTypes.object,
    handleOnPress: PropTypes.func,
}