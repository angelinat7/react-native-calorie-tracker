import { StatusBar } from 'expo-status-bar';
import { Home, Plus } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './app-styles.js';
import AddMealDialog from './components/add-meal/AddMealDialog.jsx';
import MealSection from './components/meal-section/MealSection.jsx';
import { useMemo, useState } from 'react';
export default function App() {
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [meals, setMeals] = useState([]);

  const totalCalories = useMemo(
    () => meals.reduce((total, meal) => total + meal.calories, 0),
    [meals],
  );

  const addMealPressHandler = () => {
    setShowAddMeal(true);
  };
  const onDeleteMealHandler = (id) => {
    setMeals((currentMeals) => currentMeals.filter((meal) => meal.id !== id));
  };
  const createMealHandler = (meal) => {
    setMeals((currentMeals) => [...currentMeals, meal]);
    console.log('Meal created:', meal);
    console.log('Meals: ', meals);
  };

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
        <MealSection
          onAddMeal={addMealPressHandler}
          onDeleteMeal={onDeleteMealHandler}
          meals={meals}
          totalCalories={totalCalories}
        />

        {/* Add Meal Dialog */}
        {showAddMeal && (
          <AddMealDialog
            onClose={() => setShowAddMeal(false)}
            onCreate={createMealHandler}
          />
        )}

        {/* App Bar */}
        <View style={[styles.endSection]}>
          <Home />
          <TouchableOpacity onPress={addMealPressHandler}>
            <Plus />
          </TouchableOpacity>
        </View>

        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
