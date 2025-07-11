import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { format, startOfDay, addDays } from 'date-fns';

const { width } = Dimensions.get('window');

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
  const [greeting, setGreeting] = useState('');
  const [todayEvents, setTodayEvents] = useState<Event[]>([]);
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);
  const [aiInsight, setAiInsight] = useState('');

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
        color: '#4285F4',
      },
      {
        id: '2',
        title: 'Review Q4 Goals',
        time: '2:00 PM',
        type: 'task',
        color: '#34A853',
      },
      {
        id: '3',
        title: 'Client Call',
        time: '4:30 PM',
        type: 'meeting',
        color: '#FBBC04',
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
  }, []);

  const renderEventCard = (event: Event) => (
    <TouchableOpacity key={event.id} style={styles.eventCard}>
      <View style={[styles.eventIndicator, { backgroundColor: event.color }]} />
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventTime}>{event.time}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9AA0A6" />
    </TouchableOpacity>
  );

  const renderTaskCard = (task: Task) => (
    <TouchableOpacity key={task.id} style={styles.taskCard}>
      <TouchableOpacity style={[styles.checkbox, task.completed && styles.checkboxCompleted]}>
        {task.completed && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
      </TouchableOpacity>
      <View style={styles.taskContent}>
        <Text style={[styles.taskTitle, task.completed && styles.taskCompleted]}>
          {task.title}
        </Text>
        {task.dueDate && (
          <Text style={styles.taskDueDate}>
            Due {format(task.dueDate, 'MMM d')}
          </Text>
        )}
      </View>
      <View style={[styles.priorityIndicator, { backgroundColor: getPriorityColor(task.priority) }]} />
    </TouchableOpacity>
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return '#EA4335';
      case 'medium':
        return '#FBBC04';
      case 'low':
        return '#34A853';
      default:
        return '#9AA0A6';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#4285F4', '#34A853']}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.userName}>Alex</Text>
            <Text style={styles.date}>{format(new Date(), 'EEEE, MMMM d')}</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={40} color="#FFFFFF" />
          </TouchableOpacity>
        </LinearGradient>

        {/* AI Insight Card */}
        <View style={styles.insightCard}>
          <View style={styles.insightHeader}>
            <Ionicons name="sparkles" size={24} color="#4285F4" />
            <Text style={styles.insightTitle}>AI Insight</Text>
          </View>
          <Text style={styles.insightText}>{aiInsight}</Text>
        </View>

        {/* Today's Schedule */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Schedule</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {todayEvents.map(renderEventCard)}
        </View>

        {/* Upcoming Tasks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Tasks</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {upcomingTasks.map(renderTaskCard)}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickAction}>
              <View style={[styles.quickActionIcon, { backgroundColor: '#4285F4' }]}>
                <Ionicons name="add" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickActionText}>New Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAction}>
              <View style={[styles.quickActionIcon, { backgroundColor: '#34A853' }]}>
                <Ionicons name="checkmark" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickActionText}>New Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAction}>
              <View style={[styles.quickActionIcon, { backgroundColor: '#FBBC04' }]}>
                <Ionicons name="sparkles" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.quickActionText}>AI Assistant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    fontSize: 28,
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
  insightCard: {
    margin: 20,
    marginTop: -15,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#202124',
    marginLeft: 8,
  },
  insightText: {
    fontSize: 14,
    color: '#5F6368',
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
    color: '#202124',
  },
  seeAllText: {
    fontSize: 14,
    color: '#4285F4',
    fontWeight: '500',
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
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
    color: '#202124',
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
    color: '#5F6368',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#DADCE0',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#34A853',
    borderColor: '#34A853',
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#202124',
    marginBottom: 4,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#9AA0A6',
  },
  taskDueDate: {
    fontSize: 12,
    color: '#5F6368',
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
    color: '#5F6368',
    fontWeight: '500',
  },
});

export default HomeScreen;