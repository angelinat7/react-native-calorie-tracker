import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { X } from 'lucide-react-native';
export default function AddMealDialog({ onClose }) {
  return (
    <Modal
      animationType='slide'
      onRequestClose={onClose}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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
    </Modal>
  );
}
