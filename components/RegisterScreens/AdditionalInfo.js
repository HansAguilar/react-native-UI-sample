import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressStepper from '../ProgressStepper';
import { COLORS } from '../../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';

const AdditionalInfo = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: '100%', padding: 20, justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, paddingHorizontal: 16, fontWeight: '500', color: COLORS.primary }}>Additional Information</Text>

                <View style={{ flex: 2 }}>
                    <Image source={require('../../assets/secondstep.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                </View>
                <View style={{ paddingHorizontal: 16, gap: 4 }}>
                    <Text style={{ fontSize: 16, color: COLORS.paragraph }}>Let's get to know you better!</Text>
                    <Text style={{ fontSize: 16, color: COLORS.paragraph }}>Please fill out the following details:</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', paddingHorizontal: 16, justifyContent: 'space-evenly' }}>
                    <TextInput placeholder='Address' style={styles.input} placeholderTextColor={COLORS.input} />
                    <TextInput placeholder='Mon Oct 21 2026' style={styles.input} placeholderTextColor={COLORS.input} />
                    {
                        showPicker
                        &&
                        <DateTimePicker
                            mode="date"
                            display='spinner'
                            style={styles.input}
                            value={selectedDate}
                        />
                    }
                    <TextInput placeholder='Email' style={styles.input} placeholderTextColor={COLORS.input} />
                </View>

                <ProgressStepper currentStep={2} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: 16, color: COLORS.white }} onPress={() => navigation.goBack()}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: 16, color: COLORS.white }} onPress={() => navigation.navigate('AdditionalInfo')}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    btn: {
        backgroundColor: COLORS.primary, borderRadius: 4, paddingVertical: 12, paddingHorizontal: 16
    },
    input: {
        borderWidth: 2,
        padding: 12,
        borderRadius: 6,
        backgroundColor: COLORS.secondary,
        borderWidth: 0,
        width: '100%'
    }
})

export default AdditionalInfo;