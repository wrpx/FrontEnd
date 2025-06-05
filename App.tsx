import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  Alert,
} from 'react-native';
import Button from './src/components/Button';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = (): void => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = (): void => {
    Alert.alert(
      'รีเซ็ตตัวนับ',
      'คุณต้องการรีเซ็ตตัวนับเป็น 0 หรือไม่?',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        { text: 'ตกลง', onPress: () => setCount(0) },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ตัวนับ TypeScript</Text>
        <Text style={styles.counter}>{count}</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="เพิ่ม"
            onPress={handleIncrement}
            variant="primary"
          />
          <Button
            title="ลด"
            onPress={handleDecrement}
            variant="secondary"
            disabled={count <= 0}
          />
        </View>
        
        <Button
          title="รีเซ็ต"
          onPress={handleReset}
          variant="secondary"
          style={styles.resetButton}
        />
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  title: TextStyle;
  counter: TextStyle;
  buttonContainer: ViewStyle;
  resetButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  counter: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#007AFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  resetButton: {
    marginTop: 20,
  },
});

export default App;