import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import LiquidGlass from '../components/LiquidGlass';

const ProfileScreen: React.FC = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.headerTitle, { color: theme.colors.onSurface }]}>Profile</Text>
      </View>
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="Profile screen content"
      >
        <LiquidGlass style={styles.profileCardContainer}>
          <View style={styles.profileCard}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle" size={80} color={theme.colors.primary} />
            </View>
            <Text style={[styles.userName, { color: theme.colors.onSurface }]}>Alex Johnson</Text>
            <Text style={[styles.userEmail, { color: theme.colors.onSurfaceVariant }]}>alex.johnson@gmail.com</Text>
          </View>
        </LiquidGlass>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Account</Text>
          <LiquidGlass style={styles.menuItemContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              accessible={true}
              accessibilityLabel="Edit profile"
              accessibilityRole="button"
            >
              <Ionicons name="person-outline" size={24} color={theme.colors.onSurfaceVariant} />
              <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>Edit Profile</Text>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </LiquidGlass>
          
          <LiquidGlass style={styles.menuItemContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              accessible={true}
              accessibilityLabel="Notifications settings"
              accessibilityRole="button"
            >
              <Ionicons name="notifications-outline" size={24} color={theme.colors.onSurfaceVariant} />
              <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>Notifications</Text>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </LiquidGlass>
          
          <LiquidGlass style={styles.menuItemContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              accessible={true}
              accessibilityLabel="Privacy and security settings"
              accessibilityRole="button"
            >
              <Ionicons name="shield-outline" size={24} color={theme.colors.onSurfaceVariant} />
              <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>Privacy & Security</Text>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </LiquidGlass>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Integrations</Text>
          <LiquidGlass style={styles.menuItemContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              accessible={true}
              accessibilityLabel="Google Calendar integration"
              accessibilityRole="button"
            >
              <Ionicons name="calendar-outline" size={24} color={theme.colors.onSurfaceVariant} />
              <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>Google Calendar</Text>
              <View style={[styles.connectedBadge, { backgroundColor: theme.colors.success }]}>
                <Text style={styles.connectedText}>Connected</Text>
              </View>
            </TouchableOpacity>
          </LiquidGlass>
          
          <LiquidGlass style={styles.menuItemContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              accessible={true}
              accessibilityLabel="Google Tasks integration"
              accessibilityRole="button"
            >
              <Ionicons name="checkmark-circle-outline" size={24} color={theme.colors.onSurfaceVariant} />
              <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>Google Tasks</Text>
              <View style={[styles.connectedBadge, { backgroundColor: theme.colors.success }]}>
                <Text style={styles.connectedText}>Connected</Text>
              </View>
            </TouchableOpacity>
          </LiquidGlass>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Support</Text>
          <LiquidGlass style={styles.menuItemContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              accessible={true}
              accessibilityLabel="Help and support"
              accessibilityRole="button"
            >
              <Ionicons name="help-circle-outline" size={24} color={theme.colors.onSurfaceVariant} />
              <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>Help & Support</Text>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </LiquidGlass>
          
          <LiquidGlass style={styles.menuItemContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              accessible={true}
              accessibilityLabel="Terms of service"
              accessibilityRole="button"
            >
              <Ionicons name="document-text-outline" size={24} color={theme.colors.onSurfaceVariant} />
              <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>Terms of Service</Text>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </LiquidGlass>
        </View>

        <LiquidGlass style={styles.signOutButtonContainer}>
          <TouchableOpacity 
            style={styles.signOutButton}
            accessible={true}
            accessibilityLabel="Sign out of account"
            accessibilityRole="button"
            accessibilityHint="Double tap to sign out"
          >
            <Ionicons name="log-out-outline" size={24} color={theme.colors.error} />
            <Text style={[styles.signOutText, { color: theme.colors.error }]}>Sign Out</Text>
          </TouchableOpacity>
        </LiquidGlass>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileCardContainer: {
    marginBottom: 24,
  },
  profileCard: {
    padding: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  menuItemContainer: {
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
  connectedBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  connectedText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  signOutButtonContainer: {
    marginTop: 20,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default ProfileScreen;