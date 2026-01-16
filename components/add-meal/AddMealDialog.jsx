import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import { X } from 'lucide-react-native';
import { styles } from '../../app-styles.js';
import Button from '../../common/Button.jsx';
import { useState } from 'react';

export default function AddMealDialog({ onClose, onCreate }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const addPressHandler = () => {
    // construct new meal object
    const newMeal = {
      name,
      calories: Number(calories),
      protein: Number(protein),
      carbs: Number(carbs),
      fat: Number(fat),
    };
    // call onCreate with new meal => submit to parent
    onCreate(newMeal);
    // close the dialog
    onClose();
    // clear keyboard
    Keyboard.dismiss();
  };
  return (
    <Modal
      transparent
      animationType='slide'
      onRequestClose={onClose}
    >
      <View style={styles.AddMealDialog.overlay}>
        <View style={styles.AddMealDialog.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}
          >
            <Text>Add Meal </Text>
            <TouchableOpacity
              hitSlop={10}
              onPress={onClose}
            >
              <X />
            </TouchableOpacity>
          </View>

          <View style={styles.AddMealDialog.inputSection}>
            <Text style={styles.AddMealDialog.inputLabel}>Food Name</Text>
            <TextInput
              placeholder='e.g. Pizza slice'
              style={styles.AddMealDialog.textInput}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.AddMealDialog.inputSection}>
            <Text style={styles.AddMealDialog.inputLabel}>Calories</Text>
            <TextInput
              placeholder='0'
              style={styles.AddMealDialog.textInput}
              inputMode='numeric'
              value={calories}
              onChangeText={setCalories}
            />
          </View>

          {/* Carbs, Fat, Proteins Input */}
          <View style={styles.AddMealDialog.ingredientSection}>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Protein (g)</Text>
              <TextInput
                placeholder='0'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
                value={protein}
                onChangeText={setProtein}
              />
            </View>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Carbs (g)</Text>
              <TextInput
                placeholder='0'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
                value={carbs}
                onChangeText={setCarbs}
              />
            </View>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Fat (g)</Text>
              <TextInput
                placeholder='0'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
                value={fat}
                onChangeText={setFat}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              padding: 20,
            }}
          >
            <Button
              title='Cancel'
              onPress={onClose}
              type='secondary'
            />
            <Button
              title='Add'
              onPress={addPressHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
