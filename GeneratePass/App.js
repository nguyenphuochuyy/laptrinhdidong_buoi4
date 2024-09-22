import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Switch , TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function App() {
  
  const [passwordLength, setPasswordLength] = useState('6');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const generatePassword = () => {
    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()';

    // tạo hàm gene pass bằng hàm random và lưu vào chuỗi password
    let password = '';
    for (let i = 0; i < parseInt(passwordLength); i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setGeneratedPassword(password);
  };
  return (
    <View style={styles.container}>
    <Text style={styles.header}>PASSWORD GENERATOR</Text>
    <TextInput
      style={styles.passwordBox}
      editable={false}
      value={generatedPassword}
    />

    <View style={styles.optionContainer}>
      <Text style={styles.optionLabel}>Password length</Text>
      <TextInput
        style={styles.inputBox}
        // kiểu bàn phím số
        keyboardType="numeric"
        value={passwordLength}
        onChangeText={text => setPasswordLength(text)}
      />
    </View>

    <View style={styles.optionContainer}>
      <Text style={styles.optionLabel}>Include lower case letters</Text>
      <CheckBox
        checked={includeLowercase}
        onPress={()=>{setIncludeLowercase(!includeLowercase)}}
      />
      
    </View>

    <View style={styles.optionContainer}>
      <Text style={styles.optionLabel}>Include upcase letters</Text>
      <CheckBox
        checked={includeUppercase}
        onPress={()=>{setIncludeUppercase(!includeUppercase)}}
      />
    </View>

    <View style={styles.optionContainer}>
      <Text style={styles.optionLabel}>Include number</Text>
      <CheckBox
        checked={includeNumbers}
        onPress={()=>{setIncludeNumbers(!includeNumbers)}}
      />
    </View>

    <View style={styles.optionContainer}>
      <Text style={styles.optionLabel}>Include special symbol</Text>
      <CheckBox
        checked={includeSymbols}
        onPress={()=>{setIncludeSymbols(!includeSymbols)}}
      />
    </View>

    <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
      <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23235B',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  passwordBox: {
    height: 40,
    width: '100%',
    backgroundColor: '#1a1b47',
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  optionLabel: {
    color: '#fff',
    fontSize: 16,
  },
  inputBox: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  generateButton: {
    backgroundColor: '#3B3B98',
    padding: 15,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
