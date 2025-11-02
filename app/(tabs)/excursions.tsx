import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '@/lib/colors';
import { ExcursionCard } from '@/components/ExcursionCard';

const SAMPLE_EXCURSIONS = [
  {
    id: '1',
    title: 'Morning Forest Walk',
    description: 'A peaceful walk through pine forests with gentle trails and bird watching opportunities.',
    duration: '45 min',
    distance: '2.3 km',
    difficulty: 'Easy',
  },
  {
    id: '2',
    title: 'Lakeside Meditation Trail',
    description: 'Scenic route along the water with designated meditation spots and benches.',
    duration: '1 hour',
    distance: '3.5 km',
    difficulty: 'Easy',
  },
  {
    id: '3',
    title: 'Hill Country Explorer',
    description: 'Moderate elevation gain with panoramic views and varied terrain for a full workout.',
    duration: '2 hours',
    distance: '5.8 km',
    difficulty: 'Moderate',
  },
];

export default function ExcursionsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Excursions</Text>
        <Text style={styles.subtitle}>Personalized outdoor experiences near you</Text>
      </View>

      <View style={styles.excursionsList}>
        {SAMPLE_EXCURSIONS.map((excursion) => (
          <ExcursionCard
            key={excursion.id}
            title={excursion.title}
            description={excursion.description}
            duration={excursion.duration}
            distance={excursion.distance}
            difficulty={excursion.difficulty}
            onPress={() => {}}
          />
        ))}
      </View>

      <View style={styles.emptyState}>
        <Text style={styles.emptyText}>
          AI-generated excursions will appear here in Phase 4
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  excursionsList: {
    marginBottom: 24,
  },
  emptyState: {
    padding: 24,
    backgroundColor: colors.surface,
    borderRadius: 12,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
