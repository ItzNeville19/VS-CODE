import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AIScreen: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true);
      // Simulate AI response
      setTimeout(() => {
        setIsTyping(false);
        setMessage('');
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="sparkles" size={24} color="#4285F4" />
          <Text style={styles.headerTitle}>Gemini AI Assistant</Text>
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.welcomeCard}>
          <Ionicons name="sparkles" size={48} color="#4285F4" />
          <Text style={styles.welcomeTitle}>How can I help you today?</Text>
          <Text style={styles.welcomeSubtitle}>
            I can help you schedule meetings, manage tasks, and provide insights about your day.
          </Text>
        </View>

        <View style={styles.suggestions}>
          <Text style={styles.suggestionsTitle}>Quick Actions</Text>
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>"Schedule a meeting for tomorrow"</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>"What's my schedule today?"</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionText}>"Create a task reminder"</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ask me anything..."
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
          onPress={handleSendMessage}
          disabled={!message.trim()}
        >
          <Ionicons name="send" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8EAED',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#202124',
    marginLeft: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202124',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#5F6368',
    textAlign: 'center',
    lineHeight: 20,
  },
  suggestions: {
    marginBottom: 20,
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 12,
  },
  suggestionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8EAED',
  },
  suggestionText: {
    fontSize: 14,
    color: '#5F6368',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#DADCE0',
  },
});

export default AIScreen;