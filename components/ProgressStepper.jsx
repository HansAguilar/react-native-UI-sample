import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';


const ProgressStepper = ({ currentStep }) => {
    return (
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <View style={[styles.step, { backgroundColor: currentStep === 1 ? COLORS.primary : COLORS.gray }]} />
                <View style={[styles.step, { backgroundColor: currentStep === 2 ? COLORS.primary : COLORS.gray }]} />
                <View style={[styles.step, { backgroundColor: currentStep === 3 ? COLORS.primary : COLORS.gray }]} />
                <View style={[styles.step, { backgroundColor: currentStep === 4 ? COLORS.primary : COLORS.gray }]} />
                <View style={[styles.step, { backgroundColor: currentStep === 5 ? COLORS.primary : COLORS.gray }]} />
                <View style={[styles.step, { backgroundColor: currentStep === 6 ? COLORS.primary : COLORS.gray }]} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    step: {
        width: 40, height: 5,
    }
});

export default ProgressStepper;
