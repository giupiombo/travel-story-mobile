import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { useMemo, useState } from 'react';
import Button from '../UI/Button';
import { Picker } from '@react-native-picker/picker';
import countryList from 'react-select-country-list';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewPostOutput = ({ onSubmit, onCancel }) => {
  const options = useMemo(() => countryList().getData(), []);
  const [countryValue, setCountryValue] = useState('United States');

  const [inputs, setInputs] = useState({
    name: {
      value: '',
      isValid: true,
    },
    title: {
      value: '',
      isValid: true,
    },
    text: {
      value: '',
      isValid: true,
    },
    country: {
      value: countryValue,
      isValid: true,
    },
    image: {
      value: '',
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const date = new Date();
    const formattedDate = `${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getUTCDate()}, ${date.getFullYear()}`;

    let imageInput = inputs.image.value;
    if (!imageInput.trim().length > 0) {
      imageInput =
        'https://kinsta.com/wp-content/uploads/2017/11/how-to-start-a-travel-blog.png';
    }

    const postData = {
      name: inputs.name.value,
      title: inputs.title.value,
      text: inputs.text.value,
      image: imageInput,
      date: formattedDate,
      country: countryValue,
    };

    const nameIsValid = postData.name.trim().length > 0;
    const titleIsValid = postData.title.trim().length > 0;
    const textIsValid = postData.text.trim().length > 0;

    if (!nameIsValid || !titleIsValid || !textIsValid) {
      setInputs((curInputs) => {
        return {
          name: { value: curInputs.name.value, isValid: nameIsValid },
          title: { value: curInputs.title.value, isValid: titleIsValid },
          text: {
            value: curInputs.text.value,
            isValid: textIsValid,
          },
          image: { value: curInputs.image.value, isValid: true },
          country: { value: curInputs.country.value, isValid: countryIsValid },
        };
      });
      return;
    }

    onSubmit(postData);
  }

  return (
    <View style={styles.root}>
      <ScrollView>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Input
              label="Name"
              invalid={!inputs.name.isValid}
              textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, 'name'),
                value: inputs.name.value,
              }}
            />
            <Input
              label="Title"
              invalid={!inputs.title.isValid}
              textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, 'title'),
                value: inputs.title.value,
              }}
            />
            <Input
              label="Text"
              invalid={!inputs.text.isValid}
              textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'text'),
                value: inputs.text.value,
              }}
            />
            <Text style={styles.countryLabel}>Country</Text>
            <Picker
              selectedValue={countryValue}
              onValueChange={(itemValue, itemIndex) =>
                setCountryValue(itemValue)
              }
            >
              {options.map((option) => (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.label}
                />
              ))}
            </Picker>
            <Input
              label="Image URL"
              textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, 'image'),
                value: inputs.image.value,
              }}
            />
            <View style={styles.buttons}>
              <Button style={styles.button} mode="flat" onPress={onCancel}>
                Cancel
              </Button>
              <Button style={styles.button} onPress={submitHandler}>
                Add
              </Button>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
};

export default NewPostOutput;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F7C59F',
  },
  container: {
    marginHorizontal: 12,
    marginTop: 12,
    padding: 12,
  },
  countryLabel: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 4,
    marginHorizontal: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
