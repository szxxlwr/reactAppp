import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
// 对象有两个属性 
import { createStackNavigator, StackNavigationProp, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack"
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import { Platform, StyleSheet } from 'react-native';

// 这里只能定义 Object 或者 undefined 类型，其他类型都是不可以的
export type RootStackParamList = {
    BottomTabs: {
        screen?:string;
    };
    Detail: {
        id: number;
    };
}

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();
/**
 * {
 *  Navigator,
 *  Screen
 * }
 */


// 堆栈式导航器
class Navigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator 
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign:'center',
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        headerStyle:{
                            ...Platform.select({
                                android:{
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth
                                }
                            })
                        }
                    }}>
                    <Stack.Screen 
                        name="BottomTabs" 
                        component={BottomTabs}/>
                    <Stack.Screen 
                        options={{
                            headerTitleAlign:'center',
                            headerTitle:"详情"
                        }} 
                        name="Detail" 
                        component={Detail}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}

export default Navigator;