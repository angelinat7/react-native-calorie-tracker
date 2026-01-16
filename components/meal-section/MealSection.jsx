import { Plus } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../app-styles.js';
export default function MealSection({ onAddMeal }) {
  return (
    <View style={[styles.section, styles.mealSection]}>
      <Text style={styles.subheading}>Meals</Text>
      <TouchableOpacity
        hitSlop={10}
        onPress={onAddMeal}
      >
        <Plus />
      </TouchableOpacity>
    </View>
  );
}
