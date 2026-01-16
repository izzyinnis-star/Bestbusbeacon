import {Vibration} from 'react-native';

// Play a chime sound when signaling
// Note: For a real implementation, you would use react-native-sound or expo-av
// For this demonstration, we'll use a simple console log
export const playChime = () => {
  console.log('🔔 Playing chime sound');
  // In a real app, you would play an actual sound file here
  // Example with react-native-sound:
  // const chime = new Sound('chime.mp3', Sound.MAIN_BUNDLE, (error) => {
  //   if (!error) {
  //     chime.play();
  //   }
  // });
};

// Vibrate the device
export const vibrate = (duration = 100) => {
  try {
    Vibration.vibrate(duration);
  } catch (error) {
    console.error('Vibration error:', error);
  }
};

// Cancel vibration
export const cancelVibration = () => {
  try {
    Vibration.cancel();
  } catch (error) {
    console.error('Cancel vibration error:', error);
  }
};
