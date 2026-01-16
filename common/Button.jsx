import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../app-styles.js';
export default function Button({ title, type = 'primary', onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.buttonStyles.button, styles.buttonStyles[type]]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
