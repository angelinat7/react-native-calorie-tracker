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
import { useMealForm } from '../../hooks/useMealForm.jsx';

export default function AddMealDialog({ onClose, onCreate }) {
  const { values, error, setField, submit } = useMealForm(onCreate);

  const addPressHandler = () => {
    const success = submit();
    if (!success) return;

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
              value={values.name}
              onChangeText={(text) => setField('name', text)}
            />
          </View>
          <View style={styles.AddMealDialog.inputSection}>
            <Text style={styles.AddMealDialog.inputLabel}>Calories</Text>
            <TextInput
              placeholder='Calories'
              style={styles.AddMealDialog.textInput}
              inputMode='numeric'
              value={values.calories}
              onChangeText={(text) => setField('calories', text)}
            />
          </View>

          {/* Carbs, Fat, Proteins Input */}
          <View style={styles.AddMealDialog.ingredientSection}>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Protein (g)</Text>
              <TextInput
                placeholder='Protein (g)'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
                value={values.protein}
                onChangeText={(text) => setField('protein', text)}
              />
            </View>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Carbs (g)</Text>
              <TextInput
                placeholder='Carbs (g)'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
                value={values.carbs}
                onChangeText={(text) => setField('carbs', text)}
              />
            </View>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Fat (g)</Text>
              <TextInput
                placeholder='Fat (g)'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
                value={values.fat}
                onChangeText={(text) => setField('fat', text)}
              />
            </View>
          </View>
          {error && (
            <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
          )}
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
