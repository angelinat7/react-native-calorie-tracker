import { Plus } from 'lucide-react-native';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { styles } from '../../app-styles.js';
import MealCard from '../meal-card/MealCard.jsx';

export default function MealSection({ onAddMeal, meals }) {
  return (
    <>
      <View style={[styles.section]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.subheading}>Meals</Text>
          <TouchableOpacity
            hitSlop={10}
            onPress={onAddMeal}
          >
            <Plus />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ height: 300, marginTop: 10 }}>
          {meals.map((meal, index) => (
            <MealCard
              key={index}
              meal={meal}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
