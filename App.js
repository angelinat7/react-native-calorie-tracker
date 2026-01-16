import { StatusBar } from 'expo-status-bar';
import { Home, Plus } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={[styles.endSection, styles.header]}>
          <Text style={styles.heading}>Calorie Tracker</Text>
        </View>
        {/* Overview */}
        <View style={[styles.section]}>
          <Text style={styles.subheading}>Calorie overview</Text>
        </View>
        {/* Meal Section */}
        <View style={[styles.section]}>
          <Text style={styles.subheading}>List of meals</Text>
        </View>
        {/* App Bar */}
        <View style={[styles.endSection]}>
          <Home />
          <Plus />
        </View>

        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const colours = {
  white: '#FFFFFF',
  background: '#DDECEA',
  textPrimary: '#212121',
  textSecondary: '#757575',
  borderColor: '#E0E0E0',
  accent: '#FF5722',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: colours.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    backgroundColor: colours.white,
    boxShadow: '2px 2px 4px rgba(157, 157, 157, 0.2)',
    borderWidth: 1,
    borderColor: colours.borderColor,
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  endSection: {
    width: '100%',
    backgroundColor: colours.white,
    borderWidth: 1,
    borderColor: colours.borderColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colours.textPrimary,
  },
  subheading: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: colours.textSecondary,
  },
});
