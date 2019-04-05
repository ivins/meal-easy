const initialData = {
  meals: {
    'meal-1': { id: 'meal-1', content: 'Perogies' },
    'meal-2': { id: 'meal-2', content: 'Wraps' },
    'meal-3': { id: 'meal-3', content: 'Salad' },
    'meal-4': { id: 'meal-4', content: 'Burgers' },
    'meal-5': { id: 'meal-5', content: 'Soup' }
  },
  columns: {
    'column-1': { 
      id: 'column-1', 
      title: 'This Weeks Meals', 
      mealIds: ['meal-1', 'meal-2', 'meal-3', 'meal-4', 'meal-5'] 
    }
  },
  columnOrder: ['column-1']
}

export default initialData;