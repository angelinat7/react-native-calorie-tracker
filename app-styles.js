import { StyleSheet } from 'react-native';
import AddMealDialog from './components/add-meal/AddMealDialog';

const colours = {
  white: '#FFFFFF',
  background: '#DDECEA',
  textPrimary: '#212121',
  textSecondary: '#757575',
  borderColor: '#E0E0E0',
  accent: '#FF5722',
  tint: '#f1f1f1',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: colours.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    backgroundColor: colours.white,
    boxShadow: '2px 2px 4px rgba(157, 157, 157, 0.2)',
    borderWidth: 1,
    borderColor: colours.borderColor,
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  endSection: {
    width: '100%',
    backgroundColor: colours.white,
    borderWidth: 1,
    borderColor: colours.borderColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colours.textPrimary,
  },
  subheading: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.textSecondary,
  },
  mealSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AddMealDialog: {
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: 380,
      height: 420,
      backgroundColor: colours.white,
      justifyContent: 'space-between',
      borderRadius: 10,
    },
    inputSection: {
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    inputLabel: {
      fontSize: 12,
      marginBottom: 5,
      color: colours.textPrimary,
    },
    textInput: {
      borderRadius: 5,
      padding: 10,
      fontSize: 14,
      backgroundColor: colours.tint,
      color: colours.textSecondary,
    },
    ingredientSection: {
      marginTop: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      gap: 10,
      flex: 1,
    },
    ingredientsInput: {
      flex: 1,
    },
  },
  MealCard: {
    card: {
      flexDirection: 'column',
      backgroundColor: colours.white,
      borderRadius: 5,
      padding: 8,
      marginVertical: 5,
      backgroundColor: colours.tint,
    },
    title: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    mealName: {
      fontSize: 18,
      fontWeight: '600',
      color: colours.textPrimary,
    },
    nutritionInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    nutritionInfoText: {
      fontSize: 10,
      lineHeight: 16,
    },
  },
  buttonStyles: {
    button: {
      width: 120,
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 5,
      fontWeight: 'bold',
      paddingVertical: 10,
    },
    primary: {
      color: 'white',
      backgroundColor: 'black',
    },
    secondary: {
      borderColor: colours.textSecondary,
    },
  },
});
