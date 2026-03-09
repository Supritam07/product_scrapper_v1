import React from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Button, Badge, Text } from 'react-native-paper';

const ProductCard = ({ product, isCheapest }) => {
    const handleOpenLink = () => {
        if (product.link) {
            Linking.openURL(product.link).catch((err) =>
                console.error("Couldn't load page", err)
            );
        }
    };

    return (
        <Card style={[styles.card, isCheapest && styles.cheapestCard]}>
            {isCheapest && (
                <Badge style={styles.badge} size={25}>BEST PRICE</Badge>
            )}
            <Card.Cover source={{ uri: product.image || 'https://via.placeholder.com/150' }} style={styles.image} />
            <Card.Content style={styles.content}>
                <Text style={styles.storeName}>{product.store}</Text>
                <Title numberOfLines={2} style={styles.title}>{product.title}</Title>
                <Paragraph style={styles.price}>
                    ₹{product.price.toLocaleString('en-IN')}
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button
                    mode="contained"
                    onPress={handleOpenLink}
                    style={isCheapest ? styles.cheapestButton : styles.button}
                >
                    View on {product.store}
                </Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        elevation: 4,
        backgroundColor: '#fff',
    },
    cheapestCard: {
        borderColor: '#4CAF50',
        borderWidth: 2,
        backgroundColor: '#F1F8E9',
    },
    image: {
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    content: {
        paddingVertical: 12,
    },
    storeName: {
        fontSize: 12,
        color: '#757575',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 16,
        lineHeight: 20,
        marginTop: 4,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E91E63',
        marginTop: 8,
    },
    badge: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        backgroundColor: '#4CAF50',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        borderRadius: 8,
    },
    cheapestButton: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#4CAF50',
    }
});

export default ProductCard;
