import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Sample data for ongoing services and new requests
const ongoingServices = [
  {
    id: 1,
    title: 'Vehicle Inspection',
    subtitle: 'Diagnostic Job',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyxAr1RS91l2QsPKKpX78MjExY_OcanIp2nmNud9rgGFck_TwQcVTONTM_4iwA9U59esBk2ic0s4Lp5j6yGJfB_lfmwoDseKpcAYjAcQmLx2RT03P2AwS34Q0Aq5Ym2pCxDuLY_HMA6IUsO-J_6UpHx_hKs8pMA054gwP-LI83TNp_K9yOooEtc5__cl6qeZ7XergyJzxWUTwllf3dQVAN9CSA0XClt0j2U_j4hUT8Xelfs-oXwoBWajYp7c0666jHqQzDSeDN0Sk',
  },
];

const newRequests = [
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
  {
    id: 3,
    title: 'Brake Repair',
    schedule: 'Schedule: Dec 10, 2024, 2:00 PM',
    subtitle: 'Service Booking',
  },
  {
    id: 4,
    title: 'Engine Trouble',
    schedule: 'Location: 101 Elm Road, Riverdale',
    subtitle: 'Breakdown Request',
  },
];

const earningsSummary = {
  amount: '$2,500',
  period: 'This Month',
};

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <ImageBackground
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx4CEG5CTUk4zPZkt1NvcwJc5UPdbbtewBGU4nXVcMEKHe8fADiXlEGimsVX5gR1iuBXQXYpWUWvZKMNwGZMUPSMGMOkRscZwLwbVJ-_dJ9bKrS65vdHSfVbJlpalSky_xh8Zm9FMuw8v3t492meZ4jStp7k7JP5_cwSAwzEoSg4U2dyXkaSH578UTBhHJmwk5MDzX5sbEqJ-ofRU_1for1lJz8PP0pV973E4-OUaQSZ11s9csJg0jOHYwgb6fwgYER0qQ_EsvWlE" }}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.title}>Mechanic App</Text>
        <TouchableOpacity style={styles.bellButton}>
          {/* Bell Icon SVG can be added here */}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Ongoing Services</Text>
        {ongoingServices.map((service) => (
          <View key={service.id} style={styles.serviceContainer}>
            <ImageBackground
              source={{ uri: service.imageUrl }}
              style={styles.serviceImage}
            />
            <Text style={styles.serviceText}>{service.title}</Text>
            <Text style={styles.serviceSubText}>{service.subtitle}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>New Requests</Text>
        {newRequests.map((request) => (
          <View key={request.id} style={styles.requestContainer}>
            <View style={styles.requestDetails}>
              <Text style={styles.requestText}>{request.title}</Text>
              <Text style={styles.requestSubText}>{request.schedule}</Text>
              <Text style={styles.requestSubText}>{request.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.earningsContainer}>
          <Text style={styles.earningsText}>Earnings Summary</Text>
          <Text style={styles.earningsAmount}>{earningsSummary.amount}</Text>
          <Text style={styles.earningsSubText}>{earningsSummary.period}</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          <View style={styles.quickActionRow}>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.buttonText}>View Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.buttonText}>Check Requests</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quickActionRow}>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.buttonText}>Update Job Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.buttonText}>Manage Diagnostics</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171412',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#171412',
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  bellButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
  },
  serviceContainer: {
    backgroundColor: '#362e2b',
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  serviceImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  serviceText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  serviceSubText: {
    color: '#b4a7a2',
    fontSize: 12,
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#171412',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  requestDetails: {
    flex: 1,
  },
  requestText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  requestSubText: {
    color: '#b4a7a2',
    fontSize: 12,
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
    fontSize: 12,
  },
  earningsContainer: {
    padding: 16,
    backgroundColor: '#25201e',
    borderRadius: 8,
    margin: 16,
  },
  earningsText: {
    color: '#b4a7a2',
    fontSize: 12,
  },
  earningsAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  earningsSubText: {
    color: '#b4a7a2',
    fontSize: 12,
  },
  quickActionsContainer: {
    padding: 16,
  },
  quickActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quickActionButton: {
    backgroundColor: '#362e2b',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#25201e',
    padding: 8,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#b4a7a2',
    fontSize: 12,
  },
});

export default Dashboard;
