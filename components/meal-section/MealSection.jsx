import { Plus } from 'lucide-react-native';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from '../../app-styles.js';
import MealCard from '../meal-card/MealCard.jsx';

export default function MealSection({
  onAddMeal,
  meals,
  totalCalories,
  onDeleteMeal,
}) {
  return (
    <>
      <View style={[styles.section]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-s',
          }}
        >
          <View>
            <Text style={styles.subheading}>Meals</Text>
            <Text style={[styles.subheading, { fontSize: 16 }]}>
              {totalCalories} cal
            </Text>
          </View>
          <TouchableOpacity
            hitSlop={10}
            onPress={onAddMeal}
          >
            <Plus />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ maxHeight: 300, marginTop: 10 }}>
          {meals.map((meal, index) => (
            <MealCard
              key={index}
              meal={meal}
              onDeleteMeal={onDeleteMeal}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
