import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../app-styles.js';
import { Dot } from 'lucide-react-native';
export default function MealCard({ meal }) {
  return (
    <View style={styles.MealCard.card}>
      <View style={styles.MealCard.title}>
        <Text style={styles.MealCard.mealName}>{meal.name}</Text>
        <Text> {meal.calories} cal</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={styles.MealCard.nutritionInfo}>
          <Text style={styles.MealCard.nutritionInfoText}>
            P: {meal.protein}g
          </Text>
          <Dot style={{ verticalAlign: 'middle' }} />
          <Text style={styles.MealCard.nutritionInfoText}>
            C: {meal.carbs}g
          </Text>
          <Dot style={{ verticalAlign: 'middle' }} />
          <Text style={styles.MealCard.nutritionInfoText}>F: {meal.fat}g</Text>
        </View>
        <TouchableOpacity
          hitSlop={10}
          onPress={() => null}
        >
          <Text
            style={{
              color: 'red',
              fontSize: 10,
              letterSpacing: 1.6,
              fontWeight: '600',
            }}
          >
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
