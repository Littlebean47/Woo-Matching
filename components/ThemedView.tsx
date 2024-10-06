import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top
  const paddingBottom = insets.bottom

  return <View style={[{paddingTop, paddingBottom }, style]} {...otherProps} />;
}
