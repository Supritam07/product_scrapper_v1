import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Text, Headline, Button, Banner, IconButton } from 'react-native-paper';
import { searchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';

const ResultsScreen = ({ route, navigation }) => {
    const { query } = route.params;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchResults();
    }, [query]);

    const fetchResults = async () => {
        setLoading(true);
        setError(null);
        try {
            const results = await searchProducts(query);
            setProducts(results);
        } catch (err) {
            setError('Failed to fetch product prices. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item, index }) => {
        // Check if it's the cheapest item (since we sorted by price in service)
        const isCheapest = index === 0 && products.length > 1;
        return <ProductCard product={item} isCheapest={isCheapest} />;
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#6200EE" />
                <Text style={styles.loadingText}>Searching across stores...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <IconButton icon="alert-circle" size={60} iconColor="#B00020" />
                <Text style={styles.errorText}>{error}</Text>
                <Button mode="contained" onPress={fetchResults} style={styles.retryButton}>
                    Retry
                </Button>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Headline style={styles.headerTitle}>Results for "{query}"</Headline>
                <Text style={styles.resultCount}>{products.length} stores found</Text>
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.center}>
                        <Text>No products found for your search.</Text>
                        <Button mode="text" onPress={() => navigation.goBack()}>Search again</Button>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        padding: 16,
        backgroundColor: '#fff',
        elevation: 2,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    resultCount: {
        color: '#757575',
        marginTop: 4,
    },
    listContent: {
        paddingBottom: 20,
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: '#757575',
    },
    errorText: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#B00020',
    },
    retryButton: {
        marginTop: 10,
    }
});

export default ResultsScreen;
