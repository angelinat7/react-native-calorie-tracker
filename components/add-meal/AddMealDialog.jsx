import { Modal, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { X } from 'lucide-react-native';
import { styles } from '../../app-styles.js';

export default function AddMealDialog({ onClose }) {
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
            />
          </View>
          <View style={styles.AddMealDialog.inputSection}>
            <Text style={styles.AddMealDialog.inputLabel}>Calories</Text>
            <TextInput
              placeholder='0'
              style={styles.AddMealDialog.textInput}
              inputMode='numeric'
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
              />
            </View>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Carbs (g)</Text>
              <TextInput
                placeholder='0'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
              />
            </View>
            <View style={styles.AddMealDialog.ingredientsInput}>
              <Text style={styles.AddMealDialog.inputLabel}>Fat (g)</Text>
              <TextInput
                placeholder='0'
                style={styles.AddMealDialog.textInput}
                inputMode='numeric'
              />
            </View>
          </View>
          <View style={styles.AddMealDialog.buttonsSection}>
            <TouchableOpacity onPress={onClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
