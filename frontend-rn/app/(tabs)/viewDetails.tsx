import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Sample data for customer information, vehicle details, service details, and requests
const customerInfo = {
  name: 'Lucas Bennett',
  phone: '555-123-4567',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7XjKjHtznD7Qcf3vO_eo5YWEf1iTrYQelTXwqf2d1uVsUF5co9PC0erzNNo87hpQkAncIoiqhWlAtAXbnMddNFObH1y_JAGLm73VZrFyXx6EdFcy9ph-tvR11WWWSCXp1q96qlIef1ssUUSi49GMFSdJw1c6tn44VQZVllUbQrrfeGHs_d7JxZd7sGGVm4ZN5EIPQupYhuGbGddNiDp11pdl2Mil-PuwFuz8Bsup2KD8lsMs7m78VW7Xsmvos-juVZ0BFxK-eQpY',
};

const vehicleDetails = {
  model: 'Honda Civic',
  year: '2018',
};

const serviceDetails = {
  issue: "The car won't start. I think it might be the battery or the starter motor. I've tried jump-starting it, but no luck.",
  status: 'Accepted',
};

const requests = [
  {
    id: 1,
    title: 'Oil Change',
    schedule: 'Schedule: Nov 15, 2024, 11:30 AM',
    subtitle: 'Service Booking',
  },
  {
    id: 2,
    title: 'Flat Tire',
    schedule: 'Location: 789 Pine Street, Springfield',
    subtitle: 'Breakdown Request',
  },
];

const viewDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Service Request</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Customer Information</Text>
        <View style={styles.infoContainer}>
          <ImageBackground
            source={{ uri: customerInfo.imageUrl }}
            style={styles.profileImage}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoName}>{customerInfo.name}</Text>
            <Text style={styles.infoPhone}>{customerInfo.phone}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Vehicle Details</Text>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            {/* Car Icon */}
            <Text style={styles.iconText}>🚗</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoName}>{vehicleDetails.model}</Text>
            <Text style={styles.infoPhone}>{vehicleDetails.year}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Service Details</Text>
        <View style={styles.serviceDetailContainer}>
          <View style={styles.iconContainer}>
            {/* Wrench Icon */}
            <Text style={styles.iconText}>🔧</Text>
          </View>
          <View style={styles.serviceTextContainer}>
            <Text style={styles.serviceTitle}>Issue</Text>
            <Text style={styles.serviceDescription}>{serviceDetails.issue}</Text>
            <Text style={styles.serviceSubtitle}>Won't start</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            {/* Calendar Icon */}
            <Text style={styles.iconText}>📅</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoName}>Requested Date & Time</Text>
            <Text style={styles.infoPhone}>June 15, 2024, 10:00 AM</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            {/* Map Pin Icon */}
            <Text style={styles.iconText}>📍</Text>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoName}>Vehicle Location</Text>
            <Text style={styles.infoPhone}>123 Main St, Anytown, USA</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl_HyE_UxGSsGLP9gDso67u833GZfcJHaVfrCvlpXztEdXVIcqxTOXV9JhNqO1nGTtWCYMwxDdgCFPEs5nsc454hPhj5DEDXCp1v3NBTN4XL7Y7vonIwULI5POBil6bAmFFfiS_KBB3IYQfR8EcopPrJXXs4WDiZ-8rfga2qGM7NxJpRVFU8iqektroCWYOnzbJi_ibSCDXiX9se0UPc07kYQLLOdp3bKrGu0YADRZI_a2USZodrHWpAggICdDFPnFWX04pKFA9Y8' }}
            style={styles.serviceImage}
          />
        </View>

        <Text style={styles.sectionTitle}>Request Status</Text>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            {/* Check Circle Icon */}
            <Text style={styles.iconText}>✔️</Text>
          </View>
          <Text style={styles.infoName}>{serviceDetails.status}</Text>
        </View>

        <Text style={styles.sectionTitle}>Ongoing Services</Text>
        {requests.map((request) => (
          <View key={request.id} style={styles.requestContainer}>
            <View style={styles.requestDetails}>
              <Text style={styles.requestTitle}>{request.title}</Text>
              <Text style={styles.requestSchedule}>{request.schedule}</Text>
              <Text style={styles.requestSubtitle}>{request.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.earningsContainer}>
          <Text style={styles.earningsText}>Earnings Summary</Text>
          <Text style={styles.earningsAmount}>$2,500</Text>
          <Text style={styles.earningsPeriod}>This Month</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          <View style={styles.quickActionRow}>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.buttonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181311',
    fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#181311',
  },
  backButton: {
    marginRight: 12,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#181311',
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  infoPhone: {
    color: '#baa59c',
    fontSize: 14,
  },
  iconContainer: {
    backgroundColor: '#392d28',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 24,
  },
  serviceDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#181311',
  },
  serviceTextContainer: {
    flex: 1,
  },
  serviceTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  serviceDescription: {
    color: '#baa59c',
    fontSize: 14,
  },
  serviceSubtitle: {
    color: '#baa59c',
    fontSize: 14,
  },
  imageContainer: {
    padding: 16,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#171412',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  requestDetails: {
    flex: 1,
  },
  requestTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  requestSchedule: {
    color: '#b4a7a2',
    fontSize: 14,
  },
  requestSubtitle: {
    color: '#b4a7a2',
    fontSize: 14,
  },
  detailsButton: {
    backgroundColor: '#362e2b',
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  earningsContainer: {
    padding: 16,
    backgroundColor: '#25201e',
    borderRadius: 8,
    margin: 8,
  },
  earningsText: {
    color: '#b4a7a2',
    fontSize: 14,
  },
  earningsAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  earningsPeriod: {
    color: '#b4a7a2',
    fontSize: 14,
  },
  quickActionsContainer: {
    padding: 16,
  },
  quickActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    backgroundColor: '#392d28',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
});

export default viewDetails;
