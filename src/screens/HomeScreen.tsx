import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  AccessibilityInfo,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { format, startOfDay, addDays } from 'date-fns';
import { useTheme } from '../context/ThemeContext';
import LiquidGlass from '../components/LiquidGlass';
import AccessibleButton from '../components/AccessibleButton';

const { width, height } = Dimensions.get('window');

interface Event {
  id: string;
  title: string;
  time: string;
  type: 'meeting' | 'task' | 'reminder';
  color: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate?: Date;
}

const HomeScreen: React.FC = () => {
  const { theme, isDark, toggleTheme, isAutoTheme } = useTheme();
  const [greeting, setGreeting] = useState('');
  const [todayEvents, setTodayEvents] = useState<Event[]>([]);
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);
  const [aiInsight, setAiInsight] = useState('');
  const [showThemeModal, setShowThemeModal] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 17) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }

    // Mock data
    setTodayEvents([
      {
        id: '1',
        title: 'Team Standup',
        time: '9:00 AM',
        type: 'meeting',
        color: theme.colors.primary,
      },
      {
        id: '2',
        title: 'Review Q4 Goals',
        time: '2:00 PM',
        type: 'task',
        color: theme.colors.secondary,
      },
      {
        id: '3',
        title: 'Client Call',
        time: '4:30 PM',
        type: 'meeting',
        color: theme.colors.tertiary,
      },
    ]);

    setUpcomingTasks([
      {
        id: '1',
        title: 'Prepare presentation slides',
        completed: false,
        priority: 'high',
        dueDate: addDays(new Date(), 1),
      },
      {
        id: '2',
        title: 'Review project proposal',
        completed: false,
        priority: 'medium',
        dueDate: addDays(new Date(), 2),
      },
      {
        id: '3',
        title: 'Update documentation',
        completed: true,
        priority: 'low',
        dueDate: new Date(),
      },
    ]);

    setAiInsight('Based on your calendar, you have 3 hours of focused time this afternoon. Consider scheduling your most important tasks during this period.');
  }, [theme.colors]);

  const renderEventCard = (event: Event) => (
    <LiquidGlass key={event.id} style={styles.eventCardContainer}>
      <TouchableOpacity 
        style={styles.eventCard}
        accessible={true}
        accessibilityLabel={`${event.title} at ${event.time}`}
        accessibilityRole="button"
        accessibilityHint="Double tap to view event details"
      >
        <View style={[styles.eventIndicator, { backgroundColor: event.color }]} />
        <View style={styles.eventContent}>
          <Text style={[styles.eventTitle, { color: theme.colors.onSurface }]}>{event.title}</Text>
          <Text style={[styles.eventTime, { color: theme.colors.onSurfaceVariant }]}>{event.time}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={theme.colors.onSurfaceVariant} />
      </TouchableOpacity>
    </LiquidGlass>
  );

  const renderTaskCard = (task: Task) => (
    <LiquidGlass key={task.id} style={styles.taskCardContainer}>
      <TouchableOpacity 
        style={styles.taskCard}
        accessible={true}
        accessibilityLabel={`${task.title}, ${task.completed ? 'completed' : 'not completed'}`}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
        accessibilityHint="Double tap to toggle task completion"
      >
        <TouchableOpacity 
          style={[
            styles.checkbox, 
            task.completed && { backgroundColor: theme.colors.success, borderColor: theme.colors.success }
          ]}
          accessible={false}
        >
          {task.completed && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
        </TouchableOpacity>
        <View style={styles.taskContent}>
          <Text style={[styles.taskTitle, task.completed && styles.taskCompleted, { color: theme.colors.onSurface }]}>
            {task.title}
          </Text>
          {task.dueDate && (
            <Text style={[styles.taskDueDate, { color: theme.colors.onSurfaceVariant }]}>
              Due {format(task.dueDate, 'MMM d')}
            </Text>
          )}
        </View>
        <View style={[styles.priorityIndicator, { backgroundColor: getPriorityColor(task.priority) }]} />
      </TouchableOpacity>
    </LiquidGlass>
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return theme.colors.error;
      case 'medium':
        return theme.colors.warning;
      case 'low':
        return theme.colors.success;
      default:
        return theme.colors.onSurfaceVariant;
    }
  };

  const renderThemeModal = () => (
    <Modal
      visible={showThemeModal}
      transparent
      animationType="fade"
      onRequestClose={() => setShowThemeModal(false)}
      accessibilityLabel="Theme settings modal"
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={() => setShowThemeModal(false)}
        accessible={true}
        accessibilityLabel="Close theme settings"
        accessibilityRole="button"
      >
        <LiquidGlass style={styles.themeModalContainer}>
          <View style={styles.themeModal}>
            <Text style={[styles.themeModalTitle, { color: theme.colors.onSurface }]}>Theme Settings</Text>
            
            <TouchableOpacity 
              style={[styles.themeOption, isAutoTheme && styles.themeOptionSelected]} 
              onPress={() => {
                setShowThemeModal(false);
              }}
              accessible={true}
              accessibilityLabel="Auto theme mode"
              accessibilityRole="radio"
              accessibilityState={{ selected: isAutoTheme }}
            >
              <Ionicons name="phone-portrait" size={24} color={theme.colors.primary} />
              <Text style={[styles.themeOptionText, { color: theme.colors.onSurface }]}>Auto (System)</Text>
              {isAutoTheme && <Ionicons name="checkmark" size={20} color={theme.colors.primary} />}
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.themeOption, !isDark && !isAutoTheme && styles.themeOptionSelected]} 
              onPress={() => {
                toggleTheme();
                setShowThemeModal(false);
              }}
              accessible={true}
              accessibilityLabel="Light theme mode"
              accessibilityRole="radio"
              accessibilityState={{ selected: !isDark && !isAutoTheme }}
            >
              <Ionicons name="sunny" size={24} color={theme.colors.warning} />
              <Text style={[styles.themeOptionText, { color: theme.colors.onSurface }]}>Light</Text>
              {!isDark && !isAutoTheme && <Ionicons name="checkmark" size={20} color={theme.colors.primary} />}
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.themeOption, isDark && !isAutoTheme && styles.themeOptionSelected]} 
              onPress={() => {
                toggleTheme();
                setShowThemeModal(false);
              }}
              accessible={true}
              accessibilityLabel="Dark theme mode"
              accessibilityRole="radio"
              accessibilityState={{ selected: isDark && !isAutoTheme }}
            >
              <Ionicons name="moon" size={24} color={theme.colors.info} />
              <Text style={[styles.themeOptionText, { color: theme.colors.onSurface }]}>Dark</Text>
              {isDark && !isAutoTheme && <Ionicons name="checkmark" size={20} color={theme.colors.primary} />}
            </TouchableOpacity>
          </View>
        </LiquidGlass>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        accessibilityLabel="Home screen content"
      >
        {/* Enhanced Header with Advanced Gradients */}
        <LinearGradient
          colors={[theme.colors.gradientStart, theme.colors.gradientEnd, theme.colors.tertiary]}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.7, 1]}
        >
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.userName}>Alex</Text>
            <Text style={styles.date}>{format(new Date(), 'EEEE, MMMM d')}</Text>
          </View>
          <TouchableOpacity 
            style={styles.profileButton} 
            onPress={() => setShowThemeModal(true)}
            accessible={true}
            accessibilityLabel="Open theme settings"
            accessibilityRole="button"
            accessibilityHint="Double tap to change app theme"
          >
            <LinearGradient
              colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
              style={styles.profileGradient}
            >
              <Ionicons name="person-circle" size={40} color="#FFFFFF" />
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>

        {/* Enhanced AI Insight Card with Liquid Glass */}
        <LiquidGlass style={styles.insightCardContainer}>
          <LinearGradient
            colors={[theme.colors.primary + '20', theme.colors.secondary + '10']}
            style={styles.insightGradient}
          >
            <View style={styles.insightHeader}>
              <Ionicons name="sparkles" size={24} color={theme.colors.primary} />
              <Text style={[styles.insightTitle, { color: theme.colors.onSurface }]}>AI Insight</Text>
            </View>
            <Text style={[styles.insightText, { color: theme.colors.onSurfaceVariant }]}>{aiInsight}</Text>
          </LinearGradient>
        </LiquidGlass>

        {/* Today's Schedule */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Today's Schedule</Text>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="View all events"
              accessibilityRole="button"
            >
              <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>See all</Text>
            </TouchableOpacity>
          </View>
          {todayEvents.map(renderEventCard)}
        </View>

        {/* Upcoming Tasks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Upcoming Tasks</Text>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="View all tasks"
              accessibilityRole="button"
            >
              <Text style={[styles.seeAllText, { color: theme.colors.primary }]}>See all</Text>
            </TouchableOpacity>
          </View>
          {upcomingTasks.map(renderTaskCard)}
        </View>

        {/* Enhanced Quick Actions with Liquid Glass */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity 
              style={styles.quickAction}
              accessible={true}
              accessibilityLabel="Create new event"
              accessibilityRole="button"
              accessibilityHint="Double tap to create a new calendar event"
            >
              <LinearGradient
                colors={[theme.colors.primary, theme.colors.primary + 'CC']}
                style={styles.quickActionIcon}
              >
                <Ionicons name="add" size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={[styles.quickActionText, { color: theme.colors.onSurfaceVariant }]}>New Event</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickAction}
              accessible={true}
              accessibilityLabel="Create new task"
              accessibilityRole="button"
              accessibilityHint="Double tap to create a new task"
            >
              <LinearGradient
                colors={[theme.colors.secondary, theme.colors.secondary + 'CC']}
                style={styles.quickActionIcon}
              >
                <Ionicons name="checkmark" size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={[styles.quickActionText, { color: theme.colors.onSurfaceVariant }]}>New Task</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickAction}
              accessible={true}
              accessibilityLabel="Open AI assistant"
              accessibilityRole="button"
              accessibilityHint="Double tap to open AI assistant"
            >
              <LinearGradient
                colors={[theme.colors.tertiary, theme.colors.tertiary + 'CC']}
                style={styles.quickActionIcon}
              >
                <Ionicons name="sparkles" size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={[styles.quickActionText, { color: theme.colors.onSurfaceVariant }]}>AI Assistant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {renderThemeModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 200,
  },
  headerContent: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 4,
  },
  profileButton: {
    marginTop: 10,
  },
  profileGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insightCardContainer: {
    margin: 20,
    marginTop: -20,
  },
  insightGradient: {
    padding: 20,
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  insightText: {
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
  },
  eventCardContainer: {
    marginBottom: 8,
  },
  eventCard: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginRight: 12,
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
  },
  taskCardContainer: {
    marginBottom: 8,
  },
  taskCard: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  taskDueDate: {
    fontSize: 12,
  },
  priorityIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  quickAction: {
    alignItems: 'center',
    flex: 1,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeModalContainer: {
    width: width * 0.8,
  },
  themeModal: {
    padding: 24,
  },
  themeModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  themeOptionSelected: {
    backgroundColor: 'rgba(66, 133, 244, 0.1)',
  },
  themeOptionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
});

export default HomeScreen;