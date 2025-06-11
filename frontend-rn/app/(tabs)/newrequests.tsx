import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

// Sample data for new requests
const initialNewRequests = [
  {
    id: 1,
    title: 'Oil Change',
    schedule: 'Schedule: Nov 15, 2024, 11:30 AM',
    subtitle: 'Service Booking',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7XjKjHtznD7Qcf3vO_eo5YWEf1iTrYQelTXwqf2d1uVsUF5co9PC0erzNNo87hpQkAncIoiqhWlAtAXbnMddNFObH1y_JAGLm73VZrFyXx6EdFcy9ph-tvR11WWWSCXp1q96qlIef1ssUUSi49GMFSdJw1c6tn44VQZVllUbQrrfeGHs_d7JxZd7sGGVm4ZN5EIPQupYhuGbGddNiDp11pdl2Mil-PuwFuz8Bsup2KD8lsMs7m78VW7Xsmvos-juVZ0BFxK-eQpY',
    distance: '3.2 km',
    eta: '9 mins',
    requestedAt: '11:34 AM',
    address: '123 Elm Street',
    urgency: '🚨 Urgent',
  },
  {
    id: 2,
    title: 'Flat Tire',
    schedule: 'Location: 789 Pine Street, Springfield',
    subtitle: 'Breakdown Request',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGn-_onISI-Pu3F9qRHKDygGPy-gZ3DLfLHZuHKm4bVxSStJ3USP4wpS34xgDz8CZxADj_mk33hvGBhawHcqjssz0wr0MBX0O0xTgW5IaVuDfU9OIFJMeoIeaz-Lv-M-CuQZWSUaoFpRVVxlMwEavNwSfKv1ztDWhiGKV06aikKdb-6vFUQ7ka1Xs9VmpIz847oRi7YnyuBIgbHFUiI0Yj-zAImKkeJixy5iuSnKzFRFIHvX47Y6J5C5L6tip9jBamPVYo0s7vyfQ',
    distance: '5.1 km',
    eta: '12 mins',
    requestedAt: '10:58 AM',
    address: '456 Oak Avenue',
    urgency: '🟠 Normal',
  },
  {
    id: 3,
    title: 'Battery Failure',
    schedule: 'Location: 101 Elm Road, Riverdale',
    subtitle: 'Breakdown Request',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8meCwGbhEeV6SjIEtMpYvECYsS2VCNz3lpRMUpuRnfGL5Hl4yN9OJ7VK6hGp1prAfYERMxY2gmf8lkBUROae5xxgI5yaErnRiUpa8JEko3a5aEZcUn5O_kO0svHdVDH3X3PC-3NZEhmb9r8wWNsmS1tQIh2JuIm9I8SzpuCQT0rWnMYgdpDS_G9tQxMEeF7XNzOU5sFPHonZTH_ErBIKOr1SAHU-iH1XSiicqKi5K_lkk0xcrkZnwEzWFP7gKcNaYb7Unm77aRrY',
    distance: '2.8 km',
    eta: '7 mins',
    requestedAt: '10:22 AM',
    address: '789 Pine Lane',
    urgency: '🟠 Normal',
  },
  {
    id: 4,
    title: 'Brake Issues',
    schedule: 'Location: 456 Oak Avenue',
    subtitle: 'Service Booking',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnVMrj-QSIN4iL9RJwy6O_2ImPIkq-fIxMOmmGEJt4p0nymUVFQYKpkzdvHO5mz8_YO_rgScg7fismcpOrvZI5VB2b5O47KyQ5kpuDfs11Ez8AMpEwRk4UBvwvECj7z9kXA3ZWNU_tL6Hn5lHUyM9d6NWKZsgW6s_zVGla3pwJIL4YsrhmZpgK1d11hGmhaBF-DUlGOeLS7TRIzGFoVrJTmoG7ey4-bJXp95Vf6BbVa-443QL5W88SWqgGKjZuWj15mWEq87Or2Tg',
    distance: '4.5 km',
    eta: '11 mins',
    requestedAt: '09:45 AM',
    address: '101 Maple Drive',
    urgency: '🟠 Normal',
  },
  {
    id: 5,
    title: 'Fuel Pump Failure',
    schedule: 'Location: 789 Pine Lane',
    subtitle: 'Breakdown Request',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbx1EbTjX6usH584_tmgtpM7IoBDR83MVWZABlj7E2S9eLxBZHEM6x2p4UjabTco837JdAGB_CMMSsHCb5YwHNKjZyGoRJ2XdHPgNLQT8vr4yntPXqcB3ETRGL1yb5tqspu4gI2uxiAlmhjAKOIwp7Q7n9MjwxoA_e4hyV1mcqFSOHERFjp0UBK_g2Ny6_TR6opQiQqAKr38SaT7__xYi-01YGgxHJsb1WDcfNZJSPttxO1ne2O4fBSzBvJqTWJ1rX_3e0ihI4q4o',
    distance: '6.3 km',
    eta: '15 mins',
    requestedAt: '09:09 AM',
    address: '222 Cedar Court',
    urgency: '🟠 Normal',
  },
  {
    id: 6,
    title: 'Electrical Fault',
    schedule: 'Location: 101 Maple Drive',
    subtitle: 'Service Booking',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-7TnTE2Wx0if0SUUBqldTeC4NE6vmTqc9KxpzJ2VrYoZk-1emRCZvGYmvpUW-aE20vNP3-r8K3HC3KhSvCWcCSSmWdzVVrZQndktRVsB-jTYv-wT-R8BA_L43jEmf7nRfZeIq86UD952Leg7F8_Ecp1bUkJcDsIfjOYndjqriqidHgVW_vLvoC4UsUWN_ew5NimYky6-Qp_swyni2iTHZzZS83rMWeCrtqaDZ7_0N1a2TF3k1jCCxQYm1TofngVmqAhzvGvAFAtI',
    distance: '3.9 km',
    eta: '10 mins',
    requestedAt: '08:33 AM',
    address: '333 Birch Road',
    urgency: '🟠 Normal',
  },
  {
    id: 7,
    title: 'Steering Problem',
    schedule: 'Location: 222 Cedar Court',
    subtitle: 'Breakdown Request',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZyiMyY-hUNEWFNjTiLjIv5sMnbCtVVG3AChjYV46vZ9QJIyR0iTpw8X5moZRqaBvOc1do2I0yJKlKBZF4DGuqibpsdEBF5RV1Q0GspBF0h2B5rNaOzVRc9tJkuoT_2EgLRU8gRpeFDuxrlcX8J23DUPmqRkSJogKYQ2M10bgKOxr5QCoEzsilGuYazeyFYtuW8ywJOGfcbUty1Y_nGPh119igdTj4M5nu3wYgB-IjWNtlxlmoZ3y5zGFbIAr2PPHDzGzrmd1d288',
    distance: '5.7 km',
    eta: '14 mins',
    requestedAt: '07:57 AM',
    address: '444 Willow Way',
    urgency: '🟠 Normal',
  },
  {
    id: 8,
    title: 'Coolant Leak',
    schedule: 'Location: 333 Birch Road',
    subtitle: 'Service Booking',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQLcVlC1qKKFKaImkIPAQF5HXPTyva_vIl1A7fUkquqLDggLpBhs8ooe3RqaMzTr4pr1Fx0KwG6YmNk6mYy_g0hSzFm567g5k0KFfh6YL6yEalZ0kvhH9zUeRdvL31-QJwgXUFnpaQEMmQZp1qUcLgVU21f4scZzhT0t6p3M_mUfbHNYxnPcGAAj4DCC903kheimo5WyOE-5U57u0b1c-9FFV2UCQSySap4BxCO6kOAZYrz_BE_AhZitCDvZvaf7rAZAItBim9IU',
    distance: '2.5 km',
    eta: '6 mins',
    requestedAt: '07:21 AM',
    address: '555 Aspen Avenue',
    urgency: '🟠 Normal',
  },
  {
    id: 9,
    title: 'Transmission Issue',
    schedule: 'Location: 444 Willow Way',
    subtitle: 'Breakdown Request',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMFqexo0zcafPdQXAmW3wlEW23aZdCYLN_nt21IMljnh5li_8aSg2mNKOJUFw2Ef0sxD_R1cNTs5feWZ5Gb4GOxfVYH7DVFFgxsmskqcFt8-n_T25nyO5j2279vymh-tzIvHgqp4oaDoII-8qNKUHzM2RgsgqgW3P7RjeQR0FZkrLt-wX8Ow-Zvw3LHDWGA96ASh8akLnWcHwNPkfVsgkpACH4NTJi9m34wDB7g4SYBAmEUPd4cn9uDOS0LIpU366aYF0caI43rBg',
    distance: '4.1 km',
    eta: '10 mins',
    requestedAt: '06:45 AM',
    address: '666 Spruce Street',
    urgency: '🟠 Normal',
  },
  {
    id: 10,
    title: 'AC Not Working',
    schedule: 'Location: 555 Aspen Avenue',
    subtitle: 'Service Booking',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-7TnTE2Wx0if0SUUBqldTeC4NE6vmTqc9KxpzJ2VrYoZk-1emRCZvGYmvpUW-aE20vNP3-r8K3HC3KhSvCWcCSSmWdzVVrZQndktRVsB-jTYv-wT-R8BA_L43jEmf7nRfZeIq86UD952Leg7F8_Ecp1bUkJcDsIfjOYndjqriqidHgVW_vLvoC4UsUWN_ew5NimYky6-Qp_swyni2iTHZzZS83rMWeCrtqaDZ7_0N1a2TF3k1jCCxQYm1TofngVmqAhzvGvAFAtI',
    distance: '3.5 km',
    eta: '8 mins',
    requestedAt: '06:09 AM',
    address: '777 Pinecrest Drive',
    urgency: '🟠 Normal',
  },
];

const CheckRequests = () => {
  const navigation = useNavigation();
  const [newRequests, setNewRequests] = useState(initialNewRequests);
  const [searchText, setSearchText] = useState('');

  const handleAcceptRequest = (requestId) => {
    // Implement logic to accept the request
    console.log(`Request ${requestId} accepted`);
  };

  const handleRejectRequest = (requestId) => {
    // Implement logic to reject the request
    console.log(`Request ${requestId} rejected`);
  };

  const filteredRequests = newRequests.filter((request) =>
    request.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerStart}>
          <View style={styles.profileImageContainer}>
            <ImageBackground
              source={{
                uri:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCS0Tf9CT9mh_1ld20aoGOksrl58ls51m5dquyoZ8_8QuCB6edAhY8kVh_vCTKHa4mX2_phSdQJLn_M0NhwuUuhO4ddSYYeGSVePOD1pEbK37Xxwow2Ctdk-o8-lX_NPQR3WRchalvVZ7W7-0QtjKW3qDicFDfY1fRoRJU9X3TpEsmrhuv66tYj6nvMsCYoW658WpHXzGw2qxE_W40EmBfmz2dH3GuX8tZWkRmAeiAyOJSlzJD_COE4fFt-5CKtL7Jn_4YV43HLvA0',
              }}
              style={styles.profileImage}
            />
          </View>
        </View>
        <Text style={styles.headerTitle}>Check Requests</Text>
        <TouchableOpacity style={styles.headerEnd}>
          <SvgUri
            width="24"
            height="24"
            uri="https://www.svgrepo.com/show/509449/bell.svg"
            style={{ color: 'white' }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <SvgUri
              width="24"
              height="24"
              uri="https://www.svgrepo.com/show/493547/wrench.svg"
              style={{ color: '#b4a7a2' }}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search requests"
              placeholderTextColor="#b4a7a2"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        {/* New Request Item */}
{filteredRequests.map((request) => (
  <View key={request.id} style={styles.newRequestItem}>
    <ImageBackground
      source={{ uri: request.imageUrl }}
      style={styles.newRequestImage}
    />
    <View style={styles.newRequestContent}>
      <View style={styles.newRequestText}>
        <Text style={styles.newRequestTitle}>{request.title}</Text>
        <Text style={styles.newRequestDetails}>
          {request.subtitle} • {request.distance} away - ETA {request.eta} • Requested at {request.requestedAt}
        </Text>
        <Text style={styles.newRequestAddress}>{request.address} • {request.urgency}</Text>
      </View>
    </View>
    <View style={styles.requestButtons}>
      <TouchableOpacity
        style={styles.acceptButton}
        onPress={() => handleAcceptRequest(request.id)}
      >
        <Text style={styles.acceptButtonText}>Accept Request</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rejectButton}
        onPress={() => handleRejectRequest(request.id)}
      >
        <Text style={styles.rejectButtonText}>Reject</Text>
      </TouchableOpacity>
    </View>
  </View>
))}
</ScrollView>
    </View>
  );
}
export default CheckRequests;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171412',
    fontFamily: 'Plus Jakarta Sans, Noto Sans, sans-serif',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 30,
    backgroundColor: '#171412',
  },
  headerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 8,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginLeft: -32,
  },
  headerEnd: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#362e2b',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  newRequestItem: {
    backgroundColor: '#171412',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  newRequestImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  newRequestContent: {
    padding: 16,
  },
  newRequestText: {
    marginBottom: 8,
  },
  newRequestTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  newRequestDetails: {
    color: '#b4a7a2',
    fontSize: 14,
    marginBottom: 4,
  },
  newRequestAddress: {
    color: '#b4a7a2',
    fontSize: 14,
  },
  requestButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  acceptButton: {
    backgroundColor: '#f3e0d7',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  acceptButtonText: {
    color: '#171412',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rejectButton: {
    backgroundColor: '#362e2b',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  rejectButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
