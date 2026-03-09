import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Headline, Subheading, Surface, HelperText } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(false);

    const handleSearch = () => {
        if (searchQuery.trim().length < 3) {
            setError(true);
            return;
        }
        setError(false);
        navigation.navigate('Results', { query: searchQuery });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Surface style={styles.logoContainer}>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/263/263142.png' }}
                            style={styles.logo}
                        />
                    </Surface>
                    <Headline style={styles.title}>PriceCompare.in</Headline>
                    <Subheading style={styles.subtitle}>Find the best deals across India</Subheading>
                </View>

                <View style={styles.searchSection}>
                    <TextInput
                        label="What are you looking for?"
                        value={searchQuery}
                        onChangeText={text => {
                            setSearchQuery(text);
                            if (text.length >= 3) setError(false);
                        }}
                        mode="outlined"
                        placeholder="e.g. iPhone 15, Sony TV, Dell Laptop"
                        style={styles.input}
                        left={<TextInput.Icon icon="magnify" />}
                        error={error}
                    />
                    <HelperText type="error" visible={error}>
                        Please enter at least 3 characters.
                    </HelperText>

                    <Button
                        mode="contained"
                        onPress={handleSearch}
                        style={styles.button}
                        contentStyle={styles.buttonContent}
                        labelStyle={styles.buttonLabel}
                    >
                        Search Prices
                    </Button>
                </View>

                <View style={styles.footer}>
                    <Subheading style={styles.footerText}>Compare Amazon, Flipkart, Croma & more</Subheading>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoContainer: {
        padding: 20,
        borderRadius: 60,
        elevation: 4,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6200EE',
    },
    subtitle: {
        color: '#757575',
        textAlign: 'center',
    },
    searchSection: {
        width: '100%',
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 4,
    },
    button: {
        marginTop: 10,
        borderRadius: 8,
        elevation: 2,
    },
    buttonContent: {
        height: 56,
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#9E9E9E',
    }
});

export default HomeScreen;
