import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox } from 'react-native-elements';


const StartUp = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upper}>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/favicon.png')} style={styles.logo} />
                </View>
            </View>

            <View style={styles.lower}>
                <View style={{ width: '90%', padding: 20, gap: 20 }}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#0A4D68', textAlign: 'center' }}>Sign in to your account </Text>
                    </View>

                    <View style={styles.form}>
                        <TextInput placeholder='Username or Email' style={styles.input} />
                        <TextInput placeholder='Password' style={styles.input} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                checked={rememberMe}
                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, padding: 0, marginLeft: 0, marginBottom: 4 }}
                                textStyle={{ color: '#CFD2CF' }}
                                size={16}
                                onPress={() => setRememberMe(!rememberMe)}
                            />
                            <Text style={{ color: '#9BA4B5', fontSize: 13 }}>Remember Me</Text>
                        </View>

                        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#00FFCA', fontSize: 13 }}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff', textAlign: 'center', }}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                        <Text style={{ color: '#9BA4B5' }}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#00FFCA' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#00FFCA',
    },
    upper: {
        flex: 1,
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
        gap: 20
    },
    lower: {
        flex: 2,
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 50, borderTopRightRadius: 50,
        backgroundColor: '#fff',
        padding: 20,
    },
    imgContainer: {
        height: 120, width: 120,
        backgroundColor: '#2b2b2b', borderRadius: 100,
        alignItems: 'center', justifyContent: 'center',
    },
    form: {
        justifyContent: 'center',
        gap: 12,
    },
    logo: {
        width: 80,
        height: 80,
    },
    btn: {
        backgroundColor: '#00FFCA', borderRadius: 4,
        paddingVertical: 10, marginVertical: 8,
    },
    input: {
        borderColor: 'transparent',
        borderBottomColor: '#00FFCA',
        borderWidth: 2,
        padding: 6,
    },
});


export default StartUp