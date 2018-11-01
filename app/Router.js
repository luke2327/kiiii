import React from 'react';
import { Icon } from 'native-base';
import { TabNavigator } from "react-navigation";

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import ThirdTabScreen from './ThirdTabScreen';

const Router = TabNavigator({
    First: {
        screen: FirstTabScreen,
        navigationOptions: {
            tabBarLabel: '첫번째',
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-alarm-outline' style={{color: tintColor}} />
            )
        }
    },
    Second: {
        screen: SecondTabScreen,
        navigationOptions: {
            tabBarLabel: '두번째',
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-american-football-outline' style={{color: tintColor}} />
            )
        }
    },
    Third: {
        screen: ThirdTabScreen,
        navigationOptions: {
            tabBarLabel: '세번째',
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-bonfire-outline' style={{color: tintColor}} />
            )
        }
    }
}, {
    initialRouteName: "First",  // 처음 보여질 탭
    tabBarPosition: 'bottom',   // 탭 위치
    swipeEnabled: true,         // Swipe 기능
    lazy: true,                 // Default 값 true, 활성화 된 탭만 렌더링 할 것인지 여부.
    tabBarOptions: {
        inactiveTintColor: '#b3b3b3',  // 비활성화 색
        activeTintColor: '#000',       // 활성화 색
        showIcon: true                 // 아이콘 표시 여부
    }
});

export default Router;