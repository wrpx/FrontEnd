import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      <Text style={[
        styles.buttonText,
        variant === 'primary' ? styles.primaryText : styles.secondaryText,
        disabled && styles.disabledText,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

interface Styles {
  button: ViewStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  disabledButton: ViewStyle;
  buttonText: TextStyle;
  primaryText: TextStyle;
  secondaryText: TextStyle;
  disabledText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#007AFF',
  },
  disabledText: {
    color: '#999999',
  },
});

export default Button; 